import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios'; // Ensure axios is installed (npm install axios)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const DonationCard = styled.div`
  background-color: #FFFFFF;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const DonationInfo = styled.p`
  font-size: 14px;
  color: #4A4A4A;
  margin: 5px 0;
`;

const RequestButton = styled.button`
  background: #4A90E2;
  color: #FFFFFF;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #357ABD;
  }
`;

const NGO = () => {
  const navigate = useNavigate();
  const [donations, setDonations] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchDonations = async () => {
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/api/donations', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setDonations(response.data);
      } catch (err) {
        console.error('Error fetching donations:', err);
        if (err.response?.status === 401 || err.response?.status === 403) {
          navigate('/login');
        }
      }
    };

    fetchDonations();
  }, [token, navigate]);

  const handleRequest = (donationId) => {
    // Placeholder function for sending a request
    console.log(`Send request for donation ID: ${donationId}`);
    // You can extend this to call a backend endpoint to handle the request
  };

  if (!token) return null;

  return (
    <Container>
      <Header />
      <Content>
        <h2>Available Donations for NGOs</h2>
        {donations.length === 0 ? (
          <p>No donations available at the moment.</p>
        ) : (
          donations.map((donation) => (
            <DonationCard key={donation._id}>
              <DonationInfo><strong>Donor:</strong> {donation.donorName}</DonationInfo>
              <DonationInfo><strong>Restaurant:</strong> {donation.restaurantName || 'N/A'}</DonationInfo>
              <DonationInfo><strong>Mobile:</strong> {donation.mobileNumber}</DonationInfo>
              <DonationInfo><strong>Location:</strong> {donation.location}</DonationInfo>
              <DonationInfo><strong>Quantity:</strong> {donation.quantity} units</DonationInfo>
              <DonationInfo><strong>Posted:</strong> {new Date(donation.createdAt).toLocaleDateString()}</DonationInfo>
              <RequestButton onClick={() => handleRequest(donation._id)}>Send Request</RequestButton>
            </DonationCard>
          ))
        )}
      </Content>
      <Footer />
    </Container>
  );
};

export default NGO;