import React from 'react'
import Background_1 from '../components/backgrounds/Background_1'
import SectionHeader from '../components/sections/SectionHeader'
import MainButton from '../components/buttons/MainButton'
import ReferendaCard from '../components/cards/ReferendaCard'

const referendaData = [
    {
        RefNumber: 1,
        RefTitle: "Determining Fault in Minor Collision",
        RefDescription: "Vote to decide fault in a minor collision between an autonomous vehicle and a human-driven car. Was the autonomous system or the human driver at fault?",
        RefStartDate: "2024-05-01",
        RefEndDate: "2024-05-10",
        RefStatus: "Active",
        RefImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT80dIJxdhidUJNtvszaHvbAVGvBLaKTA8l2w&s",
    },
    {
        RefNumber: 2,
        RefTitle: "Fault in Speeding Incident",
        RefDescription: "An autonomous vehicle was speeding when it collided with another vehicle. Vote to determine if the autonomous system or the other party was at fault.",
        RefStartDate: "2024-05-15",
        RefEndDate: "2024-06-15",
        RefStatus: "Active",
        RefImage: "https://knowledge.wharton.upenn.edu/wp-content/uploads/2018/04/driverless-car-crash.jpg",
    },
    {
        RefNumber: 3,
        RefTitle: "Pedestrian Accident Responsibility",
        RefDescription: "An autonomous vehicle struck a pedestrian. Vote to decide if the fault lies with the pedestrian or the autonomous vehicle's programming.",
        RefStartDate: "2024-07-01",
        RefEndDate: "2024-07-10",
        RefStatus: "Inactive",
        RefImage: "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2023/03/shutterstock_1478569319.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5",
    },
];


const Home = () => {
    return (
        <Background_1>
            <SectionHeader>
                <h1>
                    VAR for Insurancing Autonomous Vehicles
                </h1>
                <p>
                    Vote and Review Autonomous Vehicle Cases and <br></br>decide insurance claims, premiums and policies
                </p>
                <div className="home-page-button-container">
                    <MainButton
                        header="Submit"
                        onClick={() => console.log('Vote')}
                    />
                    <MainButton
                        header="Vote"
                        onClick={() => console.log('Review')}
                    />
                </div>
                <div className="news-container">
                    <h2>Hot Referendas</h2>
                    <p>
                        Top 10 Referendas that are currently being voted on
                    </p>
                    <div className='ref-container'>
                        {referendaData.map((referendum) => (
                            <ReferendaCard
                                key={referendum.RefNumber}
                                RefNumber={referendum.RefNumber}
                                RefTitle={referendum.RefTitle}
                                RefDescription={referendum.RefDescription}
                                RefStartDate={referendum.RefStartDate}
                                RefEndDate={referendum.RefEndDate}
                                RefStatus={referendum.RefStatus}
                                RefImage={referendum.RefImage}
                            />
                        ))}
                    </div>
                </div>
            </SectionHeader>
        </Background_1>
    )
}

export default Home
