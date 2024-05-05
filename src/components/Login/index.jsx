import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import cookies from "js-cookies"
import "./index.css";

const Login = () => {

  const navigate = useNavigate();
  const token = cookies.getItem("jwtToken")

  const [allValues, setValues] = useState({
    username : "",
    password : "",
    errormsg : ""
  })

  const onSubmitDetails = async (e) =>{

    e.preventDefault();


    const url ="https://apis.ccbp.in/login"

    const userDetails = {
      username: allValues.username,
      password: allValues.password
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const fetchData = await response.json()
    if(response.ok === true){
      //redirect to home page
      cookies.setItem("jwtToken", fetchData.jwt_token)
      setValues({...allValues, errormsg:""});
      navigate("/")
    }
    else{
      setValues({...allValues, errormsg:fetchData.error_msg});
    }

  }

  const onChangeUsername = (e) =>{
    setValues({...allValues, username:e.target.value})
  }

  const onChangePassword = (e) =>{
    setValues({...allValues, password:e.target.value})
  }

  useEffect(()=>{
    if(token !== null){
      navigate("/")
    }
  },[])

  return (
    <div className="login_cont">
      <form className="my-form" onSubmit={onSubmitDetails}>
        <img
          className="web_logo"
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
        />
        <div className="form-group w-100 mb-4">
          <label htmlFor="exampleInputEmail1">Username</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={onChangeUsername}
          />
        </div>
        <div className="form-group w-100 mb-4">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={onChangePassword}
          />
        </div>

        <div className="btn-cont">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <p className="emsg">{allValues.errormsg}</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
