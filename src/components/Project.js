import React from 'react';
import  "../index.css"
const Projects = () => {
    const projectList = [
        {
            title: "Bewakoof clone",
            description: "Simple bewakoof E-commerce website clone where products are filtered based on seller tag.",
            image: "https://eu-central.storage.cloudconvert.com/tasks/855179a7-64b2-4c2c-a061-101bf3c6ba2f/Screenshot%202024-07-12%20at%206.20.10%20PM.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=cloudconvert-production%2F20240712%2Ffra%2Fs3%2Faws4_request&X-Amz-Date=20240712T131025Z&X-Amz-Expires=86400&X-Amz-Signature=09c1ed86a5ef989e950aad31059ca7bb6d958921243d111d5a8f49b81c111d2a&X-Amz-SignedHeaders=host&response-content-disposition=inline%3B%20filename%3D%22Screenshot%202024-07-12%20at%206.20.10%20PM.jpg%22&response-content-type=image%2Fjpeg&x-id=GetObject"
        },
        {
            title: "Flipcart clone",
            description: "This project has filter functionality for men and women products and many more.",
            image: "https://eu-central.storage.cloudconvert.com/tasks/ce7d9700-309e-4b4c-8401-853425c83dcd/Image%2012-07-24%20at%206.23%20PM.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=cloudconvert-production%2F20240712%2Ffra%2Fs3%2Faws4_request&X-Amz-Date=20240712T131129Z&X-Amz-Expires=86400&X-Amz-Signature=278603dc0afb52af9271de9598ce97ab8c2fea866ad81c48fff0ca6d99c528a6&X-Amz-SignedHeaders=host&response-content-disposition=inline%3B%20filename%3D%22Image%2012-07-24%20at%206.23%20PM.jpg%22&response-content-type=image%2Fjpeg&x-id=GetObject"
        },
        {
            title: "Countries Website",
            description: "In this project user can filter country based in region and see basic details about that country and they can add to their favourites and can remove.",
            image: "https://eu-central.storage.cloudconvert.com/tasks/6c6befb8-901d-49f7-8930-7accfc06c7bb/Image%2012-07-24%20at%206.21%20PM.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=cloudconvert-production%2F20240712%2Ffra%2Fs3%2Faws4_request&X-Amz-Date=20240712T131024Z&X-Amz-Expires=86400&X-Amz-Signature=cb443115529e6bda6a1c6c5b8752dc3305790f78b54e1b90bd2bdab9a6bc0225&X-Amz-SignedHeaders=host&response-content-disposition=inline%3B%20filename%3D%22Image%2012-07-24%20at%206.21%20PM.jpg%22&response-content-type=image%2Fjpeg&x-id=GetObject"
        }
    ];

    return (
        <section id="projects" className="bg-white text-gray-900 py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projectList.map((project, index) => (
                        <div key={index} className="project-item border rounded-lg p-4">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 rounded" />
                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
