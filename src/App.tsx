import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './screens/Home';
import EmergencyAlert from './screens/EmergencyAlert';
import RescueMap from './screens/RescueMap';
import SafetyCheck from './screens/SafetyCheck';
import RescueGuide from './screens/RescueGuide';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/emergency-alert" element={<EmergencyAlert />} />
            <Route path="/rescue-map" element={<RescueMap />} />
            <Route path="/safety-check" element={<SafetyCheck />} />
            <Route path="/rescue-guide" element={<RescueGuide />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;