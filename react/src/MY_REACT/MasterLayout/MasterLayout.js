import React from 'react';
import Home from '../../Home/Home';
import { AUX_EXP } from '../Auxing/_Aux';
import './MasterLayout.scss';

export class MasterLayout extends React.Component {

    render() {
        const { children } = this.props; 
        
        return (
            <AUX_EXP>
                <div className="layout">
                    <div>
                        { 
                            (window.sessionStorage.getItem("password") !== null && !window.location.pathname.includes("home")) 
                                && <Home /> 
                        }
                    </div>
                    <div className="layout_content">
                        {children}
                    </div>
                </div>
            </AUX_EXP>
        );
    }
}

export default MasterLayout;