import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactUs from './Pages/ContactUs';
import './App.css';
import React from 'react';
import AboutUs from './Pages/AboutUs';
import Terms from './Pages/Terms';
import TestApi from './Pages/TestApi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// ایجاد یک instance از QueryClient
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/testapi" element={<TestApi />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
