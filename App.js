
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import DietPlanGenerator from './DietPlanGenerator';
import BlogPage from './HealthBlogPage';
import DownloadablesPage from './DownloadablesPage';
import HealthTracker from './HealthTrackerPage';
import AskDoctor from './AskDoctorPage';
import Navbar from './NavigationBar';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/diet-plan" element={<DietPlanGenerator />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/downloads" element={<DownloadablesPage />} />
        <Route path="/tracker" element={<HealthTracker />} />
        <Route path="/ask-doctor" element={<AskDoctor />} />
      </Routes>
    </Router>
  );
}
