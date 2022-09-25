import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeEntity } from '../../features/resume'; 
import { Grid, Card, CardContent, Typography, CardActions, IconButton } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import ProjectsForm from '../UI/Form/ProjectsForm';

function Projects() {
  const projectsData = useSelector((state:any) => state.resume.value.projects)
  const dispatch = useDispatch();
  return (
    <Grid container spacing={2} pl={2}>
      {projectsData.map((project:any, index:string)=>{
        return(
          <Grid key={index} item lg={6}  >
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                  {project.projectName}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                </Typography>
                <Typography variant="body2">
                  {project.projectDescription}
                </Typography>
              </CardContent>
              <CardActions>
                <ProjectsForm title='edit project' variant="edit" project={project} />
                <IconButton onClick={()=> dispatch(removeEntity({ id: project.id, model: 'projects' }))} aria-label="delete">
                  <DeleteIcon />
                </IconButton>             
              </CardActions>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default Projects