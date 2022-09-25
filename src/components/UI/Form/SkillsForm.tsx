import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addSkill } from '../../../features/resume'; 

import {Button, Dialog,DialogActions, DialogContent, DialogTitle, IconButton, TextField} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

type Props = {
  title: string
};

function SkillsForm(props:Props) {
  const [open, setOpen] = useState(false);
  const [skill, setSkill] = useState("");
  const dispatch = useDispatch();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addSkill({ data: skill }));
    setOpen(false);
    setSkill("");
  }

  const handleChange = (e: any) => {
    setSkill(e.target.value)
  }

  return (
    <>
      <IconButton onClick={handleOpen}>
        <AddIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{props.title}</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              name="skill"
              autoFocus
              margin="normal"
              id="skill"
              label="Skill name"
              type="text"
              fullWidth
              variant="outlined"
              value={skill}
              onChange={handleChange}
              required
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

export default SkillsForm