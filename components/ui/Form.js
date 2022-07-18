import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

const StyledForm = styled('form')`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  overflow-y: auto;
  padding: 0.75rem;
  width: 100%;

  & button {
    font-size: 0.8rem;
  }

  & hr {
    width: 100%;
    margin: 1.5rem 0;
  }

  & svg {
    width: 0.75em;
    height: 0.75em;
  }

  ${(props) => props.theme.breakpoints.up('szm')} {
    width: 70vw;
    padding: 1.5rem;
  }

  ${(props) => props.theme.breakpoints.up('sx')} {
    & button {
      font-size: 0.9375rem;
    }
  }

  ${(props) => props.theme.breakpoints.up('szm')} {
    & svg {
      height: 1em;
      width: 1em;
    }
  }

  ${(props) => props.theme.breakpoints.up('m')} {
    width: 50vh;
    padding: 2rem;
  }
`;

function Form({ children, onSubmit }) {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
