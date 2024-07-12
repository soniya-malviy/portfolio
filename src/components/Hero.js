import React from 'react';
import "../index.css";

const Hero = () => {
    return (
        <section className="bg-gray-800 text-white text-center py-20">
            <div className="container mx-auto">
                <img 
                    src="https://eu-central.storage.cloudconvert.com/tasks/e88b9f45-b2a7-4711-ab34-6f5fa121c228/WhatsApp%20Image%202024-07-12%20at%2018.08.48.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=cloudconvert-production%2F20240712%2Ffra%2Fs3%2Faws4_request&X-Amz-Date=20240712T130309Z&X-Amz-Expires=86400&X-Amz-Signature=25bfe628010141bb4b7453b2f03392c123c9703af93d28d9c832b77ec5eda737&X-Amz-SignedHeaders=host&response-content-disposition=inline%3B%20filename%3D%22WhatsApp%20Image%202024-07-12%20at%2018.08.48.jpg%22&response-content-type=image%2Fjpeg&x-id=GetObject" 
                    alt="Profile" 
                    className="rounded-full mx-auto mb-4 w-40 h-40" // Adjusted size classes
                />
                <h2 className="text-4xl font-bold mb-2">Soniya Malviya</h2>
            </div>
        </section>
    );
};

export default Hero;
