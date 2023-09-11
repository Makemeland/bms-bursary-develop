import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import React from 'react';
import Button  from '@mui/material/Button';
import Login from '@mui/icons-material/Login';

const SignupOptions = ({ className }) => {
    const [testState, setTestState] = React.useState();
    return(
        <div className='signup__shell'>
            <div className='signup_shell_inner'>
                <Grid container spacing={0}>
                    <Grid xs={12} item>
                        <Typography
                            variant='h7'
                            display='block'
                            gutterBottom
                            className='signupCaptions'
                        >
                            <a href="http://localhost:3000/" rel='noreferrer' target='_blank'>Lorem ipsum dolor sit amet</a>
                        </Typography>
                        <Typography
                            variant='h7'
                            display='block'
                            gutterBottom
                            className='signupCaptions'
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit
                        </Typography>
                        <Divider variant='middle' className='mainDivider'  />
                        <Button  
                            startIcon={<Login />}
                            variant='contained'
                            fullWidth
                            className='loginButton button'
                        >
                            Login
                        </Button >
                        <Typography
                            variant='h7'
                            display='block'
                            gutterBottom
                            className='signupCaptions'
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </Typography>
                        <Divider variant='middle' className='mainDivider'  />
                        <Button  
                            variant='outlined'
                            fullWidth
                            className='registerButton button'
                        >
                            Register
                        </Button >
                        <Typography
                            variant='h7'
                            display='block'
                            gutterBottom
                            className='signupCaptions'
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
};

export default SignupOptions;