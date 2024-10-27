import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from '../components/navigation/NavigationBar.jsx';

import Home from '../pages/Home.jsx';
import Referendas from '../pages/Referendas.jsx';


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route element={<NavigationBar />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/referendas" element={<Referendas />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default AppRouter;