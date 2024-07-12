import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Project';
import Footer from './components/Footer';
import  "./index.css"
const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Skills />
            <Projects />
            <Footer />
        </div>
    );
};

export default App;

