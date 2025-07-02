
import React from 'react';
import { ArrowLeft, Mail, ExternalLink, Award, BookOpen, Users } from 'lucide-react';

const ProfessorSong = () => {
  const handleBack = () => {
    window.close();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#1e3a8a] text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={handleBack}
            className="flex items-center text-blue-100 hover:text-white mb-4"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back
          </button>
          <h1 className="text-4xl font-bold">Professor Houbing Herbert Song</h1>
          <p className="text-xl text-blue-100 mt-2">Chair, IEEE Trustworthy Internet of Things (TRUST-IoT) Working Group</p>
        </div>
      </header>

      {/* Biography Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Academic Position</h2>
            <p className="text-gray-700 leading-relaxed">
              Professor Houbing Herbert Song is a distinguished academic leader and researcher who currently chairs the IEEE Trustworthy Internet of Things (TRUST-IoT) Working Group. His work focuses on advancing trust, security, and reliability in IoT systems and technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Award className="text-[#1e3a8a] mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-900">Research Expertise</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Internet of Things (IoT)</li>
                <li>• Trustworthy Systems</li>
                <li>• Network Security</li>
                <li>• Artificial Intelligence</li>
                <li>• Cybersecurity</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Users className="text-[#3b82f6] mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-900">Leadership Roles</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Chair, IEEE TRUST-IoT Working Group</li>
                <li>• Academic Research Leader</li>
                <li>• Industry Collaborator</li>
                <li>• Conference Organizer</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Vision & Mission</h2>
            <p className="text-lg leading-relaxed">
              Professor Song's vision centers on creating a trustworthy IoT ecosystem where security, privacy, and reliability are fundamental design principles. Through his leadership of the IEEE TRUST-IoT Working Group, he works to establish standards and best practices that ensure IoT technologies can be deployed safely and effectively across various domains.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <BookOpen className="text-[#1e3a8a] mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Contributions to TAR-AI</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              As the chair of the IEEE TRUST-IoT Working Group, Professor Song provides strategic oversight and guidance to the TAR-AI Special Interest Group. His expertise in trustworthy systems and IoT security helps shape the group's approach to ensuring AI technologies are developed and deployed with appropriate ethical considerations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              His leadership ensures that the TAR-AI initiative aligns with broader IEEE standards and practices, contributing to the development of transparent, accountable, and responsible AI systems within the IoT ecosystem.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            For more information about Professor Song's work and the IEEE TRUST-IoT Working Group, visit{' '}
            <a 
              href="https://iot.ieee.org/working-groups.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#1e3a8a] hover:underline font-semibold"
            >
              IEEE IoT Working Groups
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProfessorSong;
