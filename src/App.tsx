import React from 'react';
import './App.scss';
import {BrowserRouter} from "react-router-dom";
import {Router} from "./pages";
import {HeaderSection} from "./sections/HeaderSection/HeaderSection";
import {FooterSection} from "./sections/FooterSection/FooterSection";
import {ScrollToTop} from "./shared/ui/ScrollToTop/ScrollToTop";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <HeaderSection/>
                <div className="page">
                    <Router/>
                </div>
                <FooterSection/>
            </div>
            <ScrollToTop/>
        </BrowserRouter>
    );
}

export default App;
