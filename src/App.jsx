import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import Sidebar from './components/Sidebar';
import GlobalTopBar from './components/GlobalTopBar';

function App() {
  return (
    <Router>
      <div className="flex">
        <GlobalTopBar />
        <Sidebar />
        <div className="w-full">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            {/* Add more routes here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;