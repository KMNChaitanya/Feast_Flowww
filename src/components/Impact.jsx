import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  text-align: center;
`;

const ImpactInfo = styled.p`
  font-size: 16px;
  color: #2c3e50;
  margin-bottom: 20px;
`;

const ImageGallery = styled.div`
  display: flex;
  flex-direction: column; /* Changed to column for vertical stacking */
  align-items: center; /* Center images horizontally */
  gap: 10px; /* Space between images */
  padding: 20px;
`;

const Image = styled.img`
  max-width: 200px;
  max-height: 200px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const AddButton = styled.button`
  background-color: #F5A623;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #D68A1A;
  }
`;

const FileInput = styled.input`
  display: block;
  margin: 10px auto;
`;

const Impact = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState(null); // For local image preview
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  // Fetch images on component mount
  useEffect(() => {
    const fetchImages = async () => {
      if (!token) {
        navigate('/login'); // Redirect to login if no token
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/api/impact', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setImages(response.data);
      } catch (err) {
        console.error('Error fetching images:', err);
      }
    };
    fetchImages();
  }, [token, navigate]);

  // Handle image selection and preview
  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result); // Set preview URL
      };
      reader.readAsDataURL(file); // Convert to base64 for preview

      // Upload to backend
      handleImageUpload(file);
    }
  };

  // Handle image upload to backend
  const handleImageUpload = async (file) => {
    if (!token) {
      navigate('/login');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('http://localhost:5000/api/impact/upload', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Upload response:', response.data);

      // Fetch updated images
      const fetchResponse = await axios.get('http://localhost:5000/api/impact', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setImages(fetchResponse.data);
      setPreview(null); // Clear preview after successful upload
    } catch (err) {
      console.error('Error uploading image:', err);
    }
  };

  return (
    <Container>
      <Header />
      <Content>
        <ImpactInfo>
          Food donations are making a significant impact in the real world by reducing hunger and minimizing waste. Each donation helps feed those in need, supports local NGOs, and contributes to a sustainable future. In 2024 alone, initiatives like FeastFlow have redistributed over 10,000 meals, engaged 500+ active donors, and partnered with 100+ NGOs to create a ripple effect of positive change across communities.
        </ImpactInfo>
        <AddButton onClick={() => document.getElementById('imageUpload').click()}>
          Add Impact
        </AddButton>
        <FileInput
          type="file"
          accept="image/*"
          id="imageUpload"
          onChange={handleImageSelect}
          style={{ display: 'none' }} // Hidden input, triggered by button
        />
        {preview && (
          <div>
            <h3>Preview:</h3>
            <Image src={preview} alt="Preview" />
          </div>
        )}
        <ImageGallery>
          {images.map((impact, index) => (
            <Image key={index} src={`http://localhost:5000${impact.imageUrl}`} alt="Impact" />
          ))}
        </ImageGallery>
      </Content>
      <Footer />
    </Container>
  );
};

export default Impact;