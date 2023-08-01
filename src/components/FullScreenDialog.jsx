import { Dialog, Button, Typography, Box } from '@mui/material';
import Success from '../assets/images/icon-success2.svg';

const FullScreenDialog = ({ onClose }) => {

  return (
    <Dialog open={true} fullScreen /*onClose={onClose}*/>
      <Box p="2rem" mt="5rem" position="relatie">
        {/* <SuccessIcon color="primary" /> */}
        <Success />
        <Typography variant="h1" component="h1" mt="1rem">
          Thanks for subscribing!
        </Typography>
        <Typography variant="p" component="p" mt="0.5rem">
          A confirmation email has been sent to <strong>ash@loremcompany.com</strong>. Please open it and click the
          button inside to confirm your subscription
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'darkSlateGrey',
            width: '82%',
            borderRadius: '8px',
            mt: '1.5rem',
            position: 'absolute',
            bottom: '2rem',
            ':hover': { background: 'linear-gradient(225deg, #FF6A3A, #FF527B)' },
          }}
          onClick={onClose}
        >
          <Typography variant="button" pt="1.5rem" pb="14px">
            Dismiss message
          </Typography>
        </Button>
      </Box>
    </Dialog>
  );
};

export default FullScreenDialog;
