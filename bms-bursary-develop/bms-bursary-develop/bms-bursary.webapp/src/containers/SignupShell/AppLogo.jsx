import Logo from "assets/logos/Transnet_logo_white_sml.png";
import styled from 'styled-components';
import React from 'react';

const AppLogo = ({className, width}) => {
    const [testState, setTestState] = React.useState();

    return(
        <div className={className}>
            <div className="navbar__curve">
                <img src={Logo} alt="LOGO" width={width !==undefined ? width : "89px"} />
            </div>
        </div>
    )
};

export default styled(AppLogo)`
    position: relative;
    padding 1rem;
    height: 85px;
    text-align: left;
`;