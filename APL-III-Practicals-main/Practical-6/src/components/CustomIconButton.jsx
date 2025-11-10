import React from 'react'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'

export default function CustomIconButton({ children, onClick, title, color = 'default', size = 'medium', sx, ...props }) {
  const button = (
    <IconButton onClick={onClick} color={color} size={size}
      sx={{ borderRadius: 2, bgcolor: 'background.paper', '&:hover': { bgcolor: 'action.hover' }, ...sx }}
      {...props}>
      {children}
    </IconButton>
  )
  return title ? <Tooltip title={title}>{button}</Tooltip> : button
}
