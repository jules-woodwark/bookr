import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import ClubAddress from './ClubAddress';
import ClubAssets from './ClubAssets';
import ClubTitle from './ClubTitle';
import useFirebase from '../../hooks/useFirebase';
import Card from '@mui/material/Card';

const StyledWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
  border-radius: 15px;
  display: flex;
  align-items: center;

  ${(props) => props.theme.breakpoints.up('xm')} {
    flex-direction: row;
    justify-content: space-between;
  }

  ${(props) => props.theme.breakpoints.up('lg')} {
    flex-direction: column;
  }
`;

export default function Club() {
  const { getNodeData, nodeData, isLoading } = useFirebase();

  useEffect(() => {
    getNodeData('clubs', 'grace', 'details');
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!nodeData) {
    return <p>No club details</p>;
  }

  const { title, address, assets } = nodeData;

  return (
    <StyledWrapper>
      <div>
        <ClubTitle title={title} />
        <ClubAddress address={address} />
      </div>
      <div>
        <ClubAssets assets={assets} />
      </div>
    </StyledWrapper>
  );
}
