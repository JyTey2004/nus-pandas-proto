import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 90vw;
    padding: 0 5vw 0 5vw;
    text-align: center;
    overflow: hidden; 

    h1 {
        font-weight: 700;
        z-index: 2;
    }

    p {
        font-size: 22px;
        font-weight: 400;
        z-index: 2;
    }   

    .home-page-button-container {
        position: relative;
        display: flex;
        gap: 20px;
        margin-top: 20px;
        width: 40vw;
    }

    // .news-container {
    //     display: flex;
    //     flex-direction: column;
    //     width: 100%;
    //     margin-top: 20vh;

    //     h2 {
    //         font-size: 24px;
    //         font-weight: 600;
    //         margin: 0;
    //     }

    //     p {
    //         font-size: 18px;
    //         font-weight: 400;
    //         margin: 0;
    //     }

    //     .ref-container {
    //         display: flex;
    //         flex-direction: column;
    //         justify-content: center;
    //         align-items: center;
    //         margin-top: 30px;
    //         gap: 20px;
    //     }

    // }
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


const SectionHeader = ({ children }) => {
    return (
        <Container>
            <LineOne />
            <LineTwo />
            {children}
        </Container>
    )
}

export default SectionHeader
