import React, { useEffect } from 'react'
import GoogleButton from 'react-google-button';
import { UserAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Paper, Typography } from '@mui/material';
import { deleteUser, getAuth } from 'firebase/auth';
export default function Login() {
    const { googleSignIn, user } = UserAuth();
    const auth = getAuth();
    const cuser = auth.currentUser;
    const navigate = useNavigate()
    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        if (user != null && user.email == 'truongtandat1409@gmail.com') {
            navigate('/dashboard')
        } else {
            if (user != null && user.email != "truongtandat1409@gmail.com") {
                document.getElementById('Warning').innerHTML = "You are not admin";
                deleteUser(cuser);
            }
        }
    }, [user])
    return (
        <Container>
            <Box p={5}>
                <Paper sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Box p={5} >
                        <Typography variant='h6'>Click the button below to login</Typography>
                        <GoogleButton onClick={handleGoogleSignIn} />
                        <div style={{ color: 'red' }} id="Warning"></div>
                    </Box>
                </Paper>
            </Box>
        </Container>
    )
}
