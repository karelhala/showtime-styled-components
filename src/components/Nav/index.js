import React from 'react';
import { Link as UnstyledLink, withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  flex-basis: 0%;
  flex-grow: 1;
  flex-shrink: 1;
  grid-column-end: nav;
  grid-column-start: 1;
  grid-row-end: 4;
  grid-row-start: 2;
  max-width: 290px;
  box-shadow:rgba(3, 3, 3, 0.07) 12px 0px 10px -4px;
  z-index: 200;
`;

const List = styled.ul`
  padding: 0px;
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
`;

const ListItem = styled.li``;

const Link = styled(UnstyledLink)`
    color:rgb(40, 45, 51);
    display: flex;
    margin: 0;
    padding-bottom: 8px;
    padding-left: 3rem;
    padding-right: 32px;
    padding-top: 16px;
    text-decoration: none;
    
    &:hover {
      padding-left: 0;
      color:rgb(0, 123, 186);
      
      &::before {
        background-color:rgb(0, 123, 186);
        content: "";
        position: relative;
        left: 3rem;
        box-sizing: border-box;
        padding: 0;
        top: 23px;
        margin: 0;
        height: 2px;
        width: 3rem;
      }
    }
    
    ${props => props.active && css`
      color:rgb(0, 123, 186);
      padding-left: 0;
        
      &::before {
        background-color:rgb(0, 123, 186);
        content: "";
        position: relative;
        left: 3rem;
        box-sizing: border-box;
        padding: 0;
        top: 23px;
        margin: 0;
        height: 2px;
        width: 3rem;
      }
    `}
`;

const SmartLink = withRouter((props) => (
  <Link to={props.to} active={props.to === props.location.pathname} {...props} />
));

export default () => (
  <Wrapper>
    <List>
      <ListItem>
        <SmartLink to="/">Post</SmartLink>
      </ListItem>
      <ListItem>
        <SmartLink to="/galery">Galery</SmartLink>
      </ListItem>
      <ListItem>
        <SmartLink to="/about">About</SmartLink>
      </ListItem>
    </List>
  </Wrapper>
);
