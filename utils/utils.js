const uidToUsernameMapping = {};

export async function getAllUserInfo(getAllUserDocs) {
  const allData = await getAllUserDocs();
  allData.forEach((doc) => {
    const docData = doc.data();
    const username = `${docData.firstName} ${docData.lastName}`;
    if (doc.id in uidToUsernameMapping) {
      // Pass
    } else {
      uidToUsernameMapping[doc.id] = username;
    }
  });
}

export async function getUsername(getAllUserDocs, uid) {
  // Default case
  if (uid in uidToUsernameMapping) {
    return uidToUsernameMapping[uid];
  }

  // First, try to update the uidToUsernameMapping
  await getAllUserInfo(getAllUserDocs);
  if (uid in uidToUsernameMapping) {
    return uidToUsernameMapping[uid];
  }

  return 'someone...';
}