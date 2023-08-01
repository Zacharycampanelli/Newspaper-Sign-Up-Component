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
        <Box p="2rem" mt="5rem" position="relatie">
        {/* <SuccessIcon color="primary" /> */}
     <Success  />
        <Typography variant="h1" component="h1" mt="1rem">Thanks for subscribing!</Typography>
        <Typography variant="p" component="p" mt="0.5rem">A confirmation email has been sent to <strong>ash@loremcompany.com</strong>. Please open it and click the button inside to confirm your subscription</Typography>
        <Button
              variant="contained"
              sx={{ backgroundColor: 'darkSlateGrey', width: '82%', borderRadius: '8px', mt: '1.5rem', position: 'absolute', bottom: '2rem'}}
              onClick={onClose}
            >
                 <Typography variant="button" pt="1.5rem" pb="14px">
                    Dismiss message
                    </Typography></Button>
        </Box>
    </Dialog>
  );
};

export default FullScreenDialog;
