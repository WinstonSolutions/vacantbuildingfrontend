import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MapComponent from './components/map/MapComponent';
import Header from './components/Header';
import Footer from './components/Footer';
import Report from './components/Report';
import Admin from './components/Admin';
import ProjectInfo from './components/ProjectInfo';

const App = () => {
    const mapComponentRef = useRef();

    return (
        <Router>
            <div>
                <Header onLogoClick={() => mapComponentRef.current?.resetMapView()} />
                <ProjectInfo />
                <main>
                    <Routes>
                        <Route path="/" element={
                            <div>
                                <div className="w-full h-[600px]">
                                    <MapComponent ref={mapComponentRef} />
                                </div>
                                
                            </div>
                        } />
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