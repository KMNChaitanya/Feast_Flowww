import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const DashboardContainer = styled.div`
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

const DonationList = styled.div`
  background-color: #FFFFFF;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 800px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
`;

const DonationItem = styled.div`
  padding: 15px;
  border-bottom: 1px solid #E8ECEF;
  &:last-child {
    border-bottom: none;
  }
`;

const Dashboard = () => {
  const [donations, setDonations] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log('Dashboard Token:', token); // Log token for debugging
        if (!token) {
          setError('Please log in to view donations');
          return;
        }

        const response = await axios.get('http://localhost:5000/api/donations', {
          headers: { Authorization: `Bearer ${token}` }
        });
        console.log('Fetched Donations:', response.data); // Log fetched data
        setDonations(response.data);
      } catch (err) {
        console.error('Fetch Error Details:', err.response?.data || err.message);
        setError(err.response?.data?.message || 'Failed to load donations. Check console for details.');
      }
    };
    fetchDonations();
  }, []);

  return (
    <DashboardContainer>
      <Header />
      <ContentContainer>
        <DonationList>
          <h2 style={{ textAlign: 'center', color: '#2A2A4A' }}>Donation Dashboard</h2>
          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
          {donations.length === 0 ? (
            <p>No donations yet.</p>
          ) : (
            donations.map((donation, index) => (
              <DonationItem key={index}>
                <p><strong>Donor:</strong> {donation.donorName}</p>
                <p><strong>Restaurant:</strong> {donation.restaurantName || 'N/A'}</p>
                <p><strong>Mobile:</strong> {donation.mobileNumber}</p>
                <p><strong>Location:</strong> {donation.location}</p>
                <p><strong>Quantity:</strong> {donation.quantity}</p>
                <p><strong>Date:</strong> {new Date(donation.createdAt).toLocaleDateString()}</p>
              </DonationItem>
            ))
          )}
        </DonationList>
      </ContentContainer>
      <Footer />
    </DashboardContainer>
  );
};

export default Dashboard;