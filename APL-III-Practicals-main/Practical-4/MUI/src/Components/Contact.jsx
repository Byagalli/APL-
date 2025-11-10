import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Contact Page</h1>
      <Button variant="contained" onClick={() => navigate("/")}>
        Back to Home
      </Button>
    </div>
  );
}

export default Contact;
