import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Button  from '@mui/material/Button';
import Login from '@mui/icons-material/Login';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import Autocomplete from '@mui/material/Autocomplete';

const provinces = [
    {
        value: 'Cape Town',
    },
    {
        value: 'Eastern Cape',
    },
    {
        value: 'Free State',
    },
    {
        value: 'Gauteng',
    },
    {
        value: 'KwaZulu Natal',
    },
    {
        value: 'Limpopo',
    },
    {
        value: 'Mpumalanga',
    },
    {
        value: 'North West',
    },
    {
        value: 'Northern Cape',
    },
    {
        value: 'Western Cape',
    }
];

const postalCodes = [
    {
        label: '0157',
    },
    {
        label: '0163',
    },
    {
        label: '1550',
    }
];

const suburbList = [
    {
        label: 'Eldoraigne',
    },
    {
        label: 'Lyttleton',
    },
    {
        label: 'Irene EXT 9',
    }
];


const Register = () => {
    const [testState, setTestState] = React.useState();

    return(
        <div className='signup__shell'>
            <div className='signup__shell__inner'>
                <Grid container alignItems="center" justifyContent="center" sx={{p: 3}} >
                    <Typography component="div">
                        <Box sx={{ fontWeight: 'bold', fontSize: '22px' }}>WELCOME TO BMS ONLINE APPLICATION.</Box>
                        <Box sx={{ fontSize: '14px' }}>Embark on an Empowering Journey with BMS Today: <br />Unlocking Limitless Opportunities Through Effortless and Seamless Registration.</Box>
                    </Typography>
                </Grid>

                <Paper elevation={1} sx={{p: 3}} >
                    <Grid container alignItems="center" className="signup__box__container" md={12} sx={{p: 2}} justifyContent="center">
                        <FormLabel component="legend" sx={{m: '0 0 10px 0'}}>Personal Details</FormLabel>
                        <FormControl fullWidth>
                            <FormGroup>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField required fullWidth color='secondary'  label="First Name" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField required fullWidth color='secondary'  label="Last Name" variant="outlined" />
                                    </Grid>
                                </Grid>
                            </FormGroup>
                        </FormControl>

                        <FormControl fullWidth sx={{ m: '15px 0 0 0' }}>
                            <FormGroup>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField required color='secondary' type='number' fullWidth label="South African ID" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            color='secondary'
                                            fullWidth
                                            select
                                            label="Title"
                                        >
                                            <MenuItem>
                                                Mr
                                            </MenuItem>
                                            <MenuItem>
                                                Ms
                                            </MenuItem>
                                            <MenuItem>
                                                Mrs
                                            </MenuItem>
                                        </TextField>
                                    </Grid>
                                </Grid>
                            </FormGroup>
                        </FormControl>

                        <FormControl fullWidth sx={{ m: '15px 0 0 0' }}>
                            <FormGroup>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField required color='secondary' type='number' fullWidth label="Email Address" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField color='secondary' type='number' fullWidth label="Cellphone Number" variant="outlined" />
                                    </Grid>
                                </Grid>
                            </FormGroup>
                        </FormControl>
                    </Grid>
                    <Grid container alignItems="center" className="signup__box__container" md={12} sx={{p: 2, m: '30px 0 0 0'}} justifyContent="center">
                        <FormLabel component="legend" sx={{m: '0 0 10px 0'}} >Physical Address</FormLabel>
                        <FormControl fullWidth>
                            <FormGroup>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        {/* <TextField required fullWidth color='secondary'  label="Province" variant="outlined" /> */}
                                        <TextField
                                            id="outlined-select-currency"
                                            fullWidth
                                            select
                                            label="Province/State"
                                            color='secondary' 
                                        >
                                            {provinces.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.value}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField required fullWidth color='secondary'  label="Address Line 1" variant="outlined" />
                                    </Grid>
                                </Grid>
                            </FormGroup>
                        </FormControl>

                        <FormControl fullWidth sx={{ m: '15px 0 0 0' }}>
                            <FormGroup>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={3}>
                                        <Autocomplete
                                            disablePortal
                                            required
                                            options={postalCodes}
                                            renderInput={(params) => <TextField color='secondary' {...params} label="Postal Code" />}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <Autocomplete
                                            disablePortal
                                            required
                                            options={suburbList}
                                            renderInput={(params) => <TextField color='secondary' {...params} label="Suburb" />}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField fullWidth color='secondary' label="Address Line 2" variant="outlined" />
                                    </Grid>
                                </Grid>
                            </FormGroup>
                        </FormControl>
                    </Grid>
                    <Grid container alignItems="center" md={12} sx={{ m: '20px 0 0 0'}}>
                        <FormControl fullWidth>
                            <FormGroup>
                                <Grid container spacing={2} justifyContent="flex-end">
                                    <Grid item xs={12} sm={2}>
                                        <Button  
                                            startIcon={<Login />}
                                            variant='contained'
                                            fullWidth
                                            className='loginButton button'
                                        >
                                        </Button >
                                    </Grid>
                                    <Grid item xs={12} sm={2}>
                                        <Button  
                                            variant='outlined'
                                            fullWidth
                                            className='registerButton button'
                                        >
                                            Cancel
                                        </Button >
                                    </Grid>
                                </Grid>
                            </FormGroup>
                        </FormControl>
                    </Grid>
                </Paper>
            </div>
        </div>
    );

}
export default Register;