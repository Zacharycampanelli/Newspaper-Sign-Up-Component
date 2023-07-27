import * as React from 'react';

import { Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

import ListIcon from '../assets/images/icon-list.svg';

const UpdateList = () => {


  return (
      <List sx={{marginTop: "1rem"}}> 
        <ListItem sx={{marginLeft: "-1rem" }}>
          <ListItemIcon sx={{marginTop: "-1rem"}}>
            <ListIcon />
          </ListItemIcon >
           <ListItemText sx={{marginLeft: "-1rem"}} disableTypography primary={<Typography variant="p">Product discovery and building what matters</Typography>} />
        </ListItem>
        <ListItem sx={{marginLeft: "-1rem" }}>
          <ListItemIcon sx={{marginTop: "-1rem"}}>
            <ListIcon />
          </ListItemIcon>
          <ListItemText sx={{marginLeft: "-1rem"}} disableTypography primary={<Typography variant="p">Measuring to ensure updates are a success</Typography>} />
        </ListItem>
        <ListItem sx={{marginLeft: "-1rem" }}>
          <ListItemIcon sx={{marginTop: "0rem"}}>
            <ListIcon />
          </ListItemIcon>
          <ListItemText sx={{marginLeft: "-1rem"}} disableTypography primary={<Typography variant="p">And much more!</Typography> } />
        </ListItem>
      </List>
  );
};

export default UpdateList;
