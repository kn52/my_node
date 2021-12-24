import React from "react";
import './Custom_Radio.scss';
class Custom_Radio extends React.Component{

    resetRadio = () => {
        window.location.replace("customradio");
    }

    render(){
        return(
            <>
                <div className="main_radio_cont">
                    <div className="radio_cont radio_input">
                        <input type="radio" id="radio_check" name="radio-group"/>
                        <label htmlFor="radio_check"></label>
                    </div>
                    <div className="button_cont">
                        <button className="button_sts" onClick={() => this.resetRadio()}>Reset</button>
                    </div>
                </div>
            </>
        )
    }

}

export default Custom_Radio;