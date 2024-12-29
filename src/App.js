import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Adjust the path if needed
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import NotFound from './pages/NotFound';
import MainAdminPage from './pages/mainForAdmin/mainAdminPage'
import Card2 from './pages/mainForAdmin/cards/card2'
import MeasuresForOne from './pages/mainForAdmin/cards/sections/measuresForOne';
import Card1  from './pages/mainForAdmin/cards/card1';


function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/mainForAdmin/mainAdminPage" element={<MainAdminPage />} />
          <Route path="/mainForAdmin/cards/card2" element={<Card2/>} />
          <Route path="/mainForAdmin/cards/card1" element={<Card1/>} />

          <Route path="/mainForAdmin/cards/sections/measuresForOne" element={<MeasuresForOne/>} />

          
          {/* Add more routes as needed */}
          <Route path="*" element={<NotFound />} /> {/* Fallback for 404 */}

        </Routes>
      </Router>
    </I18nextProvider>
  );
}

export default App;