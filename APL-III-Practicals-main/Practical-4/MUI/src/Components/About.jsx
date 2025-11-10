import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>This is About Page</h1>
      <Button variant="contained" onClick={() => navigate("/contact")}>
        Go to Contact
      </Button>
    </div>
  );
}

export default About;
