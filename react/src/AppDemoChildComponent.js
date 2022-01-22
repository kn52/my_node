import React, { useEffect } from "react";
import './AppDemo.scss';
import { adddemoservices } from "./AppDemoServices";

export class AppDemoChildClassComponent extends React.Component{

    componentDidMount(){
        let msg = adddemoservices.getwelcome() + "function child component";
        console.log("Welcome Message",msg);
    }

    render(){
        return (
            <>
                <div id="abc" style={{ width: "200px", height: "200px", border: "1px solid" }}>
                    Hi
                </div>
            </>
        )
    }
}

export const AppDemoChildFunctionComponent = () => {

    useEffect(()=>{
        let msg = adddemoservices.getwelcome() + "function child component";
        console.log("Welcome Message",msg);
    },[])

    return (
        <>
            <div id="abc" style={{ width: "200px", height: "200px", border: "1px solid" }}>
                Hi
            </div>
        </>
    )
}