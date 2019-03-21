import React from 'react';
import Card from '../components/Card';
import Grid from '../components/Grid';
import GridItem from '../components/GridItem'

export default () => 
<Grid>
    <GridItem columns={8} start={3}>
        <Card className="ssc-u-large-text">
            Dominik tilp
        </Card>
        <Card className="ssc-u-large-text">
            Karel Hala
        </Card>
        <Card className="ssc-u-large-text">
            Michal Vyšinský
        </Card>
    </GridItem>
</Grid>;
