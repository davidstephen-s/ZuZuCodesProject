import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <MainContent />
      </div>
    </HelmetProvider>
  );
}

export default App;