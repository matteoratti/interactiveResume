import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addLanguage } from '../../../features/resume'; 

import {Button, Dialog,DialogActions, DialogContent, DialogTitle, IconButton, TextField} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

type Props = {
  title: string
};

function LanguagesForm(props:Props) {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("");
  const dispatch = useDispatch();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addLanguage({ data: language }))
    setLanguage("");
    setOpen(false);
  }

  const handleChange = (e: any) => {
    setLanguage(e.target.value)
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
              name="language"
              autoFocus
              margin="normal"
              id="language"
              label="language spoken"
              type="text"
              fullWidth
              variant="outlined"
              value={language}
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

export default LanguagesForm