import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppAdmin from './components/Admin/App/App';
import NoPage from './components/NoPage/NoPage';
import NavigationBar from './components/Navbar/NavBar';
import AppMarket from './components/Front/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavigationBar />}>
        <Route index element={<AppAdmin />} />
          <Route path="adminpanel" element={<AppAdmin />} />
          <Route path="frontmarket" element={<AppMarket />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
