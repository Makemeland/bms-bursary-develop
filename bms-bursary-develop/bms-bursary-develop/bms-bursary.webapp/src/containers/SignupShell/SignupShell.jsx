import React from 'react';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Outlet } from 'react-router-dom';
import SignupHeader from './SignupHeader';


const SignupShell = (props) => {
    const {className, children} = props;
    const [testState, setTestState] = React.useState();

    return(
        <div className={className}>
            <Paper classes={{root: 'paper-root root-paper-root'}} fullWidth>
                <Grid container alignItems="center" justifyContent="center" className="signup__shell__outer">
                    <Grid item md={8} xs={12}>
                            <div className='wrapper'>
                                <SignupHeader
                                    props={props}
                                />
                                <Outlet /> {/* Render child routes here */}
                                <div className='views__section'>
                                    {children}
                                </div>
                            </div>
                                
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
};

export default styled(SignupShell)`
    text-align: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 0rem;
    overflow: auto;
    
    .paper-root {
        overflow: hidden;
        margin-top: 85px;
        top: 0; 
        left: 0; 
        right: 0;
        bottom: 0;
        box-shadow: none;
        width: 100%;
    }

    .wrapper {
        width: 100%;
        vertical-align: middle;
        overflow: hidden;
    }

    .views__section {
        text-align: center;
    }

    .signup__shell__inner {
        padding: 1.1rem;
    }

    .signupCaptions {
        margin-top: 0.75rem !important;
    }

    .mainDivider {
        margin: 1.5rem 16px !important;
    }

    .loginButton {
        background-color: ${(props) => props.palette.primary.darkGrey}!important;
        border: 1px solid rgb(135 173 176 / 22%);

    }
    
    .signup__box__container {
        background-color: rgb(135 173 176 / 7%)!important;
        border-radius: 5px !important;
        border: 1px solid rgb(135 173 176 / 22%);
    }

    button {
        text-transform: capitalize !important
    }

    .MuiPaper-root {
        box-shadow: rgba(0, 0, 0, 0.02) 0px 2px 10px 10px !important
    }

    .signup__shell__outer {
        background-color: rgb(135 173 176 / 7%) !important;
    }
`;