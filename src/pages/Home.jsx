import React from 'react'
import Background1 from '../components/backgrounds/Background1'
import SectionHeader from '../components/sections/SectionHeader'
import DashboardSection from '../components/sections/DashboardSection'
import MainButton from '../components/buttons/MainButton'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../context/AuthContext'

import { get } from 'aws-amplify/api'

const Home = () => {
    const { user } = useAuth()
    const navigate = useNavigate()

    const getAccidents = async () => {
        try {
            const response = await get({
                apiName: 'pandaAccidentRecordsApi',
                path: '/accidents'
            })
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Background1>
            {user && user['custom:user_role'] === 'insurer' &&
                <DashboardSection>
                    <h1>
                        Dashboard
                    </h1>
                    <p>
                        Accidents Today: 0
                    </p>
                </DashboardSection>
            }
            {!user &&
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
            }
        </Background1>
    )
}

export default Home
