import styled from '@emotion/styled';
import { Box, Grid } from '@mui/material';

const StyledDiv = styled.div`
  width: 100%;
`;

function GridLayout({ gridItem1, gridItem2, gridItem3 }) {
  return (
    <StyledDiv>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            {gridItem1}
          </Grid>
          <Grid item xs={8}>
            {gridItem2}
          </Grid>
          <Grid item xs={12}>
            {gridItem3}
          </Grid>
        </Grid>
      </Box>
    </StyledDiv>
  );
}

export default GridLayout;