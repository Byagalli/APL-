import React from 'react'
import { styled } from '@mui/system'

const StyledTextarea = styled('textarea')(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(1.5),
  borderRadius: 12,
  border: `1px solid ${theme.palette.divider}`,
  outline: 'none',
  fontSize: '1rem',
  resize: 'vertical',
  minHeight: 120,
  '&:focus': {
    borderColor: theme.palette.primary.main,
    boxShadow: `0 0 0 6px ${theme.palette.primary.light}33`,
  },
}))

export default function CustomTextarea({ value, onChange, placeholder = '', rows = 4, ...props }) {
  return <StyledTextarea value={value} onChange={onChange} placeholder={placeholder} rows={rows} {...props} />
}
