import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 90vw;
    padding: 20vh 5vw 0 5vw;
    text-align: center;
    overflow: hidden;

    p {
        font-size: 22px;
        font-weight: 400;
    }   

    .home-page-button-container {
        position: relative;
        display: flex;
        gap: 20px;
        margin-top: 20px;
        width: 40vw;
    }

    .news-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 20vh;

        h2 {
            font-size: 24px;
            font-weight: 600;
            margin: 0;
        }

        p {
            font-size: 18px;
            font-weight: 400;
            margin: 0;
        }

        .ref-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 30px;
            gap: 20px;
        }

    }
`;

const SectionHeader = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default SectionHeader
