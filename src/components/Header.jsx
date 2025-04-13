import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios'; // Ensure axios is installed (npm install axios)

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: #FFFFFF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
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

// Custom styled component for scroll link
const NavScrollLink = styled.a`
  color: #4A4A4A;
  text-decoration: none;
  cursor: pointer;
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

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  color: #4A90E2;
  cursor: pointer;
  &:hover {
    color: #357ABD;
  }
`;

const ProfileImage = styled.span`
  font-size: 24px; /* Using emoji as placeholder */
`;

const ProfileName = styled.span`
  margin-left: 10px;
  font-weight: bold;
`;

const Header = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!token) return;

      try {
        const response = await axios.get('http://localhost:5000/api/auth/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserName(response.data.fullName || 'User');
      } catch (err) {
        console.error('Error fetching user profile:', err);
        if (err.response?.status === 401 || err.response?.status === 403) {
          localStorage.removeItem('token'); // Optionally clear invalid token
          navigate('/login');
        }
      }
    };

    fetchUserProfile();
  }, [token, navigate]);

  const handleProfileClick = () => {
    if (token) {
      navigate('/profile');
    }
  };

  const handleWhoWeAreScroll = () => {
    if (window.location.pathname === '/') {
      const whoWeAreSection = document.getElementById('who-we-are');
      if (whoWeAreSection) {
        whoWeAreSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const whoWeAreSection = document.getElementById('who-we-are');
        if (whoWeAreSection) {
          whoWeAreSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleWhatWeDoScroll = () => {
    if (window.location.pathname === '/') {
      const whatWeDoSection = document.getElementById('what-we-do');
      if (whatWeDoSection) {
        whatWeDoSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const whatWeDoSection = document.getElementById('what-we-do');
        if (whatWeDoSection) {
          whatWeDoSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <Nav>
      <Logo to="/">FeastFlow</Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavScrollLink onClick={handleWhoWeAreScroll}>Who We Are</NavScrollLink>
        <NavScrollLink onClick={handleWhatWeDoScroll}>What We Do</NavScrollLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/donate">Donate Food</NavLink>
      </NavLinks>
      {token ? (
        <ProfileSection onClick={handleProfileClick}>
          <ProfileImage>👤</ProfileImage>
          <ProfileName>{userName}</ProfileName>
        </ProfileSection>
      ) : (
        <LoginButton to="/login">Login</LoginButton>
      )}
    </Nav>
  );
};

export default Header;