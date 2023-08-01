import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Success from '../assets/images/icon-success2.svg';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 504,
  height: 520,
  bgcolor: 'white',
  borderRadius: '36px',
  boxShadow: 24,
  p: 6,
};

export default function BasicModal({ onClose, isOpen }) {
  const [open, setOpen] = React.useState(isOpen);

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        slotProps={{ backdrop: { sx: { backgroundColor: 'darkSlateGrey' } } }}
      >
        <Box sx={style}>
          <Success />
          <Typography id="modal-modal-title" variant="h1" component="h1" lineHeight={1} mt="1.5rem" mb="1.5rem">
            Thanks for subscribing!
          </Typography>
          <Typography id="modal-modal-description" variant="p" component="p" mt="0.5rem">
            A confirmation email has been sent to <strong>ash@loremcompany.com</strong>. Please open it and click the
            button inside to confirm your subscription
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'darkSlateGrey',
              width: '82%',
              borderRadius: '8px',
              position: 'absolute',
              bottom: '4.5rem',
              ':hover': { background: 'linear-gradient(225deg, #FF6A3A, #FF527B)' },
            }}
            onClick={onClose}
          >
            <Typography variant="button" pt="18px" pb="14px">
              Dismiss message
            </Typography>
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
