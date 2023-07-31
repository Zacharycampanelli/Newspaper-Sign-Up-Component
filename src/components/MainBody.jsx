import { useState } from 'react';
import { Box, Button, Container, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import IllustrationMobile from '../assets/images/illustration-sign-up-mobile.svg';
import IllustrationDesktop from '../assets/images/illustration-sign-up-desktop.svg';
import UpdateList from './UpdateList';
import FullScreenDialog from './FullScreenDialog';

const MainBody = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const isLargeOrGreater = useMediaQuery(theme.breakpoints.up('lg'));
  const isSmallerThanLarge = useMediaQuery(theme.breakpoints.down('lg'));

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Container sx={{p: { sm: '0px', lg: '1rem'}, backgroundColor: { lg: 'charcoalGrey'}, width: { lg: '100%'}, height: {lg: '100vh'}, position: {lg: 'relative'}}}>
      <Box mb="2.5rem" sx={{ display: 'flex', flexDirection: { sm: 'column', lg: 'row-reverse' }, alignItems: { lg: 'center'}, justifyContent:{lg: 'center'}, width: { lg: '60%'}, backgroundColor: "white", ml: {lg: "auto"}, mr: {lg: "auto"}, position: {lg: 'absolute'}, top:{lg: '50%'}, left: {lg: '50%'}, transform: {lg: 'translate(-50%, -50%)'}, pr:{lg: "2rem"}, pl:{lg: "2rem"}, borderRadius: {lg: "36px"}, height: {lg: "66vh"} }}>
        {isSmallerThanLarge && <IllustrationMobile />}
        {isLargeOrGreater && <IllustrationDesktop />}
        <Box ml="2rem" backgroundColor="white" sx={{ width: { lg: '60%'},}}> 

          <Typography variant="h1" component="h1" sx={{ mt: {sm:"2.5rem", lg: "-2rem"}}}>
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
    </Container>
  );
};

export default MainBody;
