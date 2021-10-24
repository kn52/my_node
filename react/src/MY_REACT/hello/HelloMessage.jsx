import React, { useEffect } from "react";
import Home from "../../Home/Home";

export default function HelloMessage(props) {
  useEffect(()=>{
    // localStorage.getItem("password") === null && window.location.replace("/"); 
  })

  return(
      <>
        <div><Home/></div>
        <h1>{props.location.name ? "Hello, " + props.location.name+"!": "Hey Stranger..."}</h1>
      </>
    )
}