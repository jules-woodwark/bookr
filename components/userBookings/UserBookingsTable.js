import { useEffect, useContext } from 'react';
import { AuthContext } from 'store';
import { v4 as uuidv4 } from 'uuid';
import useFirebase from 'hooks/useFirebase';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import UserBookingsButton from './UserBookingsButton';

function normalizeUserBookings(inputData) {
  const outputArr = [];

  if (inputData === null || undefined) {
    return outputArr;
  }

  const dates = Object.keys(inputData);

  for (let i = 0; i < dates.length; i++) {
    const date = dates[i];
    // for club in clubs
    const club = 'grace';
    const innerData = inputData[date][club];

    const deskIDs = Object.keys(innerData);

    for (let j = 0; j < deskIDs.length; j++) {
      const deskID = deskIDs[j];
      const bookerID = innerData[deskID];
      const datum = { date, deskID, bookedBy: bookerID };
      outputArr.push(datum);
    }
  }

  return outputArr;
}

export default function UserBookings() {
  const authCtx = useContext(AuthContext);
  const { getNodeData, nodeData, isLoading } = useFirebase();

  const { user } = authCtx;
  let rowArr;
  let rowMap;

  useEffect(() => {
    user && getNodeData('users', user.uid, 'bookings');
    nodeData
      ? (rowArr = normalizeUserBookings(nodeData))
      : (rowArr = <p>No current bookings</p>);
  }, [user]);

  if (isLoading) return <p>Loading...</p>;

  nodeData
    ? (rowMap = normalizeUserBookings(nodeData).map((node) => (
        <TableRow key={uuidv4()}>
          <TableCell>{node.date}</TableCell>
          <TableCell>{node.deskID}</TableCell>
          <TableCell>
            <UserBookingsButton
              date={node.date}
              deskID={node.deskID}
              userID={user.uid}
            />
          </TableCell>
        </TableRow>
      )))
    : rowArr;

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Desk</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rowMap}</TableBody>
      </Table>
    </TableContainer>
  );
}
