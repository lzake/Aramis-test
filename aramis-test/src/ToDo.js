import React from 'react';
import List from './List';
import Add from './Add'

export default class ToDo extends React.Component {
    render() {
        return (
            <div>
                <Add />
                <List/>
            </div>
        );
    };

}
