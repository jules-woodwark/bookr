import { useEffect } from 'react';
import ClubAddress from './ClubAddress';
import ClubAssets from './ClubAssets';
import ClubTitle from './ClubTitle';
import useFirebase from '../../hooks/useFirebase';

export default function Club() {
  const { getClubNodeData, nodeData, isLoading } = useFirebase();

  useEffect(() => {
    getClubNodeData('details', 'grace');
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!nodeData) {
    return <p>No club details</p>;
  }

  const { title, address, assets } = nodeData;

  return (
    <>
      <ClubTitle title={title} />
      <ClubAddress address={address} />
      <ClubAssets assets={assets} />
    </>
  );
}
