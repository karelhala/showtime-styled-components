import styled, { css } from 'styled-components';

export default styled.div`
  background: #FFF;
  margin: 20px;
  min-height: 50px;
  box-shadow:rgba(3, 3, 3, 0.2) 0px 1px 2px 0px;
  padding: 20px;
  
  ${props => props.stripped && css`
    background: linear-gradient(to bottom, #ffffff, #ffffff 97%, #b0b0b0 3%, #b0b0b0);
    background-size: 100% 40px;
    line-height: 4;
    font-size: 20px;
  `}
  
  ${props => props.largeText && css`
    text-align: center;
    line-height: 2;
    font-style: 20px;
  `}
`;
