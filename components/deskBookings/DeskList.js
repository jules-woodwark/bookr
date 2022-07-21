import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import useFirebase from 'hooks/useFirebase';
import Desk from './Desk';
import List from '@mui/material/List';

const StyledListItem = styled('li')`
  margin: 1rem 1rem;
`;

const StyledList = styled(List)`
  columns: 2 auto;
`;

export default function DeskList({ selectedDate }) {
  const { getNodeData, nodeData, isLoading } = useFirebase();

  useEffect(() => {
    getNodeData('clubs', 'grace', 'desks');
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (nodeData === null) {
    return <p>No desk details</p>; // TODO: test this
  }
  const { ...desks } = nodeData;

  const deskMap = Object.values(desks).map((desk) => (
    <StyledListItem key={desk.id}>
      <Desk selectedDate={selectedDate} deskID={desk.id} />
    </StyledListItem>
  ));

  return <StyledList>{deskMap}</StyledList>;
}
