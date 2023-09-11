import React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AppLogo from 'containers/SignupShell/AppLogo';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Button  from '@mui/material/Button';
import Divider  from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Link  from '@mui/material/Link';

const Signin = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    return (
        <Grid container className="full_height">
            <Grid md={7} sx={{display: { xs: 'none', sm: 'block' }}} container className="signin__shell__outer">   {/* hide this section on mobile devices  */}
                <Grid md={12} fullWidth>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, margin: "40px" }}
                    >
                        <AppLogo width="188px" />
                    </Typography>
                </Grid>
                <Grid md={12} fullWidth>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <img src="https://www.transparentpng.com/download/student/ECcMj8-student-png.png" width="550px" alt="" />
                    </Typography>
                </Grid>
            </Grid>
            <Grid container md={5}  alignItems="center" justifyContent="center" style={{ height: "max-content" }} sx={{p: 3}} >
                <Grid fullWidth container sx={{m: "100px 30px 0 30px"}}>
                    <Typography component="div">
                        <Box sx={{ fontWeight: 'bold', fontSize: '22px' }}>BMS ONLINE APPLICATION.</Box>
                    </Typography>
                    
                    <Grid container alignItems="center" md={12} sx={{ m: '20px 0 20px 0'}}>
                        <FormControl fullWidth>
                            <FormGroup>
                                <Grid container spacing={2} justifyContent="flex-start">
                                    <Grid item xs={6} sm={6}>
                                        <Button  
                                            variant='contained'
                                            fullWidth
                                            className='loginButton button'
                                            style={{ textTransform: "none" }}
                                        >
                                            Transnet Employee
                                        </Button >
                                    </Grid>
                                </Grid>
                            </FormGroup>
                        </FormControl>
                    </Grid>
                    
                    <Grid container alignItems="center" md={10} sx={{ m: '0 0 20px 0'}}>
                        <Divider sx={{ m: '20px 0 20px 0'}} style={{ width: "100%" }} />
                    </Grid>
                    
                    <FormControl fullWidth>
                        <Typography component="div">
                            <Box sx={{ fontSize: '14px', marginBottom: "10px", textAlign: "left" }}>Unlock Your Future: BMS Online.</Box>
                        </Typography>
                        <FormGroup>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={10}>
                                    <TextField required fullWidth color='secondary' label="Username/Email" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} sm={10}>
                                    <FormControl fullWidth variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-password" color='secondary'>Password</InputLabel>
                                        <OutlinedInput 
                                            required 
                                            type={showPassword ? 'text' : 'password'}
                                            fullWidth 
                                            color='secondary' 
                                            variant="outlined"
                                            endAdornment={
                                                <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                                </InputAdornment>
                                            }
                                            label="Password" 
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </FormGroup>
                    </FormControl>
                    
                    <Grid container alignItems="center" md={12} sx={{ m: '20px 0 0 0'}}>
                        <FormControl fullWidth>
                            <FormGroup>
                                <Grid container fullWidth spacing={2} md={12} justifyContent="flex-start">
                                    <Grid item xs={5} sm={5}>
                                        <Button  
                                            variant='contained'
                                            fullWidth
                                            className='loginButton button'
                                            style={{ textTransform: "none" }}
                                        >
                                            Sign In
                                        </Button >
                                    </Grid>
                                    <Grid item xs={7} sm={7} justifyContent="flex-end">
                                        <Link href="#">
                                            <Typography variant="h8" style={{ fontSize: "12px" }}>Forgot your password?</Typography>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </FormGroup>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Signin


