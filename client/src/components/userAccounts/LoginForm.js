<<<<<<< HEAD
import React, { useState } from "react";
import "./styles.css";
import styled from "styled-components";

const Container = styled.div`
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;
=======

import React,{useState} from 'react'; 
import Axios from 'axios'
import styled from "styled-components";
import { mobile } from "../responsive";
import { Marginer } from "../marginer/margin";
//import { Redirect, Route } from "react-router";
//import {useHistory} from "react-router-dom"
//import { setUserSession } from './Util/Common';


const Container = styled.div`
  width: 100vw;
  height: 100vh;
>>>>>>> 16710aee4250e954c759e2f1cc1b9ee7036f8fdb
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
<<<<<<< HEAD

function LoginForm() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    const { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Business Name </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Email </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
          <i className="bi bi-eye-slash" id="togglePassword"></i>
        </div>
        {/* <div className="button-container">
          <input type="submit" />
        </div> */}
        <div class="plan-sing-up">
          <a href="#/" class="btn btn--full">
            Submit
          </a>
        </div>
      </form>
    </div>
  );

  return (
    <Container className="container container-login">
      <div className="app">
        <div className="login-form">
          <div className="title">Sign In</div>
          {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        </div>
      </div>
    </Container>
  );
}

export default LoginForm;
=======

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 10px;
  margin: 10px 0;
  font-size: 15px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const MutedLink = styled.a`
  font-size: 13px;
  color: rgba(51, 51, 51, 0.8);
  font-weight: 500;
  text-decoration: none;
`;

const BoldLink = styled.a`
  font-size: 13px;
  color: rgb(1, 1, 44);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

const SmallText = styled.h5`
  color: #270101;
  font-weight: 500;
  font-size: 12px;
  z-index: 10;
  margin: 0;
  margin-top: 5px;
`;

function LoginForm() {
    const [password, setPassword] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [email, setEmail] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
    //const [error, setError] = useState(null);
    //const [loading, setLoading] = useState(false);
    //let history =  useHistory();
    
    const login = (e) => {
      console.log(email)
      e.preventDefault();
        //setLoading(true);
        Axios.post('/main_login',{
            email: email,
            password: password,
            bsuinessName: businessName,
        }).then((response) => {
          console.log(response)
          /*
            if(response.data === "unauthenticated" ){
                console.log("jsjsjsj")
                setLoginStatus(response.data)
                
                //setLoading(false);
            }
            if(response.data.data === "authenticated" ){
                //<Redirect to = "/register" />
                //setLoginStatus(response.data)
               // setLoading(false);
               console.log(response.data.token, response.data.user )
                //setUserSession(response.data.token, response.data.user)
                //history.push('/dashboard')
                //console.log(response.data.user)
            }*/
        })
    }
    return (
        <Container>
        <Wrapper>
          <Title>CREATE ACCOUNT</Title>
          <Form>
          <SmallText>{loginStatus}</SmallText>
          <Input type="text" placeholder="Business Name"  onChange = {(e)=>{setBusinessName(e.target.value);}}  />
          <Input type="email" placeholder="Email" onChange = {(e)=>{setEmail(e.target.value);}} />
          <Input type="password" placeholder="Password"  onChange = {(e)=>{setPassword(e.target.value); }}  />


          <Marginer direction="vertical" margin="1em" />
            <MutedLink href="#">
                  Already have an account?
                  <BoldLink href="/login" >
                      <b>Sign-in</b>
                  </BoldLink>
             </MutedLink>
  
  
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button type="submit" onClick = {login} >CREATE</Button>
          </Form>
        </Wrapper>
      </Container>
  );
}

export default LoginForm
>>>>>>> 16710aee4250e954c759e2f1cc1b9ee7036f8fdb
