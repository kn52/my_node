import React from 'react';
import './Check_Box.scss';

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
                <div className="main_div">
                    <div className="without_label_container">
                        <input type="checkbox" name="check_test?" className="che_ck" />
                    </div>
                    <div className="with_label_container">
                        <input type="checkbox" id="custom_check" name="check_test??" className="che_ck" />
                        <label htmlFor="custom_check" className="checkbox_label_style"></label>
                    </div>
                </div>
            </>
        );
    }
}

export default Check_Box;