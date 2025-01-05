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
import Card3  from './pages/mainForAdmin/cards/card3';
import MainForClient  from './pages/client/mainForClient';
import AboutUs from './pages/client/headerSections/aboutUs';
import ContactUs from './pages/client/headerSections/contactUs';
import ListOfItems from './pages/client/headerSections/listOfItems'
import DetailsScreen from './pages/client/detailsScreen'

import Card4  from './pages/mainForAdmin/cards/card4';
import AboutUsEdit from './pages/mainForAdmin/cards/card4Sections/aboutUsEdit';
import ContactUsEdit from './pages/mainForAdmin/cards/card4Sections/contactUsEdit'
import ListOfItesEdit from './pages/mainForAdmin/cards/card4Sections/listOfItesEdit'
import DetailsScreenEdit from './pages/mainForAdmin/cards/card4Sections/detailsScreenEdit'

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
          <Route path="/mainForAdmin/cards/card3" element={<Card3/>} />
          <Route path="/mainForAdmin/cards/card4" element={<Card4/>} />

          <Route path="/mainForAdmin/cards/sections/measuresForOne" element={<MeasuresForOne/>} />
          <Route path="/client/mainForClient" element={<MainForClient/>} />
          <Route path="/client/headerSections/aboutUs" element={<AboutUs/>} />
          <Route path="/client/headerSections/contactUs" element={<ContactUs/>} />
          <Route path="/client/headerSections/listOfItems" element={<ListOfItems/>} />
          <Route path="/client/detailsScreen" element={<DetailsScreen/>} />

          <Route path="/mainForAdmin/cards/card4Sections/aboutUsEdit" element={<AboutUsEdit/>} />
          <Route path="/mainForAdmin/cards/card4Sections/contactUsEdit" element={<ContactUsEdit/>} />
          <Route path="/mainForAdmin/cards/card4Sections/listOfItesEdit" element={<ListOfItesEdit/>} />
          <Route path="/mainForAdmin/cards/card4Sections/detailsScreenEdit" element={<DetailsScreenEdit/>} />

          

          
          {/* Add more routes as needed */}
          <Route path="*" element={<NotFound />} /> {/* Fallback for 404 */}

        </Routes>
      </Router>
    </I18nextProvider>
  );
}

export default App;