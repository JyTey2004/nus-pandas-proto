import React from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom';

const Container = styled.div`
    position: fixed;
    top: 20px;
    left: 5vw;
    width: auto;
    height: auto;
    border-radius: 30px;
    background-color: #484b6a;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 20px;
    gap: 50px;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    margin: 0;
    font-weight: 600;
`;

const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    font-weight: 400;
    font-size: 18px;
    gap: 20px;

    a {
        color: white;
        text-decoration: none;
        margin: 0 10px;
    }

    a:hover {
        color: #f1f1f1;
    }
`;


const NavigationBar = () => {
    return (
        <div>
            <Container>
                <LogoContainer>
                    VARinsure
                </LogoContainer>
                <LinksContainer>
                    <a href="/referendas">Referendas</a>
                    <a href="/records">Records</a>
                    <a href="/insurers">Insurers</a>
                </LinksContainer>
            </Container>
            <Outlet />
        </div>
    )
}

export default NavigationBar
