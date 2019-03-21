import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { About, Galery, Posts } from '../../pages';

const Main = styled.div`
  flex-direction: column;
  grid-column-end: main;
  grid-column-start: main;
  grid-row-end: main;
  grid-row-start: main;
  background-color: rgb(237, 237, 237);
`;

export default (props) => (
    <Main {...props}>
        <Switch>
            <Route exact path={'/'} component={Posts}></Route>
            <Route exact path={'/about'} component={About}></Route>
            <Route exact path={'/galery'} component={Galery}></Route>
            <Route path={'*'} component={Posts}></Route>
        </Switch>
        {/* <Grid>
            <GridItem columns={5} start={4}>
                <Card className="ssc-u-stripped" contenteditable="true">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Card>
            </GridItem>
        </Grid> */}
    </Main>
)
