import { Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import AesValidation from "../AESValidation/AesValidation";
import {Encrypt} from "../AESValidation/Encryption/Encrypt";
import './Login.scss';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Login = () => {

  const history = useHistory();
  const dispatch = useDispatch();

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
        var encppwd = Encrypt(password);
        sessionStorage.setItem("password",encppwd);
        dispatch({type: 'PASSWORD', payload: encppwd})
        dispatch({type: 'USERNAME', payload: "Daemon"})
        history.push("daemon/home");
        // window.location.replace("daemon/home");
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