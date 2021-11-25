import React, { useEffect } from "react";

export default function HelloMessage(props) {
  useEffect(()=>{
    // localStorage.getItem("password") === null && window.location.replace("/"); 
  })

  return(
      <>
        <h1>{props.location.name ? "Hello, " + props.location.name+"!": "Hey Stranger..."}</h1>
      </>
    )
}