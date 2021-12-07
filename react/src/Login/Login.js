import { Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import AesValidation from "../AESValidation/AesValidation";
import Encrypt from "../Encryption/Encrypt";
import './Login.scss';

const Login = () => {

  const [password,setPassword] = useState("");
  const [isPwdValid,setPwdValid] = useState(false);

  const handlePassword = async (e) => {
    setPassword(e.target.value);
    setPwdValid(false);
  }

  const Login = async (e) =>{
    if(e.key !== "Enter"){
      return;
    }

    if(password.trim() !== ""){
      if(AesValidation(password)){
        sessionStorage.setItem("password",Encrypt(password));
        window.location.replace("daemon/home");
      }else{
        setPassword("");
        setPwdValid(true);
      }
    }else{
      alert("Enter Password");
    }
  }
  
  useEffect(()=>{
    if(sessionStorage.getItem("password") !== null){
      window.location.replace("daemon/home");
    }
  },[])

  return (
    <div className="form_main_container">
      <Paper elevation={2} className="form_child_container">
        <p className="enter_pwd_text">Enter Password</p>
        <input type="password" placeholder="Password" value={password} className="password_field" onChange={handlePassword} onKeyDown={Login}/>
        {
          isPwdValid && <p className="invalid_pwd_text">Invalid Password</p>
        }
      </Paper>
    </div>

  )
}

export default Login;