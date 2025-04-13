import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const DonateContainer = styled.div`
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

const FormContainer = styled.div`
  background-color: #FFFFFF;
  padding: 30px;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #2A2A4A;
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin-bottom: 15px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
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

const Donate = () => {
  const [donorName, setDonorName] = useState('');
  const [restaurantName, setRestaurantName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [location, setLocation] = useState('');
  const [quantity, setQuantity] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    if (!donorName || !mobileNumber || !location || !quantity) {
      setError('All required fields must be filled');
      return;
    }

    try {
      const url = 'http://localhost:5000/api/donations';
      const data = { donorName, restaurantName, mobileNumber, location, quantity };

      const token = localStorage.getItem('token');
      console.log('Token from localStorage:', token); // Debug token
      if (!token) {
        setError('No token found. Please log in.');
        return;
      }

      const response = await axios.post(url, data, {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log('Server Response:', response.data); // Debug response
      alert('Donation submitted successfully');
      navigate('/dashboard');
    } catch (err) {
      console.error('Donation Error:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Failed to submit donation. Check console for details.');
    }
  };

  return (
    <DonateContainer>
      <Header />
      <ContentContainer>
        <FormContainer>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <FormTitle>Donate Food</FormTitle>
          <InputField 
            type="text" 
            placeholder="Donor Name" 
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)} 
            required 
          />
          <InputField 
            type="text" 
            placeholder="Restaurant Name (Optional)" 
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)} 
          />
          <InputField 
            type="tel" 
            placeholder="Mobile Number" 
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)} 
            required 
          />
          <TextArea 
            placeholder="Location" 
            value={location}
            onChange={(e) => setLocation(e.target.value)} 
            rows="4" 
            required 
          />
          <InputField 
            type="number" 
            placeholder="Quantity (Number of people)" 
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)} 
            required 
          />
          <SubmitButton onClick={handleSubmit}>Submit Donation</SubmitButton>
        </FormContainer>
      </ContentContainer>
      <Footer />
    </DonateContainer>
  );
};

export default Donate;