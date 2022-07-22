import { useState, useCallback, useContext } from 'react';
import { styled } from '@mui/material/styles';
import { UiContext } from 'store';
import moment from 'moment';
import DeskBookingTitle from './DeskBookingTitle';
import DatePicker from './DatePicker';
import DeskList from './DeskList';
import CardWrapper from 'components/ui/CardWrapper';
import DeskLayoutButton from './DeskLayoutButton';
import DeskLayout from './DeskLayout';
import { ref, off } from 'firebase/database';
import { database } from 'firebase-config';

const StyledDiv = styled('div')`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

export default function DeskBooking() {
  const [selectedDate, setDate] = useState(0);
  const uiCtx = useContext(UiContext);
  const { showDeskLayout } = uiCtx;

  const handleDatePick = useCallback((input) => {
    // Remove rtdb listeners
    const nodes = ['clubs', 'grace', 'bookings', selectedDate];
    const oldDateListenerRef = ref(database, nodes.join('/'));
    off(oldDateListenerRef);

    // TODO: Check this is locale-agnostic
    // silly americans and their month/hour/year/day/second logic
    const momentObj = moment(input).format('YYYY-MM-DD');
    setDate(momentObj);
  });

  return (
    <CardWrapper>
      <StyledDiv>
        <DeskBookingTitle />
        <DeskLayoutButton />
      </StyledDiv>
      <DatePicker handleDatePick={handleDatePick} />
      <DeskList selectedDate={selectedDate} />
      {showDeskLayout && <DeskLayout />}
    </CardWrapper>
  );
}
