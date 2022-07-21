import { styled } from '@mui/material/styles';

const StyledList = styled('ul')`
  padding: 0;
`;

export default function ClubAssets({ assets }) {
  const clubAssets = assets.map((asset) => <li key={asset}>{asset}</li>);

  return <StyledList>{clubAssets}</StyledList>;
}
