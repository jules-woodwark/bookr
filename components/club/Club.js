import { useEffect } from 'react';
import CardWrapper from 'components/ui/CardWrapper';
import ClubAddress from './ClubAddress';
import ClubAssets from './ClubAssets';
import ClubTitle from './ClubTitle';
import useFirebase from '../../hooks/useFirebase';

export default function Club() {
  const { getNodeData, nodeData, isLoading } = useFirebase();

  useEffect(() => {
    getNodeData('grace', 'details');
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!nodeData) {
    return <p>No club details</p>;
  }

  const { title, address, assets } = nodeData;

  return (
    <CardWrapper>
      <ClubTitle title={title} />
      <ClubAddress address={address} />
      <ClubAssets assets={assets} />
    </CardWrapper>
  );
}
