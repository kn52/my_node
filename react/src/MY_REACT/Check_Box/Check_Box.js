import React from 'react';
import './Check_Box.scss';
import Home from '../../Home/Home';

class Check_Box extends React.Component{

    constructor(){
        super();
        this.state={
            isChecked:false
        }
    }

    handleSwitchChange = () =>{
        var isCheck = !this.state.isChecked;
        this.setState({isChecked:isCheck});
    }

    render(){
        return (
            <>
                <Home/>
                <div className="checkbox_main_container">
                    <div className='custom_control custom_switch'>
                        <label className="custom_random_switch_label">{this.state.isChecked ? "Active" : "InActive"}</label>
                        <input
                            type='checkbox'
                            className='custom_control_input'
                            id="isChecked"
                            checked={this.state.isChecked === true}
                            onClick={this.handleSwitchChange}
                        />
                        <label className='custom_control_label' htmlFor="isChecked" style={{ color: 'black' }}></label>
                    </div>
                </div>
            </>
        );
    }
}

export default Check_Box;