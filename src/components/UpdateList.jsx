import { Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

import ListIcon from '../assets/images/icon-list.svg';

const UpdateList = () => {
  return (
    <List sx={{ mt: '1rem' }}>
      <ListItem sx={{ ml: '-1rem', mb: { md: '-1rem' } }}>
        <ListItemIcon sx={{ mt: { sm: '-1rem', md: '0' } }}>
          <ListIcon />
        </ListItemIcon>
        <ListItemText
          sx={{ ml: '-1rem' }}
          disableTypography
          primary={<Typography variant="p">Product discovery and building what matters</Typography>}
        />
      </ListItem>
      <ListItem sx={{ ml: '-1rem', mb: { md: '-1rem' } }}>
        <ListItemIcon sx={{ mt: { sm: '-1rem', md: '0' } }}>
          <ListIcon />
        </ListItemIcon>
        <ListItemText
          sx={{ ml: '-1rem' }}
          disableTypography
          primary={<Typography variant="p">Measuring to ensure updates are a success</Typography>}
        />
      </ListItem>
      <ListItem sx={{ ml: '-1rem', mb: { md: '-1rem' } }}>
        <ListItemIcon sx={{ mt: '0rem' }}>
          <ListIcon />
        </ListItemIcon>
        <ListItemText
          sx={{ marginLeft: '-1rem' }}
          disableTypography
          primary={<Typography variant="p">And much more!</Typography>}
        />
      </ListItem>
    </List>
  );
};

export default UpdateList;
