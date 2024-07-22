import React from 'react';
// import Sidebar from './components/side-bar-component/Sidebar';
import './App.css'; // Import App CSS for overall styling
import LoginComponent from './components/login-component/login-component';
import Header from './components/header-component/header';

const App = () => {
  return (
    <div className="app">
    {/* <Header /> */}
    <div>
      {/* <Sidebar /> */}
      <div className="login-section">
        <LoginComponent />
      </div>
    </div>
  </div>
  );
};

export default App;