import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { HashRouter, Routes, Route } from 'react-router-dom';
import { About, Home, Work, BuddySystemCaseStudy, CanadaPostCaseStudy, RFECYCaseStudy, Error } from './pages';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/work' element={<Work />} />
            <Route path='/work/buddySystemCaseStudy' element={<BuddySystemCaseStudy />} />
            <Route path='/work/rfecyCaseStudy' element={<RFECYCaseStudy />} />
            <Route path='/work/canadaPostCaseStudy' element={<CanadaPostCaseStudy />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </HashRouter>
  </React.StrictMode>
);