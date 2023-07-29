import React from 'react';
import { Dialog, Button, Typography, Box, SvgIcon } from '@mui/material';
import Success from '../assets/images/icon-success2.svg';

const FullScreenDialog = ({ onClose }) => {

    // function SuccessIcon(props) {
    //     return (

        // <SvgIcon {...props}> 
        // <svg xmlns="http://www.w3.org/2000/svg" color="red" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>

        // </SvgIcon>
        // )
    // }

  return (
    <Dialog open={true} fullScreen/*onClose={onClose}*/>
        <Box >
        {/* <SuccessIcon color="primary" /> */}
     <Success />
        <Typography variant="h1" component="h1" mt="2.5rem">Thanks for subscribing!</Typography>
        <Typography variant="p" component="p" mt="2.5rem">A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription</Typography>
        <Button onClick={onClose}>dfs</Button>
        </Box>
    </Dialog>
  );
};

export default FullScreenDialog;
