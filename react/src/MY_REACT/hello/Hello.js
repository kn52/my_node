import React, { useEffect } from "react";
import Home from "../../Home/Home";

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
        <div><Home/></div>
        <h1>Hey, Stranger...</h1>
      </>
    ) 
  }
}