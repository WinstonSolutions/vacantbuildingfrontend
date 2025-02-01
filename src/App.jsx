import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MapComponent from './components/map/MapComponent';
import Header from './components/Header';
import Footer from './components/Footer';
import Report from './components/Report';
import Admin from './components/Admin';

const App = () => {
    const mapComponentRef = useRef();

    return (
        <Router>
            <div className="flex flex-col h-screen overflow-hidden">
                <Header onLogoClick={() => mapComponentRef.current?.resetMapView()} />
                <main className="flex-1 min-h-0">
                    <Routes>
                        <Route path="/" element={<MapComponent ref={mapComponentRef} />} />
                        <Route path="/report" element={<Report />} />
                        <Route path="/admin" element={<Admin />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;