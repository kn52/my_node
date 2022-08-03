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
                    {
                        !window?.location?.href?.includes("home") &&
                            <div id="main_header" className='layout_header'>
                                <Home />
                            </div>
                    }
                    {
                        <div id="main_content" 
                            className={`layout_content ${window?.location?.href?.includes("home") ? "main_content_border pad_two" : "pad_one"}`}
                        >
                            <>{children}</>
                        </div>
                    }
                </div>
            </AUX_EXP>
        );
    }
}

export default MasterLayout;