import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import IllustrationMobile from '../assets/images/illustration-sign-up-mobile.svg';
import UpdateList from './UpdateList';
import FullScreenDialog from './FullScreenDialog';

const MainBody = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Box mb="2.5rem" sx={{ display: 'flex', flexDirection: { sm: 'column', lg: 'row-reverse' } }}>
        <IllustrationMobile />
        <Box ml="2rem">
          <Typography variant="h1" component="h1" mt="2.5rem">
            Stay updated!
          </Typography>
          <Typography variant="p" component="p">
            Join 60,000+ product managers receiving monthly updates on:
          </Typography>
          <UpdateList />
          <Box mt=".75rem" width="90%">
            <Typography variant="h6" component="h4" mb="0.4rem">
              Email address
            </Typography>
            <TextField fullWidth label="email@company.com" variant="outlined" />

            <Button
              variant="contained"
              sx={{ backgroundColor: 'darkSlateGrey', width: '100%', borderRadius: '8px', mt: '1.5rem' }}
              onClick={handleOpenModal}
            >
              <Typography variant="button" pt="18px" pb="14px">
                Subscribe to monthly newsletter
              </Typography>
            </Button>
            {isOpen && <FullScreenDialog onClose={handleCloseModal} />}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default MainBody;
