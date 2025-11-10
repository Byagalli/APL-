import React from 'react'
import Button from '@mui/material/Button'

export default function CustomButton({ children, onClick, variant = 'contained', color = 'primary', size = 'medium', sx, ...props }) {
  return (
    <Button variant={variant} color={color} size={size} onClick={onClick}
      sx={{ borderRadius: 2, px: 3, py: 1, fontWeight: 700, textTransform: 'none', boxShadow: 2, ...sx }}
      {...props}>
      {children}
    </Button>
  )
}
