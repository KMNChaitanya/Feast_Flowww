import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios'; // Ensure axios is installed (npm install axios)

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #F5F7FA;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  flex: 1;
`;

const ProfileCard = styled.div`
  background-color: #FFFFFF;
  padding: 30px;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ProfileTitle = styled.h2`
  color: #2A2A4A;
  margin-bottom: 20px;
`;

const ProfileInfo = styled.p`
  font-size: 16px;
  color: #4A4A4A;
  margin-bottom: 10px;
`;

const SignOutButton = styled.button`
  background: #F5A623;
  color: #FFFFFF;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background: #D68A1A;
  }
`;

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ fullName: '', email: '', joined: '' });
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/api/auth/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserData(response.data);
      } catch (err) {
        console.error('Error fetching profile:', err);
        if (err.response?.status === 401 || err.response?.status === 403) {
          navigate('/login'); // Redirect on invalid token
        }
      }
    };

    fetchUserProfile();
  }, [token, navigate]);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    alert('Signed out successfully');
    navigate('/');
  };

  if (!token) {
    return null; // Avoid rendering until redirect is handled
  }

  return (
    <ProfileContainer>
      <Header />
      <ContentContainer>
        <ProfileCard>
          <ProfileTitle>My Profile</ProfileTitle>
          <ProfileInfo><strong>Name:</strong> {userData.fullName || 'User'}</ProfileInfo>
          <ProfileInfo><strong>Email:</strong> {userData.email || 'N/A'}</ProfileInfo>
          <ProfileInfo><strong>Joined:</strong> {new Date(userData.joined).toLocaleDateString() || 'N/A'}</ProfileInfo>
          <SignOutButton onClick={handleSignOut}>Sign Out</SignOutButton>
        </ProfileCard>
      </ContentContainer>
      <Footer />
    </ProfileContainer>
  );
};

export default Profile;