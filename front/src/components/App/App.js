import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppAdmin from '../Admin/App/App';
import AppMarket from '../Front/App/App';
import NoPage from '../NoPage/NoPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppMarket />} />
        <Route path="/admin" element={<AppAdmin />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
