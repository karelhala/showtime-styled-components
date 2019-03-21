import React from 'react';
import Card from '../components/Card';
import Grid from '../components/Grid';
import GridItem from '../components/GridItem'

export default () => (
    <Grid>
        <GridItem columns={3}>
            <Card>
                Some image
            </Card>
        </GridItem>
        <GridItem columns={3}>
            <Card>
                Some image
            </Card>
        </GridItem>
        <GridItem columns={3}>
            <Card>
                Some image
            </Card>
        </GridItem>
        <GridItem columns={4}>
            <Card>
                Some image
            </Card>
        </GridItem>
        <GridItem columns={3}>
            <Card>
                Some image
            </Card>
        </GridItem>
        <GridItem columns={2} start={2}>
            <Card>
                Some image
            </Card>
        </GridItem>
        <GridItem columns={2} start={8}>
            <Card>
                Some image
            </Card>
        </GridItem>
    </Grid>
);
