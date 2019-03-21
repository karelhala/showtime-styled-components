import React from 'react';
import Card from '../components/Card';
import Grid from '../components/Grid';
import GridItem from '../components/GridItem'

export default () =>
<Grid>
    <GridItem columns={8} start={3}>
        <Card largeText>
            Dominik tilp
        </Card>
        <Card largeText>
            Karel Hala
        </Card>
        <Card largeText>
            Michal Vyšinský
        </Card>
    </GridItem>
</Grid>;
