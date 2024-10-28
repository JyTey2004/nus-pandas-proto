import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from '../components/navigation/NavigationBar.jsx';

import Home from '../pages/Home.jsx';
import CGPT from '../pages/CGPT.jsx';
import HGPT from '../pages/HGPT.jsx';
import InsurerDashboard from '../pages/InsurerDashboard.jsx';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route element={<NavigationBar />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/C-GPT" element={<CGPT />} />
                    <Route path="/H-GPT" element={<HGPT />} />
                    <Route path="/insurer" element={<InsurerDashboard />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default AppRouter;