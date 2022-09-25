import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeEntity } from '../../features/resume'; 
import { IconButton, List, ListItem, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import ExperiencesForm from '../UI/Form/ExperiencesForm';

function Experiences() {
  const experiencesData = useSelector((state:any) => state.resume.value.experiences)
  const dispatch = useDispatch();

  return (
    <>
      {
        experiencesData.map((element:any, index:string)=>{
          return(
            <List key={index}>
              <ListItem>
                <Typography sx={{textTransform: 'capitalize'}} variant="h4">{element.companyName}, {element.jobLocation}</Typography>
                <ExperiencesForm title='edit experience' variant="edit" experience={element} />
                <IconButton onClick={()=> dispatch(removeEntity({ id: element.id, model: 'experiences' }))} aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItem>
              <ListItem>
                <Typography variant="h5">{element.role} | {element.timePeriod}</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">{element.jobDescription}</Typography>
              </ListItem>
            </List>
          )
        })
      }
    </>
  )
}

export default Experiences