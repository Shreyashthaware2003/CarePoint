import { useState } from 'react'
// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import GeneralPhysician from './page/General physician';
import Gynecologist from './page/Gynecologist';
import Dermatologist from './page/Dermatologist';
import Pediatricians from './page/Pediatricians';
import Neurologist from './page/Neurologist';
import Gastroenterologist from './page/Gastroenterologist';
import Account from './pages/Account';
import AdminPanel from './pages/AdminPanel';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/general physician" element={<GeneralPhysician />} />
          <Route path="/gynecologist" element={<Gynecologist />} />
          <Route path="/dermatologist" element={<Dermatologist />} />
          <Route path="/pediatricians" element={<Pediatricians />} />
          <Route path="/neurologist" element={<Neurologist />} />
          <Route path="/gastroenterologist" element={<Gastroenterologist />} />
          <Route path="/account" element={<Account />} />
          <Route path="/adminpanel" element={<AdminPanel />} />


        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App
