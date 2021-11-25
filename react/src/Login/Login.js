import { Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import AesValidation from "../AESValidation/AesValidation";
import Encrypt from "../Encryption/Encrypt";
import './Login.scss';

const Login = () => {

  const [password,setPassword] = useState("");

  const handlePassword = async (e) => {
    await setPassword(e.target.value);
  }

  const Login = async () =>{
    if(password.trim() !== ""){
      if(AesValidation(password)){
        await sessionStorage.setItem("password",Encrypt(password));
        window.location.replace("daemon/home");
      }else{
        alert("Invalid Password");
        await setPassword("");
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
      <Paper elevation={5} className="form_child_container">
        <input type="password" placeholder="Password" value={password} className="password_field" onChange={handlePassword}/>
        <button onClick={Login} className="login_button">Login</button>
      </Paper>
    </div>

  )
}

export default Login;