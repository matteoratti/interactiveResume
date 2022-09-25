import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateEducation, addEducation } from '../../../features/resume';

import {Button, Dialog,DialogActions, DialogContent, DialogTitle, IconButton, TextField} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

type Props = {
  title: string
  education: any
  variant: string
};

function EducationForm(props:Props) {
  const [open, setOpen] = useState(false);
  const [education, setEducation] = useState(props.education);
  const dispatch = useDispatch();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(props.variant === 'new'){
      dispatch(addEducation({ data: education }))
    }else{
      dispatch(updateEducation({id: education.id, data: education }))
    }
    
    setOpen(false);
  }

  const handleChange = (e: any) => {
    setEducation({...education, [e.target.name]: e.target.value})
  }

  return (
    <>
      <IconButton onClick={handleOpen}>
        {props.variant === 'new' ? <AddIcon /> : <EditIcon />}
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{props.title}</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              name="title"
              autoFocus
              margin="normal"
              id="title"
              label="Title"
              type="text"
              fullWidth
              variant="outlined"
              value={education.title}
              onChange={handleChange}
              required
            />
            <TextField
              name="university"
              autoFocus
              margin="normal"
              id="university"
              label="University"
              type="text"
              fullWidth
              variant="outlined"
              value={education.university}
              onChange={handleChange}
              required
            />
            <TextField
              name="time"
              autoFocus
              margin="normal"
              id="time"
              label="Time"
              type="text"
              fullWidth
              variant="outlined"
              value={education.time}
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

export default EducationForm