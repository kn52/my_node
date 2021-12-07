import React, { useEffect, useState } from "react";
import './HelloMessage.scss';

export default function HelloMessage(props) {
  
  const [txtNum,setTxtNum] = useState("0");

  const txtNumber = async (num) => await setTxtNum(num);

  useEffect(()=>{
    // localStorage.getItem("password") === null && window.location.replace("/"); 
  })

  return(
    <>
      <h1>
        <span className={txtNum === "0" ? "h_d under_line" : "h_d not_under_line"} onClick={() => txtNumber("0")}>
          Hey
        </span>
        <span className={txtNum === "1" ? "h_d under_line" : "h_d under_line_none"} onClick={() => txtNumber("1")}>
            {props.location.hasOwnProperty("data") ? <>{props.location.data.dtls}!</> : "Stranger...!"}
        </span>
        <span className={txtNum === "2" ? "h_d under_line" : "h_d under_line_none"} onClick={() => txtNumber("2")}>
            Welcome Back
        </span>
      </h1>
    </>
    )
}