import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateContactInformation } from '../../../features/resume';
import {Button, Dialog,DialogActions, DialogContent, DialogTitle, IconButton, TextField} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

type Props = {
  title: string
  contactInformation: any
};

function ContactForm(props:Props) {

  const [open, setOpen] = useState(false);
  const [contactInformation, setContactInformation] = useState(props.contactInformation);
  const dispatch = useDispatch();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateContactInformation({contactInformation}))
    setOpen(false);
  }

  const handleChange = (e: any) => {
    setContactInformation({...contactInformation, [e.target.name]: e.target.value})
  }

  return (
    <>
      <IconButton onClick={handleOpen}><EditIcon /></IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{props.title}</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              name="username"
              autoFocus
              margin="normal"
              id="username"
              label="Username"
              type="text"
              fullWidth
              variant="outlined"
              value={contactInformation.username}
              onChange={handleChange}
            />
            <TextField
              name="email"
              autoFocus
              margin="normal"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="outlined"
              value={contactInformation.email}
              onChange={handleChange}
            />
            <TextField
              name="phone"
              autoFocus
              margin="normal"
              id="phone"
              label="Phone"
              type="text"
              fullWidth
              variant="outlined"
              value={contactInformation.phone}
              onChange={handleChange}
            />
            <TextField
              name="location"
              autoFocus
              margin="normal"
              id="location"
              label="Location"
              type="text"
              fullWidth
              variant="outlined"
              value={contactInformation.location}
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button type='submit'>Save</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  )
}

export default ContactForm