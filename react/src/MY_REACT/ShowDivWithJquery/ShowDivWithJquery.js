import React from "react";
import './ShowDivWithJquery.scss';
import $ from 'jquery';

export default class ShowDivWithJquery extends React.Component{

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
        return(
            <div className='showdiv_withjquery_container'>
                <div id="zxc" className="withjquery_showbutton" onClick={() => this.handleClickOpen()}>
                    show message
                </div>
                <div id="child">
                    <div className="withjquery_showmsgdiv">
                        Hi
                    </div>
                </div>
            </div>
        )
    }
}
