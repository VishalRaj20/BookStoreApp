import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex items-center justify-center px-6">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl font-bold text-pink-500">🚀 About Me</h1>
        <p className="text-lg leading-relaxed">
          Hi, I'm <span className="font-semibold">Vishal Raj</span> 👋, a passionate software developer 💻 and electronics 
          enthusiast ⚡. Currently pursuing my Bachelor's in <span className="font-semibold">Electronics and Communication 
          Engineering</span> 📡 at NIT Andhra Pradesh, I have a deep interest in web development 🌐, embedded systems 🛠️, and 
          competitive programming 🏆.
        </p>
        <p className="text-lg leading-relaxed">
          I enjoy solving complex problems 🧠, working on microcontroller-based projects 🔌, and developing full-stack web 
          applications 🏗️. Some of my key projects include an <span className="font-semibold">NLP-based travel recommendation 
          system</span> ✈️ with Microsoft and a healthcare chatbot 🤖 powered by AI/ML.
        </p>
        <p className="text-lg leading-relaxed">
          My expertise spans across <span className="font-semibold">React ⚛️, C++ 🏹, SQL 🗄️, and Embedded Systems 🔩</span>. I 
          strive to build impactful solutions through technology 💡.
        </p>
      </div>
    </div>
  );
}

export default About;
