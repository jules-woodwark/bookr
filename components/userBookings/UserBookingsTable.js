import { useEffect, useContext } from 'react';
import { AuthContext } from 'store';
import useFirebase from 'hooks/useFirebase';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function UserBookings() {
  const authCtx = useContext(AuthContext);
  const { getNodeData, nodeData } = useFirebase();

  const { user } = authCtx;
  console.log(authCtx);

<<<<<<< HEAD
  // useEffect(() => {
  //   user && getNodeData('users', user.uid);
  //   console.log(nodeData);
  // }, [user]);
=======
  useEffect(() => {
    user && getNodeData('users', user.uid);
    console.log(nodeData);
  }, [user]);
>>>>>>> a7f51c7 (half done)

  // const rowMap = nodeData.map((node) => {
  //   return (

  //   );
  // })

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="right">Desk</TableCell>
          <TableCell align="right">Date</TableCell>
          <TableCell align="right">Actions</TableCell>
        </TableRow>
      </TableHead>
    </Table>
  );
}
