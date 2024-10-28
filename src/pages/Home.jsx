import React from 'react'
import Background_1 from '../components/backgrounds/Background_1'
import SectionHeader from '../components/sections/SectionHeader'
import MainButton from '../components/buttons/MainButton'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const navigate = useNavigate()
    return (
        <Background_1>
            <SectionHeader>
                <h1>
                    VAR for Insurancing <br></br>Autonomous Vehicles
                </h1>
                <p>
                    Insuring Autonomous Vehicle with Trust <br></br>decide insurance claims, premiums and policies fairly
                </p>
                <div className="home-page-button-container">
                    <MainButton
                        header="Help"
                        onClick={() => navigate('/hgpt')}
                    />
                    <MainButton
                        header="Claim"
                        onClick={() => navigate('/hgpt')}
                    />
                </div>
            </SectionHeader>
        </Background_1>
    )
}

export default Home
