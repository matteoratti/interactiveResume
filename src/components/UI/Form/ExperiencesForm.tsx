import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateExperience, addExperience } from '../../../features/resume';

import {Button, Dialog,DialogActions, DialogContent, DialogTitle, IconButton, TextField} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

type Props = {
  title: string
  experience: any
  variant: string
};

function ExperiencesForm(props:Props) {
  const [open, setOpen] = useState(false);
  const [experience, setExperience] = useState(props.experience);
  const dispatch = useDispatch();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(props.variant === 'new'){
      dispatch(addExperience({ data: experience }))
    }else{
      dispatch(updateExperience({id: experience.id, data: experience }))
    }
    
    setOpen(false);
  }

  const handleChange = (e: any) => {
    setExperience({...experience, [e.target.name]: e.target.value})
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
              name="companyName"
              autoFocus
              margin="normal"
              id="companyName"
              label="Company name"
              type="text"
              fullWidth
              variant="outlined"
              value={experience.companyName}
              onChange={handleChange}
              required
            />
            <TextField
              name="jobLocation"
              autoFocus
              margin="normal"
              id="jobLocation"
              label="Job location"
              type="text"
              fullWidth
              variant="outlined"
              value={experience.jobLocation}
              onChange={handleChange}
              required
            />
            <TextField
              name="role"
              autoFocus
              margin="normal"
              id="role"
              label="Role"
              type="text"
              fullWidth
              variant="outlined"
              value={experience.role}
              onChange={handleChange}
            />
            <TextField
              name="timePeriod"
              autoFocus
              margin="normal"
              id="timePeriod"
              label="Time Period"
              type="text"
              fullWidth
              variant="outlined"
              value={experience.timePeriod}
              onChange={handleChange}
            />
            <TextField
              name="jobDescription"
              autoFocus
              margin="normal"
              id="jobDescription"
              label="Job Description"
              type="text"
              fullWidth
              variant="outlined"
              value={experience.jobDescription}
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

export default ExperiencesForm