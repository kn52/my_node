import React from "react";
import './AppDemo.scss';
import { adddemoservices } from "./AppDemoServices";
import $ from 'jquery';
import { AppDemoChildClassComponent } from "./AppDemoChildComponent";
export default class AppDemoClassComponent extends React.Component{

    componentDidMount(){
        let msg = adddemoservices.getwelcome() + "class component";
        console.log("Welcome Message",msg);
        $(document).on('click', function (e) {
            var container = $("#child");
            var bool = (container.is(e.target) && container.has(e.target).length === 0) ? true : false;
            if (bool === true && e.target.id === "zxc") {
                $("#child").css('display','block');
            }else if (bool === true && e.target.id === "child"){
                $("#child").css('display','none');
            }
        })
    }

    handleClickOpen =  async () => {
        let displayStyle = $("#child").css('display');
        if(displayStyle === "block"){
            $("#child").css('display','none');
        }
        else if (displayStyle === "none"){
            $("#child").css('display','block');
        }
    }

    render(){
        return(
            <div className='parent_container'>
                <div id="zxc" className="withjquery_showbutton" onClick={() => this.handleClickOpen()}>
                    show message
                </div>
                <div id="child">
                    <AppDemoChildClassComponent/>
                </div>
            </div>
        )
    }
}
