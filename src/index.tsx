import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Contact, Home, Work, BuddySystemCaseStudy, CanadaPostCaseStudy, RFECYCaseStudy, Error } from './pages';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/work' element={<Work />} />
            <Route path='/work/buddySystemCaseStudy' element={<BuddySystemCaseStudy />} />
            <Route path='/work/rfecyCaseStudy' element={<RFECYCaseStudy />} />
            <Route path='/work/canadaPostCaseStudy' element={<CanadaPostCaseStudy />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);