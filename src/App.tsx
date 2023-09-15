import React from 'react';
import './App.scss';
import {BrowserRouter} from "react-router-dom";
import {Router} from "./pages";
import {HeaderSection} from "./sections/HeaderSection/HeaderSection";
import {FooterSection} from "./sections/FooterSection/FooterSection";

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
        </BrowserRouter>
    );
}

export default App;
