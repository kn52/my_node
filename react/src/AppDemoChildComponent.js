import React, { useEffect } from "react";
import './AppDemo.scss';
import { adddemoservices } from "./AppDemoServices";

export class AppDemoChildClassComponent extends React.Component{

    componentDidMount(){
        let msg = adddemoservices.getwelcome() + "class child component";
        console.log("Welcome Message",msg);
    }

    render(){
        return (
            <>
                <div className="withjquery_showmsgdiv">
                    {this.props.msg}
                </div>
            </>
        )
    }
}

export const AppDemoChildFunctionComponent = (props) => {

    useEffect(()=>{
        let msg = adddemoservices.getwelcome() + "function child component";
        console.log("Welcome Message",msg);
    },[])

    return (
        <>
            <div className="withjquery_showmsgdiv">
                {props.msg}
            </div>
        </>
    )
}