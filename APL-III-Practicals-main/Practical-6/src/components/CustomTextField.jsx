import React from 'react'
import TextField from '@mui/material/TextField'

export default function CustomTextField({ label, value, onChange, type = 'text', multiline = false, rows = 3, sx, ...props }) {
  return (
    <TextField fullWidth label={label} value={value} onChange={onChange} type={type} multiline={multiline}
      rows={multiline ? rows : undefined} variant="outlined"
      sx={{ borderRadius: 2, '& .MuiOutlinedInput-root': { borderRadius: 2 }, ...sx }}
      {...props}
    />
  )
}
