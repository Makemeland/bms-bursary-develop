import EditNoteOutlined from "@mui/icons-material/EditNoteOutlined";
import Login from "@mui/icons-material/Login";
import PersonAddAlt1Outlined from "@mui/icons-material/PersonAddAlt1Outlined";
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from "react";

            const LandingPage = () => {
                const [showPassword, setShowPassword] = React.useState(false);

                

                return (
                    <Grid container className="full_height">
                        <Grid md={7} sx={{display: { xs: 'none', sm: 'block' }}} container className="signin__shell__outer">   {/* hide this section on mobile devices  */}
                            <Grid md={12} fullWidth>
                                <Typography
                                    variant="h6"
                                    component="div"
                                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, margin: "40px" }}
                                >
                                    
                                </Typography>
                            </Grid>
                            
                            <Grid md={12} fullWidth>
                                <Typography
                                    variant="h6"
                                    component="div"
                                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                                >
                            <img src="https://www.transparentpng.com/download/student/ECcMj8-student-png.png" width="600px" alt="" />
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container md={5}  alignItems="center" justifyContent="center" style={{ height: "max-content" }} sx={{p: 3}} >
                            <Grid fullWidth container sx={{m: "100px 30px 0 30px"}}>
                                
                                <Grid container alignItems="center" md={12} sx={{ m: '20px 0 20px 0'}}>
                                    <FormControl fullWidth>
                                        <FormGroup>
                                            <Grid container spacing={2} justifyContent="flex-start">
                                            <Grid
                                xs={4}
                                item
                                container
                                direction="column"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                            >
                                <Grid className="buttons">
                                    <Button
                                        sx={{
                                            margin: 1,
                                            marginTop: 0,
                                            background: "#95c11f",
                                            borderRadius: 0,
                                            fontSize: 16,
                                            width: 200,
                                            height: 60,
                                            marginLeft: 25,
                                        }}
                                        startIcon={<EditNoteOutlined />}
                                        variant="contained"
                                        className="signinButton button"
                                    >
                                        Apply for Bursary
                                    </Button>
                                </Grid>
                                <Grid className="buttons">
                                    <Button
                                        sx={{
                                            margin: 1,
                                            background: "grey",
                                            borderRadius: 0,
                                            marginBottom: 4,
                                            marginTop: 4,
                                            fontSize: 16,
                                            width: 200,
                                            height: 60,
                                            marginLeft: 25,
                                        }}
                                        startIcon={<PersonAddAlt1Outlined />}
                                        variant="contained"
                                        className="signinButton button"
                                    >
                                        My Applications
                                    </Button>
                                </Grid>
                                <Grid className="buttons">
                                    <Button
                                        sx={{
                                            margin: 1,
                                            marginBottom: 17,
                                            background: "grey",
                                            borderRadius: 0,
                                            fontSize: 16,
                                            width: 200,
                                            height: 60,
                                            marginLeft: 25,
                                        }}
                                        startIcon={<Login />}
                                        variant="contained"
                                        className="signinButton button"
                                    >
                                        My Signin details
                                    </Button>
                                </Grid>
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

            export default LandingPage;