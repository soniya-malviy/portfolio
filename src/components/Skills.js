import React from 'react';
import  "../index.css"
const Skills = () => {
    return (
        <section id="skills" className="bg-gray-100 text-gray-900 py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <div className="skill-item">
                        <i className="fab fa-html5 text-5xl"></i>
                        <p>HTML</p>
                    </div>
                    <div className="skill-item">
                        <i className="fab fa-css3-alt text-5xl"></i>
                        <p>CSS</p>
                    </div>
                    <div className="skill-item">
                        <i className="fab fa-js text-5xl"></i>
                        <p>JavaScript</p>
                    </div>
                    <div className="skill-item">
                        <i className="fab fa-react text-5xl"></i>
                        <p>React.js</p>
                    </div>
                    <div className="skill-item">
                        <i className="fab fa-python text-5xl"></i>
                        <p>Python</p>
                    </div>
                    
                    <div className="skill-item text-center">
                        <i className="fab fa-github text-5xl"></i>
                        <p>GitHub</p>
                    </div>
                </div>
                </div>
            
        </section>
    );
};

export default Skills;
