import { styled } from '@mui/material/styles';
import AndLogo from 'components/ui/AndLogo';

const StyledFooter = styled('footer')`
  background-color: #d82036;
  padding: 0.5rem;
  align-items: center;
  position: fixed;
  width: 100%;
  bottom: 0;
  display: flex;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <AndLogo reversecolours="true" />
    </StyledFooter>
  );
}
// const arr = [
//   {
//     date: '2022-07-20',
//     bookings: ['1', '21'],
//   },
//   {
//     date: '2022-07-21',
//     bookings: ['2'],
//   },
// ];

// const arr = [
//   {date: '2022-07-20', desk: 1}, {date: '2022-07-20', desk: 2}, { date: '2022-07-21', desk: 2}
// ]
