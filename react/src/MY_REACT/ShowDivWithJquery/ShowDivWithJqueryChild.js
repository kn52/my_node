import React from "react";
import './ShowDivWithJquery.scss';

export class ShowDivWithJqueryChildClassComponent extends React.Component{
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

export const ShowDivWithJqueryChildFunctionComponent = (props) => {
    return (
        <>
            <div className="withjquery_showmsgdiv">
                {props.msg}
            </div>
        </>
    )
}