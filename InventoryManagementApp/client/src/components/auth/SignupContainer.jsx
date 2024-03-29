import React, { useState } from "react";
import Signup from "../form/Signup";
import { signupUser } from "../../../server/controllers/AuthController";

const SignupContainer = () => {
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [formValid, setFormValid] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async () => {
    setSuccess(null);

    if (emailError || !emailInput) {
      setFormValid("Email is Invalid. Please Re-Enter");
      return;
    }

    if (passwordError || !passwordInput) {
      setFormValid("Password is set btw 5 - 20 characters long. Please Re-Enter");
      return;
    }

    setFormValid(null);

    try {
      const userData = {
        email: emailInput,
        password: passwordInput
      };
      await signupUser(userData);

      setSuccess("Form Submitted Successfully");
    } catch (error) {
      setFormValid("Signup failed. Please try again.");
    }
  };

  return (
    <Signup
      emailInput={emailInput}
      setEmailInput={setEmailInput}
      emailError={emailError}
      passwordInput={passwordInput}
      setPasswordInput={setPasswordInput}
      passwordError={passwordError}
      handleSubmit={handleSubmit}
      formValid={formValid}
      success={success}
    />
  );
};

export default SignupContainer;