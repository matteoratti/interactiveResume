import React from 'react'
import { useSelector } from 'react-redux';
import { Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar  } from '@mui/material'

import EmailIcon from '@mui/icons-material/Email'; 
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactForm from '../UI/Form/ContactForm';

function Contacts() {
  const contactInformation = useSelector((state:any) => state.resume.value.contactInformation)

  return (
    <>
      <List>
        <ListItem>
          <Typography variant="h4">{contactInformation.username}</Typography>
          <ContactForm title={"edit contact information"} contactInformation={contactInformation} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <EmailIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={contactInformation.email} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <PhoneIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={contactInformation.phone} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <LocationOnIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={contactInformation.location} />
        </ListItem>
      </List>
    </>
  )
}

export default Contacts