import React from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import { Outlet } from 'react-router-dom';

const AppShell = ({ className, children }) => {
    const [testState, setTestState] = React.useState();

    return(
        <div className={className}>
            <Grid container className="full_height signup__shell__outer" alignItems="center" justifyContent="center">
                <Grid item md={12} xs={12} className="full_height">
                    <Outlet /> {/* Render child routes here */}
                    <div className='views__section'>
                        {children}
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default styled(AppShell)`
    text-align: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 0rem;
    overflow: auto;

    .wrapper {
        width: 100%;
        vertical-align: middle;
        overflow: hidden;
    }

    .full_height {
        height: 100% !important;
    }

    .views__section {
        text-align: center;
    }

    .signup__shell__outer {
        background-color: rgb(135 173 176 / 7%)!important;
    }

    .signin__shell__outer {
        background-color: rgb(135 173 176 / 26%)!important;
    }
`;
