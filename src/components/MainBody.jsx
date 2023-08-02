import { useState } from 'react';
import { Box, Button, Container, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import IllustrationMobile from '../assets/images/illustration-sign-up-mobile.svg';
import IllustrationDesktop from '../assets/images/illustration-sign-up-desktop.svg';
import UpdateList from './UpdateList';
import FullScreenDialog from './FullScreenDialog';
import BasicModal from './Modal';

const MainBody = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [isError, setIsError] = useState(false);

  const emailValidation = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  const theme = useTheme();
  const isMediumOrGreater = useMediaQuery(theme.breakpoints.up('md'));
  const isSmallerThanMedium = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleFormSubmit = () => {
    if (email.length === 0) {
      setErrMsg('Empty Input');
      setIsError(true);
    } else if (!emailValidation.test(email)) {
      setErrMsg('Not valid email format');
      setIsError(true);
    } else {
      setErrMsg('');
      setIsError(false);
      handleOpenModal();
    }
  };

  return (
    <Container
      sx={{
        p: { sm: '0px', md: '1rem' },
        backgroundColor: { md: 'charcoalGrey' },
        width: { md: '100vw' },
        height: { md: '100vh' },
        position: { md: 'relative' },
        ml: { md: '0px'},
        mr: { md: '0px'},
        maxWidth: '100vw'
      }}
      maxWidth={false}
    >
      <Box
        mb="2.5rem"
        sx={{
          display: 'flex',
          flexDirection: { sm: 'column', md: 'row-reverse' },
          alignItems: { md: 'center' },
          justifyContent: { md: 'center' },
          width: { md: '75%', lg: '60%' },
          backgroundColor: 'white',
          ml: { md: 'auto' },
          mr: { md: 'auto' },
          position: { md: 'absolute' },
          top: { md: '50%' },
          left: { md: '50%' },
          transform: { md: 'translate(-50%, -50%)' },
          pr: { md: '2rem' },
          pl: { md: '2rem' },
          borderRadius: { md: '36px' },
          height: { md: '80vh', lg: '77vh' },
          
        }}
      >
        {isSmallerThanMedium && <IllustrationMobile width="100vw" height="auto" />}
        {isMediumOrGreater && <IllustrationDesktop />}
        <Box ml="2rem" backgroundColor="white" sx={{ width: { md: '60%' } }}>
          <Typography variant="h1" component="h1" sx={{ mt: { sm: '2.5rem', md: '-2rem' } }}>
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
            <TextField
              fullWidth
              variant="outlined"
              error={isError}
              helperText={errMsg}
              required
              onChange={(e) => setEmail(e.target.value)}
              defaultValue={email}
              sx={{
                '&.MuiFormControl-root:has(.Mui-error)': {
                  border: '1px solid tomato',
                  backgroundColor: 'backgroundRed',
                },
                '& .MuiFormHelperText-root': {
                  position: 'absolute',
                  top: '-1.5rem',
                  right: 0,
                },
                input: { cursor: 'pointer' },
              }}
            />

            <Button
              type="button"
              variant="contained"
              sx={{
                backgroundColor: 'darkSlateGrey',
                width: '100%',
                borderRadius: '8px',
                mt: '1.5rem',
                ':hover': { background: 'linear-gradient(225deg, #FF6A3A, #FF527B)' },
              }}
              onClick={handleFormSubmit}
            >
              <Typography variant="button" pt="18px" pb="14px">
                Subscribe to monthly newsletter
              </Typography>
            </Button>
            {isOpen && isSmallerThanMedium && <FullScreenDialog onClose={handleCloseModal} />}
            {isOpen && isMediumOrGreater && <BasicModal onClose={handleCloseModal} isOpen={isOpen} />}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default MainBody;
