import React from 'react';
import  "../index.css"
const Header = () => {
    return (
        <header className="bg-gray-900 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">My Portfolio</h1>
                <nav>
                    <a href="#skills" className="mx-2">Skills</a>
                    <a href="#projects" className="mx-2">Projects</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
