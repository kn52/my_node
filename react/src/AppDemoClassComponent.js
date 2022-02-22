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
        const { age,droplist } = this.state;

        return(
            <>
                <div className="with_square">
                    <input type="checkbox" name="check_test?" className="che_ck" />
                </div>
            </>
        )
    }
}
