import React from "react";
import './ShowDivWithJquery.scss';
import $ from 'jquery';
import { ShowDivWithJqueryChildClassComponent, ShowDivWithJqueryChildFunctionComponent } from "./ShowDivWithJqueryChild";

export default class ShowDivWithJquery extends React.Component{

    constructor(props){
        super(props);
        this.state={
            childList : [
                {id:"1",comp: <ShowDivWithJqueryChildClassComponent msg="HI!" col="green"/> },
                {id:"2",comp: <ShowDivWithJqueryChildFunctionComponent msg="BYE..." col="red"/> }
            ]
        }
    }

    componentDidMount(){
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
            <div className='showdiv_withjquery_container'>
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
