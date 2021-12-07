import React from "react";

export default function Hello(props) {
  
  if (props.location.hasOwnProperty(process.env.REACT_APP_PROPS_KEY)) {
    return(
      <>
        <h1>Hello, {props.location.data.dtls}!</h1>
      </> 
    ) 
    
  } 
  else {
    return(
      <>
        <h1>
          <Span className="underline_style">Hey,</Span>&nbsp;<Span className="underline_style">Stranger...</Span>
        </h1>
      </>
    ) 
  }
}