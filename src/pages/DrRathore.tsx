
import React from 'react';
import { ArrowLeft, Mail, ExternalLink, Award, BookOpen, Users, GraduationCap, Trophy, Star, Building, Globe } from 'lucide-react';

const DrRathore = () => {
  const handleBack = () => {
    window.history.back();
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
              src="/lovable-uploads/8de35ce9-e784-47b5-927a-393b96b306ef.png" 
              alt="Dr. Rajkumar Singh Rathore"
              className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-white/20"
            />
            <div>
              <h1 className="text-4xl font-bold">Dr. Rajkumar Singh Rathore</h1>
              <p className="text-xl text-blue-100 mt-2">Senior Lecturer (Associate Professor) | Program Director</p>
              <p className="text-lg text-blue-200 mt-1">Leader, TAR-AI Special Interest Group | Fellow of HEA</p>
              <div className="flex flex-wrap gap-4 mt-3 text-sm">
                <span className="bg-blue-600/50 px-3 py-1 rounded-full">rsrathore@cardiffmet.ac.uk</span>
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
            <Building className="mr-3" size={28} />
            <h2 className="text-2xl font-bold">Current Position</h2>
          </div>
          <div className="text-lg leading-relaxed">
            <p className="mb-2"><strong>Senior Lecturer (Associate Professor) & Program Director</strong></p>
            <p className="mb-2">MSc in Computing and IT, School of Technologies</p>
            <p className="mb-4"><strong>Cardiff Metropolitan University</strong>, United Kingdom</p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div>
                <h4 className="font-semibold mb-2">Research Leadership:</h4>
                <ul className="space-y-1 text-blue-100">
                  <li>• Leader, Cyber-Physical and Networked Systems Group (CeRISS Research Centre)</li>
                  <li>• Head, Cybersecurity for Connected and Autonomous Systems (CINC Research Centre)</li>
                  <li>• Cluster Head, TAR-AI Research Cluster</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Professional Recognition:</h4>
                <ul className="space-y-1 text-blue-100">
                  <li>• Fellow of the Higher Education Academy (HEA), UK</li>
                  <li>• Founding Member, IEEE TRUST-IoT Working Group</li>
                  <li>• Member, ACM Europe Technology Policy Committee</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Excellence */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <GraduationCap className="text-[#1e3a8a] mr-3" size={24} />
              <h3 className="text-xl font-bold text-gray-900">Academic Excellence</h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <p><strong>Fellow of the Higher Education Academy (HEA)</strong></p>
              <p className="text-sm text-gray-600">United Kingdom</p>
              <div className="pt-3 border-t">
                <p className="font-semibold text-[#1e3a8a] mb-2">Experience:</p>
                <ul className="space-y-1 text-sm">
                  <li>• Several years in scholarship of teaching, learning and research excellence</li>
                  <li>• Co-authored multiple textbooks for BSc and MSc Computer Science programs</li>
                  <li>• Program Director for MSc in Computing and IT</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Globe className="text-[#3b82f6] mr-3" size={24} />
              <h3 className="text-xl font-bold text-gray-900">International Collaboration</h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <p><strong>TAR-AI Research Cluster Head</strong></p>
              <p className="text-sm text-gray-600 mb-3">
                Transparent, Accountable and Responsible Artificial Intelligence Research Cluster
              </p>
              <ul className="space-y-1 text-sm">
                <li>• Collaboration with several international universities</li>
                <li>• Joint research endeavours in responsible AI</li>
                <li>• Global network of AI ethics researchers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Professional Activities */}
        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <div className="flex items-center mb-6">
            <Users className="text-[#1e3a8a] mr-3" size={24} />
            <h2 className="text-2xl font-bold text-gray-900">Professional Activities & Service</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Conference Leadership:</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Technical Program Committee Chair at international conferences</li>
                <li>• Keynote Speaker at esteemed international conferences</li>
                <li>• Active contributor to the academic community</li>
              </ul>
            
              <h4 className="font-semibold text-gray-900 mb-3 mt-6">Committee Memberships:</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• ACM Europe Technology Policy Committee (AI, Data Science, Autonomous Systems, Cybersecurity)</li>
                <li>• IEEE TRUST-IoT Working Group (Founding Member)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Research Centers:</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>CeRISS Research Centre:</strong> Leader of Cyber-Physical and Networked Systems Group</li>
                <li>• <strong>CINC Research Centre:</strong> Head of Cybersecurity for Connected and Autonomous Systems</li>
              </ul>
              
              <h4 className="font-semibold text-gray-900 mb-3 mt-6">Academic Contributions:</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Co-authored multiple textbooks for Computer Science programs</li>
                <li>• Extensive research publications in AI ethics and cybersecurity</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Research Interests */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <div className="flex items-center mb-6">
            <Star className="text-[#1e3a8a] mr-3" size={24} />
            <h2 className="text-2xl font-bold text-gray-900">Research Interests & Expertise</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Primary Research Areas:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Transparent, Accountable and Responsible AI</strong></li>
                <li>• Internet of Things/Cyber Physical Systems</li>
                <li>• Cybersecurity & Privacy</li>
                <li>• Connected and Autonomous Vehicles (CAVs)</li>
              </ul>
              
              <h4 className="font-semibold text-gray-900 mb-3 mt-6">Specialized Applications:</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• EV Charging Infrastructure Management</li>
                <li>• Smart Grid Technologies</li>
                <li>• Intelligent Networking of Drones</li>
                <li>• Use cases of AI/ML in various domains</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">TAR-AI Research Focus:</h4>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700 text-sm mb-3">
                  Leading international research cluster focused on:
                </p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• <strong>Transparency</strong> in AI decision-making processes</li>
                  <li>• <strong>Accountability</strong> in AI system deployment</li>
                  <li>• <strong>Responsibility</strong> in AI development and governance</li>
                </ul>
              </div>
              
              <h4 className="font-semibold text-gray-900 mb-3 mt-6">Innovation Areas:</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• AI Ethics and Governance Frameworks</li>
                <li>• Cybersecurity for Autonomous Systems</li>
                <li>• Privacy-Preserving Technologies</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact & Collaboration */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Research Collaboration</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dr. Rathore welcomes collaboration opportunities in TAR-AI research, cybersecurity for connected systems, 
            and responsible AI development. His work with international universities through the TAR-AI cluster 
            demonstrates a commitment to global cooperation in addressing AI ethics challenges.
          </p>
          <div className="flex items-center mt-6">
            <Mail className="text-[#1e3a8a] mr-3" size={20} />
            <a 
              href="mailto:rsrathore@cardiffmet.ac.uk" 
              className="text-[#1e3a8a] hover:text-[#3b82f6] font-semibold"
            >
              rsrathore@cardiffmet.ac.uk
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            For more information about TAR-AI research and collaboration opportunities with Cardiff Metropolitan University, 
            please contact Dr. Rathore directly.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DrRathore;
