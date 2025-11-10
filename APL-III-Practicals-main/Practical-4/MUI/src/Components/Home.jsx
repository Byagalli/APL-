import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <Button variant="contained" onClick={() => navigate("/about")}>
        Go to About
      </Button>
    </div>
  );
}

export default Home;
