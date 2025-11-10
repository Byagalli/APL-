import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";

const footerStyles = {
  position: "fixed",
  left: 0,
  bottom: 0,
  width: "100%",
  backgroundColor: "#000", // Black footer
  color: "#bbb",           // Light gray text
  py: 3,
  px: 2,
  textAlign: "center",
  zIndex: 1300, 
};

function Footer() {
  return (
    <Box component="footer" sx={footerStyles}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
          gap: 1,
        }}
      >
        
        <Typography variant="body2">
          © {new Date().getFullYear()} My React MUI App. All rights reserved.
        </Typography>

       
        <Box sx={{ display: "flex", gap: 3 }}>
          <Link href="/about" color="inherit" underline="hover">
            About
          </Link>
          <Link href="/contact" color="inherit" underline="hover">
            Contact
          </Link>
          <Link href="#" color="inherit" underline="hover">
            Privacy Policy
          </Link>
          <Link href="#" color="inherit" underline="hover">
            Terms
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
