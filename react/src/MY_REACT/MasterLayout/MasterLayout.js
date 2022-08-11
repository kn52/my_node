import React from 'react';
import Home from '../../Home/Home';
import { AUX_EXP } from '../Auxing/_Aux';
import './MasterLayout.scss';

const getHomePage = () => {
    return 
}

export class MasterLayout extends React.Component {

    constructor(props) { 
        super(props);
        // !sessionStorage.getItem("password") && window.location.replace('/') 
    }

    render() {
        const { children } = this.props; 

        return (
            <AUX_EXP>
                <div className="layout">
                    <div id="main_header" className='layout_header'>
                        {
                            window?.location?.href?.includes("home") &&
                            <>{children}</>
                        }
                        {
                            !window?.location?.href?.includes("home") &&
                            <Home />
                        }
                    </div>
                    {
                        !window?.location?.href?.includes("home") &&
                        <div id="main_content" className={`layout_content pad_one`}>
                            <>{children}</>
                        </div>
                    }
                </div>
            </AUX_EXP>
        );
    }
}

export default MasterLayout;