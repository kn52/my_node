import React from "react";
import './AppDemo.scss';
import { adddemoservices } from "./AppDemoServices";
import { AppDemoChildClassComponent, AppDemoChildFunctionComponent } from "./AppDemoChildComponent";
export default class AppDemoClassComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            childList : [
                {id:"1",comp: <AppDemoChildClassComponent msg="HI!" col="green"/> },
                {id:"2",comp: <AppDemoChildFunctionComponent msg="BYE..." col="red"/> }
            ],
        }
    }

    componentDidMount(){
        let msg = adddemoservices.getwelcome() + "class component";
        console.log("Welcome Message",msg);
    }

    render(){
        return(
            <>
                <div className="with_label_input_content">
                    <div className="with_label_input">
                        <input id="txt" type="text" name="text_test?" className="form__input" autoComplete="off" placeholder=" " />
                        <label className="form__label">Email</label>
                    </div>
                </div>
            </>
        )
    }
}
