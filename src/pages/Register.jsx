import React from "react";
import styled from "styled-components";
import { Link, Form, redirect, useNavigate } from "react-router-dom";
import { FormRow, Logo, SubmitBtn } from "../components";
import img from "../assets/disc-dog.jpg";
// import customFetch from "../utils/customFetch";
// import { toast } from "react-toastify";

const Login = () => {
  return (
    <Wrapper
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
      }}
    >
      <Form method="post" className="form">
        <Logo />
        <h3>register</h3>
        <FormRow type="name" name="name" labelText="first name" />
        <FormRow type="lastName" name="lastName" labelText="last name" />
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" />
        <SubmitBtn />

        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;

  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 480px;
    border-top: 5px solid var(--primary-500);
    background: rgba(0, 0, 0, 0.6);
    box-shadow: var(--shadow-5);
    border-radius: 10%;
  }
  h3 {
    text-align: center;
    margin-bottom: 1.38rem;
    color: var(--clr-primary-10);
    letter-spacing: 1.1px;
  }
  p {
    margin-top: 1rem;
    font-size: 17px;
    text-align: center;
    line-height: 1.5;
    color: var(--clr-primary-10);
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    color: var(--clr-primary-5);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
  }
`;

export default Login;
