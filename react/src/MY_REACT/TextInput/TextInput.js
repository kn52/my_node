import React from 'react';
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

class TextInput extends React.Component {

    constructor(props){
        super();
        this.state={
            isInputProps:false 
        }
    }

    setInputProps = async () =>{
        await this.setState({isInputProps:!this.state.isInputProps})
        document.getElementById("month").focus();
    } 

    render(){
        const { isInputProps } = this.state;
        return (
            <>
                <div style={{ marginTop: '90px', width: '900px', padding: '20px' }}>
                    {
                        isInputProps ? 
                            <TextField
                                id="outlined-secondary"
                                label="Outlined secondary"
                                variant="outlined"
                                color="secondary"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <input id="month" placeholder="MM" maxLength="2" style={{textAlign:'center',width:'30px',border:'none',outline:'none'}}/>
                                            &nbsp;/&nbsp;
                                            <input id="year" placeholder="YY" maxLength="2" style={{textAlign:'center',width:'30px',border:'none',outline:'none'}}/>
                                        </InputAdornment>
                                    )
                                }}
                            /> :
                            <TextField
                                id="outlined-secondary"
                                label="Outlined"
                                variant="outlined"
                                color="secondary"
                                onClick={this.setInputProps}
                            />
                    }
                </div>
            </>
        );
    }
}

export default TextInput;