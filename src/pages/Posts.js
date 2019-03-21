import React from 'react';
import Card from '../components/Card';
import Grid from '../components/Grid';
import GridItem from '../components/GridItem'

export default () => (
    <Grid>
        <GridItem columns={5} start={4}>
            <Card className="ssc-u-stripped" contentEditable="true">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Card>
        </GridItem>
    </Grid>
)
