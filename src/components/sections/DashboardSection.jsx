import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 90vh;
    width: 90vw;
    padding: 10vh 5vw 0 5vw;
    text-align: center;
    overflow: hidden; 

    h1 {
        font-weight: 700;
        z-index: 2;
        text-align: left;
    }

    p {
        font-size: 22px;
        font-weight: 400;
        z-index: 2;
        margin-top: 10px;
    }   

    .home-page-button-container {
        position: relative;
        display: flex;
        gap: 20px;
        margin-top: 20px;
        width: 40vw;
    }
`;

const LineOne = styled.div`
    position: fixed;
    top: 0;
    left: 50%;
    height: 300vh;
    width: 4px;
    background-color: #484b6a;
    transform: rotate(45deg);

    z-index: 1;
`;

const LineTwo = styled.div`
    position: fixed;
    top: -50%;
    left: -30%;
    height: 300vh;
    width: 4px;
    background-color: #484b6a;
    transform: rotate(45deg);

    z-index: 1;
`;


const DashboardSection = ({ children }) => {
    return (
        <Container>
            <LineOne />
            <LineTwo />
            {children}
        </Container>
    )
}

export default DashboardSection