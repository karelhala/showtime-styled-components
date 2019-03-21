import styled from 'styled-components';

export default styled.div`
  grid-column-end: span ${props => props.columns || 1};
  grid-column-start: ${props => props.start || 'auto'};
`;
