import { useState } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import Header from './components/Header'
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <Router>

        <Header />

        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={AboutPage} />
          <Route path='/contact' Component={ContactPage} />
        </Routes>

        <Footer/>

      </Router>
    </div>
  )
}

export default App
