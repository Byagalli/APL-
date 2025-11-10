import React from 'react'
import { Container, Box, Stack, Typography, Paper, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import { CustomButton, CustomTextField, CustomTextarea } from './components'

export default function App() {
  const [name, setName] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [notes, setNotes] = React.useState('')
  const [savedData, setSavedData] = React.useState([]) // store submitted entries

  const handleSave = () => {
    if (!name && !message && !notes) return
    const newEntry = { name, message, notes, id: Date.now() }
    setSavedData([newEntry, ...savedData])
    setName('')
    setMessage('')
    setNotes('')
  }

  const handleReset = () => {
    setName('')
    setMessage('')
    setNotes('')
  }

  const handleDelete = (id) => {
    setSavedData(savedData.filter((item) => item.id !== id))
  }

  return (
    <Container className="container">
      <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
        Task Manager - MUI Components
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }} elevation={2}>
        <Stack spacing={2}>
          <CustomTextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <CustomTextField
            label="Message"
            value={message}
            multiline
            rows={3}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Box>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Quick Notes
            </Typography>
            <CustomTextarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={5} />
          </Box>

          <Stack direction="row" spacing={2}>
            <CustomButton startIcon={<AddIcon />} onClick={handleSave}>
              Save
            </CustomButton>
            <CustomButton variant="outlined" color="secondary" onClick={handleReset}>
              Reset
            </CustomButton>
          </Stack>
        </Stack>
      </Paper>

      {/* Display saved data below */}
      <Stack spacing={2}>
        {savedData.map((item) => (
          <Paper key={item.id} sx={{ p: 2, position: 'relative' }} elevation={3}>
            <IconButton
              size="small"
              color="error"
              sx={{ position: 'absolute', top: 8, right: 8 }}
              onClick={() => handleDelete(item.id)}
            >
              <DeleteIcon />
            </IconButton>

            <Typography variant="h6">{item.name || 'No Name'}</Typography>
            <Typography variant="body1" sx={{ mt: 0.5 }}>
              {item.message || 'No Message'}
            </Typography>
            <Typography variant="body2" sx={{ mt: 0.5, fontStyle: 'italic' }}>
              {item.notes || 'No Notes'}
            </Typography>
          </Paper>
        ))}
      </Stack>
    </Container>
  )
}
