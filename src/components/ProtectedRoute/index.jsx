import React, { useEffect } from 'react'
import cookies from 'js-cookies'
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = (props) => {

    const {Component} = props;
    const token = cookies.getItem('jwtToken')
    const navigate = useNavigate();
    
    useEffect(()=>{
        if(token === null){
            navigate("/login")
        }
    },[])

  return (
    <Component/>
  )
}

export default ProtectedRoute
