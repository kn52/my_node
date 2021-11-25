import React from 'react';
import OtpInput from 'react-otp-input';
import './OtpInputField.scss';

class OtpInputField extends React.Component{

    constructor(props){
        super();
        this.state = { otp:"" }
    }
    
    handleChange = async (newotp) => { await this.setState({otp: newotp}); }

    handleClick = async () => { await this.setState({otp: ""}); }

    render(){
        return(
            <>
                <div className="otp_main_container">
                    <OtpInput containerStyle="otp-verify" value={this.state.otp}
                        isInputNum={true} onChange={this.handleChange}
                        shouldAutoFocus={true}
                        numInputs={6} separator={<span className="otp-seperator"> o </span>} />
                        <br/><br/>
                        <button onClick={this.handleClick} className="otp_button">Verify</button>
                </div>
            </>
        )
    }
}

export default OtpInputField;
