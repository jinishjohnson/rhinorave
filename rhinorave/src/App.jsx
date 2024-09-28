
import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar.jsx';
import Footer from './components/footer/footer.jsx';
import Home from './components/homepage/home.jsx';


const App = () => {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
     <Footer />
    </Router>
  );
};

export default App;
