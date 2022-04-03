import React from "react";
import './AppDemo.scss';
import { adddemoservices } from "./AppDemoServices";
import { AppDemoChildClassComponent, AppDemoChildFunctionComponent } from "./AppDemoChildComponent";
import OutsideClickHandler from 'react-outside-click-handler';
import { Link } from "@material-ui/core";
import axios from 'axios';
// import publicIp from 'public-ip';

export const data = {
    e_dt: {
        Name: "a",
        Value: "b and ",
        Link: [
            {
                "url":"www.google.com",
                "name": "Google"
            },
            {
                "url":"www.facebook.com",
                "name": "Facebook"
            }
        ]
    }
}
export default class AppDemoClassComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            msg:""
        }
    }

    async componentDidMount(){
        let msg = adddemoservices.getwelcome() + "class component";
        console.log("Welcome Message",msg);
        this.getIP();
    }

    getIP = async () => {
        fetch('https://api.ipify.org/?format-json')
            .then((results) => results.json())
            .then((data) => {
                debugger;
                console.log(data)
                })
    }

    setMsg = () => {
        debugger;
        let msglink_arr = data.e_dt["Link"];
        let m_s_g = data.e_dt["Value"];
        let arr = m_s_g.split("{}");

        let htm = <>
            {msglink_arr.map((link,ind)=> {
                let sp = arr[ind];
                return (
                    <>{arr[ind]} <a href={link.url}>{link.name}</a></>
                )
            })}
        </>
        console.log("jkkkkk");
        return htm;
    }

    render(){
        let { msg } = this.state;
        return(
            <>
                <div>
                    <div className="button_hover">On Hover</div>
                    <div className="mask_over">
                        Hhi
                    </div>
                </div>

            </>
        )
    }
}
