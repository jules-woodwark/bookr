import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const StyledList = styled('ul')`
  list-style: none;
  padding-left: 0.5rem;
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 0;
  font-size: 1.25rem;
`;

export default function ClubAddress({ address }) {
  if (!address) return <p>Loading...</p>;

  return (
    <StyledList>
      <li>
        <StyledTypography>{address.building}</StyledTypography>
      </li>
      <li>
        <StyledTypography>{address.street}</StyledTypography>
      </li>
      <li>
        <StyledTypography>{address.city}</StyledTypography>
      </li>
      <li>
        <StyledTypography>{address.postCode}</StyledTypography>
      </li>
    </StyledList>
  );
}
