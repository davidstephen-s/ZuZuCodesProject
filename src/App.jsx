import React, { Suspense, lazy } from "react";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";

// Lazy load components
const Header = lazy(() => import("./components/Header"));
const MainContent = lazy(() => import("./components/MainContent"));

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gray-50">
        <Suspense
          fallback={
            <div className="spinner-container">
              <div className="spinner"></div>
            </div>
          }
        >
          <Header />
          <MainContent />
        </Suspense>
      </div>
    </HelmetProvider>
  );
}

export default App;
