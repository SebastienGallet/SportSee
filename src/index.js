import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/header/header.jsx';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import VerticalNav from './components/verticalNav/verticalNav.jsx';
import Users from './pages/users.jsx';
import UserDashboard from './pages/userDashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <main>
      <VerticalNav />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users/:userId" element={<UserDashboard />} />
      </Routes>
    </main>
  </BrowserRouter>
);

reportWebVitals();
