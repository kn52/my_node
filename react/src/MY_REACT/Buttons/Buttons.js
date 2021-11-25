// import { Button } from 'react-bootstrap';
import React from 'react';
import './Buttons.scss';
import "semantic-ui-css/semantic.min.css";
import { Button, Popup } from "semantic-ui-react";

class Buttons extends React.Component{
    render(){
        return(
            <>
                <div className="button_main_container">
                    {/* <Button variant="outline-success" size="lg">Click Me!</Button> */}
                    <Popup trigger={<Button>Register</Button>} position="top center">
                        Tooltip for the register button
                    </Popup>
                </div>
            </>
        )
    }
}

export default Buttons;