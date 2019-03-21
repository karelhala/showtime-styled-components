import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  grid-column-end: header;
  grid-column-start: header;
  grid-row-end: header;
  grid-row-start: header;
  display: flex;
  flex-wrap: wrap;
`;

export default (props) => (
    <Header {...props}>
        <div>
            Logo
        </div>

    </Header>
)
