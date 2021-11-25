import React, { useEffect } from "react";

export default function Hello(props) {
  useEffect(()=>{
    // localStorage.getItem("password") === null && window.location.replace("/"); 
  })
  if (props.name) {
    return(
      <>
        <div><Home/></div>
        <h1>Hello, {props.name}!</h1>
      </> 
    ) 
    
  } else {
    return(
      <>
        <h1>Hey, Stranger...</h1>
      </>
    ) 
  }
}