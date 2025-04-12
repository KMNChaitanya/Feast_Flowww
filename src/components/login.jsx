import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  background-color: #E8ECEF;
  min-height: 100vh;
`;

const FormContainer = styled.div`
  background-color: #FFFFFF;
  padding: 30px;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #2A2A4A;
`;

const InputField = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const RememberLabel = styled.label`
  font-size: 14px;
  color: #4A4A4A;
`;

const ResetLink = styled.a`
  font-size: 14px;
  color: #4A90E2;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const SubmitButton = styled.button`
  background: #F5A623;
  color: #FFFFFF;
  padding: 12px 20px;
  width: 100%;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #D68A1A;
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const ToggleButton = styled.button`
  background: ${props => (props.active ? '#F5A623' : '#4A90E2')};
  color: #fff;
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const Separator = styled.div`
  text-align: center;
  margin: 20px 0;
  position: relative;
  &:before,
  &:after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #ccc;
    margin: auto;
  }
  &:before {
    margin-right: 10px;
  }
  &:after {
    margin-left: 10px;
  }
`;

const SocialButton = styled.button`
  background: ${props => (props.platform === 'google' ? '#DB4437' : '#1DA1F2')};
  color: #fff;
  padding: 10px;
  width: 100%;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const Loginsignup = () => {
  const [isLogin, setIsLogin] = useState(true); // toggle between login and signup
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin && password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      if (isLogin) {
        // Handle Login
        const response = await axios.post('http://localhost:5000/api/login', { email, password });
        console.log('Logged in:', response.data);
        alert('Logged in successfully');
        navigate('/dashboard');
        // Save token to local storage or handle it as needed
      } else {
        // Handle Sign Up for regular users
        const response = await axios.post('http://localhost:5000/api/signup', { fullName, email, password });
        console.log('Signed up:', response.data);
        alert('Signed up successfully, please login');
        setIsLogin(true);
      }
    } catch (err) {
      console.error(isLogin ? 'Login error:' : 'Signup error:', err);
      alert(isLogin ? 'Invalid email or password' : 'Signup failed');
    }
  };

  return (
    <LoginPageContainer>
      <ToggleContainer>
        <ToggleButton active={isLogin} onClick={() => setIsLogin(true)}>
          Login
        </ToggleButton>
        <ToggleButton active={!isLogin} onClick={() => setIsLogin(false)}>
          Sign Up
        </ToggleButton>
      </ToggleContainer>
      <FormContainer>
        <FormTitle>{isLogin ? 'Login' : 'Sign Up'}</FormTitle>
        {!isLogin && (
          <InputField 
            type="text" 
            placeholder="Full Name" 
            value={fullName}
            onChange={(e) => setFullName(e.target.value)} 
            required 
          />
        )}
        <InputField 
          type="email" 
          placeholder="name@email.com" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <InputField 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        {!isLogin && (
          <InputField 
            type="password" 
            placeholder="Confirm Password" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        )}
        {isLogin && (
          <CheckboxContainer>
            <RememberLabel>
              <input 
                type="checkbox" 
                checked={rememberMe} 
                onChange={(e) => setRememberMe(e.target.checked)} 
              />{' '}
              Remember me
            </RememberLabel>
            <ResetLink href="#">Reset password</ResetLink>
          </CheckboxContainer>
        )}
        <SubmitButton type="submit" onClick={handleSubmit}>
          {isLogin ? 'Sign in' : 'Sign up'}
        </SubmitButton>
        <Separator>or</Separator>
        <SocialButton platform="google">Continue with Google</SocialButton>
        <SocialButton platform="twitter">Continue with Twitter</SocialButton>
        {!isLogin && (
          <>
            <p style={{ textAlign: 'center', marginTop: '15px' }}>
              Already have an account?{' '}
              <Link to="#" onClick={() => setIsLogin(true)} style={{ color: '#4A90E2' }}>
                Login
              </Link>
            </p>
            <p style={{ textAlign: 'center', marginTop: '15px' }}>
              Prefer signing up as an Organization?{' '}
              <Link to="/orgsignup" style={{ color: '#4A90E2' }}>
                Sign up as Org
              </Link>
            </p>
          </>
        )}
      </FormContainer>
    </LoginPageContainer>
  );
};

export default Loginsignup;
