import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-8">
          Contact Me
        </h2>
        
        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-4">📞 Phone: <a href="tel:+919150388374" className="text-blue-400 hover:text-blue-500">9150388374</a></p>
            <p className="text-lg mb-4">✉️ Email: <a href="mailto:rameshseerangan70@gmail.com" className="text-blue-400 hover:text-blue-500">rameshseerangan70@gmail.com</a></p>
            <p className="text-lg mb-4">🔗 LinkedIn: <a href="https://www.linkedin.com/in/ramesh2002/" className="text-blue-400 hover:text-blue-500">linkedin.com/in/ramesh2002/</a></p>
            <p className="text-lg mb-4">GitHub: <a href="https://github.com/Rameshseerangan" className="text-blue-400 hover:text-blue-500">github.com/Rameshseerangan</a></p>
          </div>

          {/* Resume Link */}
          <div>
            <p className="text-lg mb-4">You can view/download my resume here:</p>
            <a href="https://drive.google.com/file/d/1fgmu3GHJX2j5NocANiCL_IOibfxKQ-4e/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 flex items-center">
              <span className="inline-block mr-2">📄</span> My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
