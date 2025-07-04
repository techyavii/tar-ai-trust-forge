
import React from 'react';
import { ArrowLeft, Mail, ExternalLink, Award, BookOpen, Users, GraduationCap, Trophy, Star, Building, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProfessorSong = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
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
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <img 
              src="/lovable-uploads/295c26de-fdc4-4a5b-9bb3-e39e120f0191.png" 
              alt="Professor Houbing Herbert Song"
              className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-white/20"
            />
            <div>
              <h1 className="text-4xl font-bold">Professor Houbing Herbert Song</h1>
              <p className="text-xl text-blue-100 mt-2">IEEE Fellow | ACM Distinguished Member</p>
              <p className="text-lg text-blue-200 mt-1">Founding Chair, IEEE Trustworthy Internet of Things (TRUST-IoT) Working Group</p>
              <div className="flex flex-wrap gap-4 mt-3 text-sm">
                <span className="bg-blue-600/50 px-3 py-1 rounded-full">h.song@ieee.org</span>
                <span className="bg-blue-600/50 px-3 py-1 rounded-full">songh@umbc.edu</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Current Position */}
        <div className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white p-8 rounded-lg mb-8">
          <div className="flex items-center mb-4">
            <GraduationCap className="mr-3" size={28} />
            <h2 className="text-2xl font-bold">Current Position</h2>
          </div>
          <div className="text-lg leading-relaxed">
            <p className="mb-2"><strong>Professor</strong> - Department of Information Systems</p>
            <p className="mb-2"><strong>University of Maryland, Baltimore County (UMBC)</strong></p>
            <p className="mb-4">Baltimore, MD 21250 USA</p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div>
                <h4 className="font-semibold mb-2">Leadership Roles:</h4>
                <ul className="space-y-1 text-blue-100">
                  <li>• Founding Director, NSF Center for Aviation Big Data Analytics (Planning)</li>
                  <li>• Associate Director for Leadership, DOT Transportation Cybersecurity Center</li>
                  <li>• Director, Security and Optimization for Networked Globe Laboratory (SONG Lab)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">IEEE Leadership:</h4>
                <ul className="space-y-1 text-blue-100">
                  <li>• Founding Chair, TRUST-IoT Working Group (2024-present)</li>
                  <li>• Co-Editor-in-Chief, IEEE Transactions on Industrial Informatics (2025-present)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Recognition */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="text-[#1e3a8a] mr-3" size={24} />
              <h3 className="text-xl font-bold text-gray-900">Education & Recognition</h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <p><strong>Ph.D. in Electrical Engineering</strong></p>
              <p className="text-sm text-gray-600">University of Virginia, Charlottesville, VA (August 2012)</p>
              <div className="pt-3 border-t">
                <p className="font-semibold text-[#1e3a8a] mb-2">Professional Memberships:</p>
                <ul className="space-y-1 text-sm">
                  <li>• IEEE Fellow (2023)</li>
                  <li>• ACM Distinguished Member</li>
                  <li>• Full Member of Sigma Xi</li>
                  <li>• Highly Cited Researcher (Web of Science, 2021-present)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Trophy className="text-[#3b82f6] mr-3" size={24} />
              <h3 className="text-xl font-bold text-gray-900">Distinguished Speaker & Lecturer</h3>
            </div>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• ACM Distinguished Speaker (2020-present)</li>
              <li>• IEEE Computer Society Distinguished Visitor (2024-present)</li>
              <li>• IEEE ComSoc Distinguished Lecturer (2024-present)</li>
              <li>• IEEE ITSS Distinguished Lecturer (2024-present)</li>
              <li>• IEEE VTS Distinguished Lecturer (2023-present)</li>
              <li>• IEEE Systems Council Distinguished Lecturer (2023-present)</li>
              <li>• Distinguished Visiting Fellow, SICSA (2024)</li>
            </ul>
          </div>
        </div>

        {/* Editorial Roles */}
        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <div className="flex items-center mb-6">
            <BookOpen className="text-[#1e3a8a] mr-3" size={24} />
            <h2 className="text-2xl font-bold text-gray-900">Editorial & Publishing Roles</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Current Editorial Positions:</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Co-Editor-in-Chief, IEEE Transactions on Industrial Informatics (2025-present)</li>
                <li>• Associate Editor, IEEE Transactions on Artificial Intelligence (2023-present)</li>
                <li>• Associate Editor, IEEE Transactions on Intelligent Transportation Systems (2021-present)</li>
                <li>• Associate Editor, IEEE Journal on Miniaturization for Air and Space Systems (2020-present)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Previous Editorial Roles:</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Associate Technical Editor, IEEE Communications Magazine (2017-2020)</li>
                <li>• Associate Editor, IEEE Internet of Things Journal (2020-2024)</li>
              </ul>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-900 mb-2">Publications:</h4>
                <p className="text-gray-700 text-sm">Editor of 10+ books, author of 100+ articles, inventor of 2 patents</p>
              </div>
            </div>
          </div>
        </div>

        {/* Research Areas */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <div className="flex items-center mb-6">
            <Star className="text-[#1e3a8a] mr-3" size={24} />
            <h2 className="text-2xl font-bold text-gray-900">Research Interests & Impact</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Primary Research Areas:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• AI/Machine Learning/Big Data Analytics</li>
                <li>• Cyber-Physical Systems/Internet of Things</li>
                <li>• Cybersecurity and Privacy</li>
              </ul>
              
              <h4 className="font-semibold text-gray-900 mb-3 mt-6">Research Sponsors:</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• National Science Foundation</li>
                <li>• National Aeronautics and Space Administration</li>
                <li>• US Department of Transportation</li>
                <li>• Federal Aviation Administration</li>
                <li>• Industry Partners</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Awards & Recognition:</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Research.com Rising Star of Science Award (2022)</li>
                <li>• IEEE 2021 Harry Rowe Mimno Award</li>
                <li>• 10+ Best Paper Awards from major international conferences</li>
                <li>• IEEE Impact Creator (2023-present)</li>
              </ul>
              
              <h4 className="font-semibold text-gray-900 mb-3 mt-6">Media Coverage:</h4>
              <p className="text-gray-700 text-sm">
                Research featured in IEEE Spectrum, Fox News, U.S. News & World Report, 
                The Washington Times, Security Magazine, and many other prestigious outlets.
              </p>
            </div>
          </div>
        </div>

        {/* SONG Lab */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">SONG Lab</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Professor Song directs the Security and Optimization for Networked Globe Laboratory (SONG Lab), 
            a cutting-edge research facility focused on advancing the state-of-the-art in cybersecurity, 
            IoT systems, and big data analytics.
          </p>
          <a 
            href="http://www.SONGLab.us" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#1e3a8a] hover:text-[#3b82f6] font-semibold"
          >
            Visit SONG Lab Website <ExternalLink className="ml-2" size={16} />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
