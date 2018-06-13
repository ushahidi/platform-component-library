/* @flow */
import * as React from 'react';
import Button from './components/atoms/button';

const App = (): React.Element<*> => (
    <div>
        <h2>Atoms</h2>
        <h3>Button-types</h3>
            <Button type="BUTTON">Default button</Button>
            <Button type="BETA">Beta button</Button>
            <Button type="GAMMA">Gamma button</Button>
            <Button type="DISTRUCTIVE">Distructive button</Button>
        <h3>Disabled buttons</h3>
            <Button type="BUTTON" disabled="true">Default button</Button>
            <Button type="BETA" disabled="true">Beta button</Button>
    </div>
);

export default App;
