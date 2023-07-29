import React from 'react';
import { Dialog, Button, Typography } from '@mui/material';

const FullScreenDialog = ({ onClose }) => {
  return (
    <Dialog open={true} fullScreen /*onClose={onClose}*/>
        <Button onClick={onClose}>dfs</Button>
    <Typography variant={'h1'}>hi</Typography>
    </Dialog>
  );
};

export default FullScreenDialog;
