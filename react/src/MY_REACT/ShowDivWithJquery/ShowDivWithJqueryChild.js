import React from "react";
import './ShowDivWithJquery.scss';

export class ShowDivWithJqueryChildClassComponent extends React.Component{
    render(){
        return (
            <>
                <div className="withjquery_showmsgdiv">
                    <span style={{ color: this.props.col }}>{this.props.msg}</span>
                </div>
            </>
        )
    }
}

export const ShowDivWithJqueryChildFunctionComponent = (props) => {
    return (
        <>
            <div className="withjquery_showmsgdiv">
                <span style={{ color: props.col }}>{props.msg}</span>
            </div>
        </>
    )
}