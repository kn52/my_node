import React from 'react';
import './Custom_Text_Box.scss';

class Custom_Text_Box extends React.Component{

    render(){
        return (
            <>
                <div className="with_label_input_content">
                    <div className="with_label_input">
                        <input id="txt" type="text" name="text_test?" className="form__input" autoComplete="off" placeholder=" " />
                        <label className="form__label">Email</label>
                    </div>
                </div>
            </>
        );
    }
}

export default Custom_Text_Box;