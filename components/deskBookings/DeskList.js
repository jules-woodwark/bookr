import { useEffect } from 'react';
import useFirebase from 'hooks/useFirebase';
import Desk from './Desk';

export default function DeskList({ selectedDate }) {
  const { getClubNodeData, nodeData, isLoading } = useFirebase()

  useEffect(() => {
    getClubNodeData('grace', 'desks');
  }, []);

  let deskMap

  if (isLoading) return <p>Loading...</p>;
  if (nodeData === null) {
    return <p>No desk details</p>; // TODO: test this
  } else {
    const { ...desks } = nodeData

    deskMap = Object.values(desks).map((desk) => (
      <li key={desk.id} >
        <Desk
          selectedDate={selectedDate}
          deskID={desk.id}
        />
      </li>
    ));
  }

  return <ul>{deskMap}</ul>;
}
