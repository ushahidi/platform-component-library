/* @flow */
import * as React from 'react';

// ATOMS
import Button from './components/atoms/button/button';
import Label from  './components/atoms/label/label';
import Input from './components/atoms/input/input';
import Checkbox from './components/atoms/checkbox/checkbox';
import Radiobutton from './components/atoms/radiobutton/radiobutton';
import Dropdown from './components/atoms/dropdown/dropdown';

// MOLECULES
import FormFieldInput from './components/molecules/formfields/formfieldInput';
import ListItem from'./components/molecules/listitem/listitem';

import './components/utils/base.scss';

const App = (): React.Element<*> => (
<div className="wrapper">
    <div className="pl-pattern">
        <div className="pl-pattern-description">
            <h2>Atoms</h2>
        </div>
        <div className="pl-pattern-description">
            <h3>Button-types</h3>
            <div className="pl-divider"></div>
        </div>
        <div className="pl-sub-pattern">
            <h4 className="pl-h4">Default button</h4>
                <Button type="BUTTON">Default button</Button>
        </div>
        <div className="pl-sub-pattern">
            <h4 className="pl-h4">Button-beta</h4>
            <Button type="BETA">Beta button</Button>
        </div>
        <div className="pl-sub-pattern">
            <h4 className="pl-h4">Button-gamma</h4>
            <Button type="GAMMA">Gamma button</Button>
        </div>
        <div className="pl-sub-pattern">
            <h4 className="pl-h4">Destructive button</h4>
            <Button type="DESTRUCTIVE">Destructive button</Button>
        </div>
        <div className="pl-sub-pattern">
            <h4 className="pl-h4">Disabled buttons</h4>
            <Button type="BUTTON" disabled="true">Default button</Button>
            <Button type="BETA" disabled="true">Beta button</Button>
        </div>
        <div className="pl-pattern-description">
            <h3>Form-elements</h3>
            <div className="pl-divider"></div>
        </div>
        <div className="pl-sub-pattern">
            <h4 className="pl-h4">Default input-field</h4>
            <Input placeholder="This is a placeholder"></Input>
        </div>
        <div className="pl-sub-pattern">
            <h4 className="pl-h4">Disabled-state input-field</h4>
            <Input placeholder="Disabled input-field" disabled="true"></Input>
        </div>
        <div className="pl-sub-pattern">
            <h4 className="pl-h4">Default label</h4>
            <Label>This is a default label</Label>
        </div>
        <div className="pl-sub-pattern">
            <h4 className="pl-h4">Checkbox</h4>
            <Checkbox id="a"></Checkbox>
        </div>
        <div className="pl-sub-pattern">
            <h4 className="pl-h4">Radiobutton</h4>
            <Radiobutton id="b"></Radiobutton>
        </div>
        <div className="pl-sub-pattern">
            <h4 className="pl-h4">Dropdown</h4>
            <Dropdown options={[{name:'Option 1', value:1}, {name:'Option 2', value:2}]}></Dropdown>
        </div>
        <div className="pl-pattern-description">
            <h2>Molecules</h2>
            <div className="pl-divider"></div>
        </div>
        <div className="pl-pattern-description">
            <h3>Form-elements</h3>
            <div className="pl-divider"></div>
        </div>
        <div className="pl-sub-pattern">
            <h4 className="pl-h4">Input with label</h4>
            <FormFieldInput label="This is a default formfield with input" />
        </div>
        <div className="pl-sub-pattern">
            <h4 className="pl-h4">Input with errorstate</h4>
            <FormFieldInput className="error" showError="true" errorText="oops something went wrong" label="This form-field has problems"/>
        </div>
        <div className="pl-pattern-description">
            <h3>List items</h3>
            <div className="pl-divider"></div>
        </div>
        <div className="pl-sub-pattern">
            <h4 className="pl-h4">Default list-item</h4>
            <ListItem>
                <h3>Heading</h3>
                <p>A sentence or less</p>
            </ListItem>
        </div>
        <div className="pl-sub-pattern">
            <h4 className="pl-h4">Successful list-item</h4>
            <ListItem className="success">
                <h3>Heading</h3>
                <p>A success list-item</p>
            </ListItem>
        </div>
        <div className="pl-sub-pattern">
            <h4 className="pl-h4">Selected list-item</h4>
            <ListItem className="selected">
                <h3>Heading</h3>
                <p>A selected list-item</p>
            </ListItem>
        </div>
        <div className="pl-sub-pattern">
            <h4 className="pl-h4">List-item with a button</h4>
            <ListItem>
                <h3>Heading</h3>
                <p>This list-item has a button attached</p>
                <Button type="BUTTON">Add new person</Button>
            </ListItem>
        </div>
    </div>
</div>
);

export default App;
