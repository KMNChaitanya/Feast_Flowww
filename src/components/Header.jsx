import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: #FFFFFF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: #4A90E2;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: #4A4A4A;
  text-decoration: none;
  &:hover {
    color: #4A90E2;
  }
`;

const LoginButton = styled(Link)`
  background: none;
  border: 2px solid #4A90E2;
  color: #4A90E2;
  padding: 5px 15px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background: #4A90E2;
    color: #FFFFFF;
  }
`;

const Header = () => {
  return (
    <Nav>
      <Logo to="/">FeastFlow</Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/donate">Donate Food</NavLink>
      </NavLinks>
      <LoginButton to="/login">Login</LoginButton>
    </Nav>
  );
};

export default Header;
