import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"))

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}
root.render(<Page />)
reportWebVitals();