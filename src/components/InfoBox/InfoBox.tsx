import React from 'react'
import { useDispatch } from 'react-redux';
import { IconButton, List, ListItem, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import { removeEntity } from '../../features/resume'; 

type Props = {
  data: []
  model: string
}

function InfoBox(props:Props): JSX.Element {
  const dispatch = useDispatch();
  return(
    <List>
      {
        props.data.map((element:string, index:number)=>{
          return(
            <ListItem key={index}>
              <Typography sx={{textTransform: 'capitalize'}} variant="body1">
                {element}
                <IconButton onClick={()=> dispatch(removeEntity({ id: '', model: props.model, data: element }))} aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              
              </Typography>
            </ListItem>
          )
        })
      }
    </List>
  )
}

export default InfoBox