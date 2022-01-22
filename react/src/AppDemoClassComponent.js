import React from "react";
import './AppDemo.scss';
import { adddemoservices } from "./AppDemoServices";
import $ from 'jquery';
import { AppDemoChildClassComponent, AppDemoChildFunctionComponent } from "./AppDemoChildComponent";
export default class AppDemoClassComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            childList : [
                {id:"1",comp: <AppDemoChildClassComponent msg="HI!" col="green"/> },
                {id:"2",comp: <AppDemoChildFunctionComponent msg="BYE..." col="red"/> }
            ]
        }
    }

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
        const { childList } = this.state;
        return(
            <div className='parent_container'>
                <div id="zxc" className="withjquery_showbutton" onClick={() => this.handleClickOpen()}>
                    show message
                </div>
                <div id="child">
                    {
                        childList.map((child)=>(child.comp))
                    }                    
                </div>
            </div>
        )
    }
}
