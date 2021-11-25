import React from 'react';
import Home from '../../Home/Home';
import './MasterLayout.scss';
import Aux from '../Auxing/_Aux.js';

export class MasterLayout extends React.Component {

    render() {
        const { children } = this.props; 

        return (
            <Aux>
                <div className="layout">
                    <div>
                        <Home />
                    </div>
                    <div className="layout_content">
                        {children}
                    </div>
                </div>
            </Aux>
        );
    }
}

export default MasterLayout;