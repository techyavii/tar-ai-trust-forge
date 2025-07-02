
import React from 'react';
import { ArrowLeft, Mail, ExternalLink, Award, BookOpen, Users, GraduationCap } from 'lucide-react';

const DrRathore = () => {
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
          <h1 className="text-4xl font-bold">Dr. Rajkumar Singh Rathore</h1>
          <p className="text-xl text-blue-100 mt-2">Leader, TAR-AI Special Interest Group</p>
        </div>
      </header>

      {/* Biography Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Academic & Professional Background</h2>
            <p className="text-gray-700 leading-relaxed">
              Dr. Rajkumar Singh Rathore is a distinguished researcher and academic leader who spearheads the Transparent, Accountable, and Responsible AI (TAR-AI) Special Interest Group. His expertise spans artificial intelligence, ethical AI governance, and responsible technology development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-[#1e3a8a] mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-900">Education & Qualifications</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• PhD in relevant field</li>
                <li>• Expertise in AI Ethics</li>
                <li>• Research in Responsible AI</li>
                <li>• Academic Leadership</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Award className="text-[#3b82f6] mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-900">Research Interests</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Transparent AI Systems</li>
                <li>• AI Accountability Mechanisms</li>
                <li>• Responsible AI Development</li>
                <li>• Ethical Governance Frameworks</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Leadership Vision</h2>
            <p className="text-lg leading-relaxed mb-4">
              Dr. Rathore's leadership of the TAR-AI Special Interest Group is driven by a commitment to ensuring that artificial intelligence technologies are developed and deployed in ways that prioritize human values, societal well-being, and ethical integrity.
            </p>
            <p className="text-lg leading-relaxed">
              His vision encompasses creating a comprehensive framework where transparency, accountability, and responsibility are fundamental pillars of AI development, fostering trust between technology developers and society.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Users className="text-[#1e3a8a] mr-3" size={24} />
                <h3 className="text-2xl font-bold text-gray-900">Collaborative Approach</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Dr. Rathore believes in building collaborative networks that bring together researchers, practitioners, policymakers, and the public to address the complex challenges posed by AI technologies. His approach emphasizes inclusive dialogue and cross-disciplinary cooperation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <BookOpen className="text-[#3b82f6] mr-3" size={24} />
                <h3 className="text-2xl font-bold text-gray-900">Research & Education</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Through his work, Dr. Rathore is dedicated to research initiatives that explore the social, ethical, and technical dimensions of AI. He actively promotes educational resources to enhance knowledge and competence in ethical AI governance.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <Award className="text-[#1e3a8a] mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Impact & Contributions</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Under Dr. Rathore's leadership, the TAR-AI Special Interest Group has established itself as a leading voice in ethical AI discourse. His work focuses on developing best practice guidelines, conducting research, and creating communities of practice that promote responsible AI innovation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              His contributions extend to policy advocacy, where he engages with governmental and regulatory bodies to influence the development of policies that uphold transparency and accountability in AI systems.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
            <div className="flex justify-center items-center">
              <Mail className="text-[#1e3a8a] mr-3" size={20} />
              <a 
                href="mailto:rsrathore@cardiffmet.ac.uk" 
                className="text-[#1e3a8a] hover:underline font-semibold"
              >
                rsrathore@cardiffmet.ac.uk
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            For more information about the TAR-AI Special Interest Group and Dr. Rathore's work, please contact us directly.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DrRathore;
