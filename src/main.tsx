import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import Home from './pages/Home.tsx';
import './index.css';
import ProjectTransign from './pages/ProjectTransign.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route index element={<Home />} />
        <Route path="projects">
          <Route path="transign" element={<ProjectTransign />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
