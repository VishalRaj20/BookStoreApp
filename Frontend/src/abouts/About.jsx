import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 transform hover:scale-[1.01] transition-all duration-300">
        
        {/* Profile Section */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-pink-500 mb-4">
            <img
              src="public\portifolio.png"
              alt="Vishal Raj"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold text-pink-500 mb-2">🚀 About Me</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Hi, I'm <span className="font-semibold text-gray-800 dark:text-white">Vishal Raj</span> 👋
          </p>
        </div>

        {/* Bio */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            I'm a passionate software developer 💻 and electronics enthusiast ⚡.
            Currently pursuing my Bachelor's in <span className="font-semibold">Electronics and Communication Engineering</span> 📡 at NIT Andhra Pradesh,
            I have a deep interest in <span className="font-semibold">web development 🌐, embedded systems 🛠️, and competitive programming 🏆</span>.
          </p>

          <p>
            I love solving complex problems 🧠, creating microcontroller-based projects 🔌, and building impactful full-stack web applications 🏗️.
            My notable work includes an <span className="font-semibold">NLP-based travel recommendation system</span> ✈️ in collaboration with Microsoft,
            and an AI-powered healthcare chatbot 🤖.
          </p>

          <p>
            My expertise includes <span className="font-semibold">React ⚛️, C++ 🏹, SQL 🗄️, and Embedded Systems 🔩</span>.
            I’m driven by a mission to use technology 💡 to create real-world solutions.
          </p>
        </div>

        {/* Skills Tags */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {["React ⚛️", "C++ 🏹", "SQL 🗄️", "Embedded Systems 🔩", "AI/ML 🤖", "IoT 🌐"].map((skill, index) => (
            <span
              key={index}
              className="px-4 py-1 bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200 rounded-full text-sm shadow"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
