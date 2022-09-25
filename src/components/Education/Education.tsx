import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeEntity } from '../../features/resume'; 
import { IconButton, List, ListItem, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EducationForm from '../UI/Form/EducationForm';

function Education(): JSX.Element {
  const educationData = useSelector((state:any) => state.resume.value.education)
  const dispatch = useDispatch();
  return (
    <>
      {
        educationData.map((element:any, index:string)=>{
          return(
            <List key={index}>
              <ListItem>
                <Typography sx={{textTransform: 'capitalize'}} variant="h5">{element.title}</Typography>
                <EducationForm title='edit education' variant="edit" education={element}/>
                <IconButton onClick={()=> dispatch(removeEntity({ id: element.id, model: 'education' }))} aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItem>
              <ListItem sx={{textTransform: 'capitalize'}}>{element.university}</ListItem>
              <ListItem>{element.time}</ListItem>
            </List>
          )
        })
      }
    </>
  )
}

export default Education