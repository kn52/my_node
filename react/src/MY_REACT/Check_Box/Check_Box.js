import React, { useState } from 'react';
import './Check_Box.scss';
import Home from '../../Home/Home';

export const Check_Box = () => {

    const [isChecked, setIsChecked] = useState(false);

    const handleSwitchChange = () =>{
        var isCheck = !isChecked;
        setIsChecked(isCheck);
    }

    return (
        <>
            <Home/>
            <div className="checkbox_main_container">
                <div className='custom_control custom_switch custom_random_switch'>
                    <label className="custom_random_switch_label">{isChecked ? "Active" : "InActive"}</label>
                    <input
                        type='checkbox'
                        className='custom_control_input'
                        id="isChecked"
                        checked={isChecked === true}
                        readOnly onChange={() => handleSwitchChange()}
                    />
                    <label className='custom_control_label' htmlFor="isChecked" style={{ color: 'black' }}></label>
                </div>
            </div>
        </>
    );
}