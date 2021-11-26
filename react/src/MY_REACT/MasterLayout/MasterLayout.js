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
                    <div className="layout_header">
                        <Home /> 
                    </div>
                    <div className="layout_content">
                        {
                            window.location.href.trim().toLowerCase().includes("home") ?
                                <div className="hello_msg">
                                    <h1>Hi <br /> Daemon!</h1>
                                </div>
                                : <>{children}</>
                        }
                    </div>
                </div>
            </AUX_EXP>
        );
    }
}

export default MasterLayout;