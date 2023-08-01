import { useEffect, useState } from 'react';
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

  const [isError, setIsError] = useState(false)

  const emailValidation = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
 console.log(emailValidation)
  const theme = useTheme();
  const isLargeOrGreater = useMediaQuery(theme.breakpoints.up('lg'));
  const isSmallerThanLarge = useMediaQuery(theme.breakpoints.down('lg'));

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };




  const handleFormSubmit = () => {
    // !emailValidation.test(email)} onSubmit={(e) => setEmail(e.target.value)
    if(email.length === 0) {
      setErrMsg('Empty Input')
      setIsError(true)
    }


    else if (!emailValidation.test(email)) {
      setErrMsg('The entered text is not valid email format')
      setIsError(true)
     }
     
     else {
      setIsError(false)
      setErrMsg('')
      handleOpenModal()
}
  }

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
            <TextField fullWidth  variant="outlined" error={isError} helperText={errMsg} required onChange={(e) => setEmail(e.target.value)} defaultValue={email} 
            sx={{'&.MuiFormControl-root:has(.Mui-error)': {
              // if a child of FormControl has class Mui-error apply css to FormControl
              border: '1px solid tomato',
              backgroundColor: 'backgroundRed'
            },
            '& .MuiFormHelperText-root' : {
              position : 'absolute',
              top : '-1.5rem',
              right: 0
          },  input: {cursor: 'pointer',}}} />

            <Button
            type="button"
              variant="contained"
              sx={{ backgroundColor: 'darkSlateGrey', width: '100%', borderRadius: '8px', mt: '1.5rem', ':hover': { background: 'linear-gradient(225deg, #FF6A3A, #FF527B)'} }}
              onClick={handleFormSubmit}

            >
              <Typography variant="button" pt="18px" pb="14px">
                Subscribe to monthly newsletter
              </Typography>
            </Button>
            {isOpen && (isSmallerThanLarge && <FullScreenDialog onClose={handleCloseModal} />) }
            {isOpen && (isLargeOrGreater && <BasicModal onClose={handleCloseModal} isOpen={isOpen} />) }
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default MainBody;
