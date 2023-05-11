import * as React from 'react';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, IconButton, ThemeProvider, Typography } from '@mui/material';
import { theme } from '@/pages/_app';

const SendEmailMessage = () => {

    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => {
      setOpenModal(true);
    };
    const handleCloseModal = () => {
      setOpenModal(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{width:400, height:96}}>
                <IconButton aria-label="Close form" sx={{position: "relative", left:420, right:0, top:30}}>
                    <CloseIcon />
                </IconButton>
                <Typography
                    variant="h4"
                    component="h5"
                    fontStyle="normal"
                    sx={{fontWeight:400, fontSize:24, lineHeight:1.334, pt:0, pl:6}}
                >
                    We sent an email
                </Typography>
                <Typography
                    variant="body1"
                    fontStyle="normal"
                    sx={{fontWeight:400, fontSize:16, lineHeight:'150%', letterSpacing: 0.15, pt:2, pl:6, alignSelf: 'stretch', gap:2}}
                >
                    Check your inbox, follow the link provided in the email to confirm your mailbox
                </Typography>
            </Box>

       </ThemeProvider>
    );
};
export default SendEmailMessage;