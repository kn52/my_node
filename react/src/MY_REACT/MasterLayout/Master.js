import React from 'react';
import { ComponentRoute } from '../../Routes/ComponentRoute';
import './MasterLayout.scss';

export class Master extends React.Component {
    render() {
        return (
            <ComponentRoute urls={this.props}/>
        );
    }
}

export default Master;