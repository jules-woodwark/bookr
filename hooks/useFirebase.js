import { useState, useContext, useCallback } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
} from 'firebase/auth';
import { doc, setDoc, getDoc, getDocs, updateDoc, collection } from 'firebase/firestore';
import { ref, onValue, set, update, remove } from 'firebase/database';
import { db, colRef, auth, database } from '../firebase-config';
import { AuthContext } from '../store/auth-context';
import { UiContext } from '../store/ui-context';
import ValidationSchema from '../models/validationSchema';

const useFirebase = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [nodeData, setNodeData] = useState(null);
  const authCtx = useContext(AuthContext);
  const { showAlert } = useContext(UiContext);
  const { updateAccountSchema, updatePasswordSchema } = ValidationSchema;

  const authRequest = async (isLogin, values) => {
    const { email, password, firstName, lastName } = values;

    try {
      setIsLoading(true);
      const userCredentials = isLogin
        ? await signInWithEmailAndPassword(auth, email, password)
        : await createUserWithEmailAndPassword(auth, email, password);

      if (isLogin) {
        showAlert('success', 'Login Success!');
      } else {
        const id = userCredentials.user.uid;

        await setDoc(doc(colRef, id), {
          firstName,
          lastName,
          email,
        });

        showAlert('success', 'Account Created Successfully!');
      }
    } catch (err) {
      setIsLoading(false);
      showAlert('error', 'An Error Occured', err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      showAlert('info', 'Logged Out');
    } catch (err) {
      showAlert('error', 'Failed to Log Out', err);
    }
  };

  const getNodeData = (...nodes) => {
    setIsLoading(true);
    const nodeRef = ref(database, nodes.join('/'));

    onValue(nodeRef, (snapshot) => {
      const data = snapshot.val();
      setNodeData(data);
      setIsLoading(false);
    });
  };

  const inputNodeData = (data, ...nodes) => {
    setIsSending(true);
    const nodeRef = ref(database, nodes.join('/'));

    set(nodeRef, data)
    .then(() => {
      console.log('Data saved successfully');
    })
    .catch((error) => {
      console.log('Write failed');
      console.log(error);
    });
    setIsSending(false);
  };

  const updateNodeData = (data, ...nodes) => {
    setIsSending(true);
    const nodeRef = ref(database, nodes.join('/'));

    update(nodeRef, data)
    .then(() => {
      console.log('Data saved successfully');
    })
    .catch((error) => {
      console.log('Write failed');
      console.log(error);
    });
    setIsSending(false);
  };

  const removeNodeData = (...nodes) => {
    setIsSending(true);
    const nodeRef = ref(database, nodes.join('/'));

    remove(nodeRef)
    .then(() => {
      console.log('Data saved successfully');
    })
    .catch((error) => {
      console.log('Write failed');
      console.log(error);
    });
    setIsSending(false);
  };

  const bookDesk = (userID, date, club, deskID) => {
    const clubNodes = ['clubs', club, 'bookings', date];
    const userNodes = ['users', userID, 'bookings', date, club];
    const data = { [deskID]: userID };

    // TODO: See if it's possible to combine both of these into 1 API call
    // So if _either_ fail, then the whole attempt rolls back
    try {
      updateNodeData(data, ...clubNodes);
      updateNodeData(data, ...userNodes);
      showAlert('success', 'Successfully booked desk!');
    } catch (err) {
      showAlert('error', 'Failed to book desk!', err);
    }
  };

  // https://firebase.google.com/docs/database/web/read-and-write#delete_data
  // 'you can use update() to delete multiple children in a single API call'
  const unbookDesk = (userID, date, club, deskID) => {
    const clubNodes = ['clubs', club, 'bookings', date];
    const userNodes = ['users', userID, 'bookings', date, club];

    try {
      // TODO: Combines these 2 api calls into 1 update
      // So if _either_ fail, then the whole attempt rolls back
      removeNodeData(...clubNodes, deskID);
      removeNodeData(...userNodes, deskID);
      showAlert('success', 'Successfully unbooked desk!');
    } catch (err) {
      showAlert('error', 'Failed to unbook desk!', err);
    }
  };

  const getUserInfo = useCallback(
    async (uid) => {
      const docRef = doc(db, 'users', uid);
      try {
        const userDoc = await getDoc(docRef);
        const userData = userDoc.data();
        return userData;
      } catch (err) {
        showAlert('error', 'Failed to Load User Data', err);
      }
    },
    [showAlert]
  );

  const getAllUserDocs = useCallback(
    async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        return doc;
      });
      return querySnapshot;
    },
    [showAlert]
  );

  const updateProfile = async (valuesObj) => {
    const { firstName, lastName, email } = valuesObj;
    const { uid } = authCtx.user;

    if (uid) {
      const docRef = doc(db, 'users', uid);
      setIsLoading(true);

      try {
        await updateAccountSchema.validate({ firstName, lastName, email });
        await updateDoc(docRef, {
          firstName,
          lastName,
          email,
        });
        setIsLoading(false);
        showAlert('success', 'Account Details Saved');
      } catch (err) {
        setIsLoading(false);
        showAlert('error', 'Failed to Update Account Details', err);
      }
    } else {
      showAlert('error', 'No User ID');
    }
  };

  const setNewPassword = async (password) => {
    const user = auth.currentUser;

    setIsSending(true);

    try {
      await updatePasswordSchema.validate({ password });
      await updatePassword(user, password);
      setIsSending(false);
      showAlert('success', 'Password Updated');
    } catch (err) {
      setIsSending(false);
      showAlert('error', 'An Error Occured', err);
    }
  };

  return {
    isLoading,
    isSending,
    authRequest,
    logout,
    getUserInfo,
    getAllUserDocs,
    updateProfile,
    setNewPassword,
    getNodeData,
    inputNodeData,
    updateNodeData,
    removeNodeData,
    bookDesk,
    unbookDesk,
    nodeData,
  };
};

export default useFirebase;
