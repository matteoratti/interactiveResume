import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateProject, addProject } from '../../../features/resume';

import {Button, Dialog,DialogActions, DialogContent, DialogTitle, IconButton, TextField} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

type Props = {
  title: string
  project: any
  variant: string
};

function ProjectsForm(props:Props) {
  const [open, setOpen] = useState(false);
  const [project, setProject] = useState(props.project);
  const dispatch = useDispatch();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(props.variant === 'new'){
      dispatch(addProject({ data: project }))
    }else{
      dispatch(updateProject({id: project.id, data: project }))
    }
    setOpen(false);
  }

  const handleChange = (e: any) => {
    setProject({...project, [e.target.name]: e.target.value})
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
              name="projectName"
              autoFocus
              margin="normal"
              id="projectName"
              label="Project Name"
              type="text"
              fullWidth
              variant="outlined"
              value={project.projectName}
              onChange={handleChange}
              required
            />
            <TextField
              name="projectDescription"
              autoFocus
              margin="normal"
              id="projectDescription"
              label="Project Description"
              type="text"
              fullWidth
              variant="outlined"
              value={project.projectDescription}
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

export default ProjectsForm