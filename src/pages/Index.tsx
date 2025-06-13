
import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronDown, Mail, Users, BookOpen, Calendar, FileText, Phone, University } from 'lucide-react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'mission', 'aims', 'objectives', 'branches', 'partners', 'join', 'events', 'resources', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'mission', label: 'Mission' },
    { id: 'aims', label: 'Aims' },
    { id: 'objectives', label: 'Objectives' },
    { id: 'branches', label: 'AI Branches' },
    { id: 'partners', label: 'Partners' },
    { id: 'join', label: 'Join Us' },
    { id: 'events', label: 'Events' },
    { id: 'resources', label: 'Resources' },
    { id: 'contact', label: 'Contact' }
  ];

  const partnerUniversities = [
    { sno: 1, name: "University of New South Wales– Canberra", country: "Australia" },
    { sno: 2, name: "Westlake University, China", country: "China" },
    { sno: 3, name: "Nanyang Technological University", country: "Singapore" },
    { sno: 4, name: "University of Electro-Communications", country: "Japan" },
    { sno: 5, name: "Korea University", country: "South Korea" },
    { sno: 6, name: "Ajou University", country: "South Korea" },
    { sno: 7, name: "Sungkyunkwan University", country: "South Korea" },
    { sno: 8, name: "Xi'an Jiaotong University", country: "China" },
    { sno: 9, name: "Xidian University", country: "China" },
    { sno: 10, name: "Northwestern Polytechnical University", country: "China" },
    { sno: 11, name: "Nanjing University of Information Science and Technology", country: "China" },
    { sno: 12, name: "Beijing University of Posts and Telecommunications", country: "China" },
    { sno: 13, name: "Shandong University of Aeronautics (SDUA)", country: "China" },
    { sno: 14, name: "Kohat University of Science and Technology", country: "Pakistan" },
    { sno: 15, name: "FAST National University of Computer & Emerging Sciences (NUCES)", country: "Pakistan" },
    { sno: 16, name: "Birla Institute of Technology and Science", country: "India" },
    { sno: 17, name: "Central University of Allahabad", country: "India" },
    { sno: 18, name: "IIT Jodhpur", country: "India" },
    { sno: 19, name: "The Alan Turing Institute", country: "UK" },
    { sno: 20, name: "University of Liverpool", country: "UK" },
    { sno: 21, name: "University of Strathclyde", country: "UK" },
    { sno: 22, name: "University of Edinburgh", country: "UK" },
    { sno: 23, name: "Cardiff Metropolitan University", country: "UK" },
    { sno: 24, name: "Edinburgh Napier University", country: "UK" },
    { sno: 25, name: "Heriot-Watt University", country: "UK" },
    { sno: 26, name: "Nottingham Trent University", country: "UK" },
    { sno: 27, name: "Teesside University", country: "UK" },
    { sno: 28, name: "University of Essex", country: "UK" },
    { sno: 29, name: "Swansea University", country: "UK" },
    { sno: 30, name: "University of Leeds", country: "UK" },
    { sno: 31, name: "University of Hull", country: "UK" },
    { sno: 32, name: "Trier University of Applied Sciences", country: "Germany" },
    { sno: 33, name: "RWTH Aachen University", country: "Germany" },
    { sno: 34, name: "Roma Tre University", country: "Italy" },
    { sno: 35, name: "University of Florence", country: "Italy" },
    { sno: 36, name: "Universidad de Murcia", country: "Spain" },
    { sno: 37, name: "Universidad Carlos III de Madrid", country: "Spain" },
    { sno: 38, name: "i2CAT Foundation", country: "Spain" },
    { sno: 39, name: "Warsaw University of Technology", country: "Poland" },
    { sno: 40, name: "University of Nicosia", country: "Cyprus" },
    { sno: 41, name: "Uppsala University", country: "Sweden" },
    { sno: 42, name: "Gheorghe Asachi Technical University", country: "Romania" },
    { sno: 43, name: "Kristiania University College", country: "Norway" },
    { sno: 44, name: "King Saud University", country: "Saudi Arabia" },
    { sno: 45, name: "Prince Sultan University", country: "Saudi Arabia" },
    { sno: 46, name: "King Fahd University of Petroleum and Minerals (KFUPM)", country: "Saudi Arabia" },
    { sno: 47, name: "Mohamed Bin Zayed University of Artificial Intelligence (MBZUAI)", country: "UAE" },
    { sno: 48, name: "United Arab Emirates University", country: "UAE" },
    { sno: 49, name: "University of Sharjah", country: "UAE" },
    { sno: 50, name: "University of Ghardaia", country: "Algeria" },
    { sno: 51, name: "Zagazig University", country: "Egypt" },
    { sno: 52, name: "Mohammed V University", country: "Morocco" },
    { sno: 53, name: "Federal University of Ceará", country: "Brazil" },
    { sno: 54, name: "Federal Institute of Ceará", country: "Brazil" },
    { sno: 55, name: "Pontifical Catholic University of Rio de Janeiro (PUC-Rio)", country: "Brazil" },
    { sno: 56, name: "Instituto Nacional de Electricidad y Energías Limpias (INEEL)", country: "Mexico" },
    { sno: 57, name: "Universidad Nacional de Colombia", country: "Colombia" },
    { sno: 58, name: "Communications Research Centre Canada", country: "Canada" },
    { sno: 59, name: "University of Ottawa", country: "Canada" },
    { sno: 60, name: "Johns Hopkins University", country: "USA" },
    { sno: 61, name: "Virginia Tech", country: "USA" },
    { sno: 62, name: "Georgia State University", country: "USA" },
    { sno: 63, name: "Howard University", country: "USA" },
    { sno: 64, name: "Florida International University", country: "USA" },
    { sno: 65, name: "Irregular Warfare Initiative", country: "USA" },
    { sno: 66, name: "Florida International University", country: "USA" },
    { sno: 67, name: "Embry-Riddle Aeronautical University", country: "USA" },
    { sno: 68, name: "Old Dominion University", country: "USA" },
    { sno: 69, name: "Northeastern University", country: "USA" },
    { sno: 70, name: "University of Mount Union", country: "USA" },
    { sno: 71, name: "Bowling Green State University", country: "USA" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/aba5cddd-c24d-4842-aacc-24df0214781d.png" 
                alt="Cardiff Metropolitan University"
                className="h-10 w-auto"
              />
              <div className="hidden md:block">
                <h1 className="text-lg font-bold text-[#1e3a8a]">TAR-AI Special Interest Group</h1>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex">
              <div className="flex space-x-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-2 py-2 text-xs font-medium transition-colors hover:text-[#1e3a8a] whitespace-nowrap ${
                      activeSection === item.id ? 'text-[#1e3a8a] border-b-2 border-[#1e3a8a]' : 'text-gray-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-[#1e3a8a]"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 max-h-96 overflow-y-auto">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-[#1e3a8a] hover:bg-gray-50 rounded-md"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transparent, Accountable, and Responsible AI
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-blue-100">
              Special Interest Group
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
              Addressing ethical and governance challenges in artificial intelligence through transparency, accountability, and responsibility
            </p>
            <button
              onClick={() => scrollToSection('about')}
              className="bg-white text-[#1e3a8a] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About TAR-AI Special Interest Group</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Transparent, Accountable, and Responsible AI (TAR-AI) Special Interest Group is a newly established initiative operating as a sub-group of the IoT Trust Special Interest Group, which is chaired by Professor Song.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Under the leadership of <strong>Dr. Rajkumar Singh Rathore</strong>, the group leverages expertise from diverse stakeholders to promote best practices in AI development and implementation, ensuring that these technologies are deployed in ways that align with trust and integrity in the rapidly evolving landscape of the Internet of Things (IoT).
              </p>
            </div>
            <div className="animate-fade-in">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">Key Focus Areas</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-[#1e3a8a] rounded-full mr-3"></div>
                    Transparency in AI systems
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-[#3b82f6] rounded-full mr-3"></div>
                    Accountability mechanisms
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-[#60a5fa] rounded-full mr-3"></div>
                    Responsible AI practices
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-[#93c5fd] rounded-full mr-3"></div>
                    Ethical governance frameworks
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <div className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white p-8 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                <p className="text-lg leading-relaxed">
                  Our mission is to ensure that the development and deployment of AI systems are carried out in a manner that prioritises human values, societal well-being, and ethical integrity.
                </p>
              </div>
            </div>
            <div className="animate-fade-in">
              <div className="bg-gradient-to-br from-[#3b82f6] to-[#60a5fa] text-white p-8 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                <p className="text-lg leading-relaxed">
                  We envision an ecosystem where AI technologies empower individuals and communities, operating with clarity, reliability, and fairness. By placing transparency at the core of AI development, we aim to cultivate a culture of accountability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aims Section */}
      <section id="aims" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Aims</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <div className="w-16 h-16 bg-[#1e3a8a] rounded-full flex items-center justify-center mb-6">
                <BookOpen className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advocating for Ethical Standards</h3>
              <p className="text-gray-700">
                We are committed to establishing and promoting ethical standards that guide the responsible creation and use of AI technologies across various sectors.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <div className="w-16 h-16 bg-[#3b82f6] rounded-full flex items-center justify-center mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Building Collaborative Networks</h3>
              <p className="text-gray-700">
                We seek to create a united front comprising researchers, practitioners, policymakers, and the public to address the complexities and challenges posed by AI.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <div className="w-16 h-16 bg-[#60a5fa] rounded-full flex items-center justify-center mb-6">
                <FileText className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enabling Informed Public Discourse</h3>
              <p className="text-gray-700">
                By facilitating open dialogues and discussions, we aim to enhance the public's understanding of AI's implications and raise awareness of ethical dilemmas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section id="objectives" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Objectives</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="/lovable-uploads/4c0dde15-588c-4299-8923-ccc2e0ea13cd.png" 
                alt="The interconnection of Transparent, Accountable, and Responsible AI"
                className="w-full rounded-lg shadow-lg"
              />
              <p className="text-center text-sm text-gray-600 mt-4">
                Figure 1: The interconnection of Transparent, Accountable, and Responsible AI
              </p>
            </div>
            <div className="animate-fade-in">
              <div className="space-y-6">
                <div className="border-l-4 border-[#1e3a8a] pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">1. Formulating Best Practice Guidelines</h3>
                  <p className="text-gray-700">In collaboration with experts and stakeholders, we will develop comprehensive guidelines to ensure the ethical handling of AI technologies.</p>
                </div>
                <div className="border-l-4 border-[#3b82f6] pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2. Conducting Research and Offering Education</h3>
                  <p className="text-gray-700">We are dedicated to research initiatives that explore the social, ethical, and technical dimensions of AI.</p>
                </div>
                <div className="border-l-4 border-[#60a5fa] pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">3. Creating a Community of Practice</h3>
                  <p className="text-gray-700">We will cultivate a vibrant community of individuals and organisations passionate about AI ethics.</p>
                </div>
                <div className="border-l-4 border-[#93c5fd] pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">4. Engagement in Policy Advocacy</h3>
                  <p className="text-gray-700">Acting as a voice for ethical AI, we will engage with governmental and regulatory bodies.</p>
                </div>
                <div className="border-l-4 border-[#bfdbfe] pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">5. Encouraging Responsible Innovation</h3>
                  <p className="text-gray-700">We will support initiatives that promote technological advancements while ensuring ethical considerations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Branches Section */}
      <section id="branches" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Branches of AI Ethics</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Transparent AI */}
            <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in">
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6">Transparent AI</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Explanation and Justification</li>
                <li>• Data Provenance</li>
                <li>• Algorithmic Disclosure</li>
                <li>• Model Behaviour Visibility</li>
                <li>• User-Friendly Documentation</li>
                <li>• Performance Metrics Disclosure</li>
                <li>• Interface Transparency</li>
              </ul>
            </div>

            {/* Accountable AI */}
            <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in">
              <h3 className="text-2xl font-bold text-[#3b82f6] mb-6">Accountable AI</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Responsibility Attribution</li>
                <li>• Incident Management and Reporting</li>
                <li>• Regulatory Adherence</li>
                <li>• Stakeholder Accountability</li>
                <li>• Performance Audits</li>
                <li>• Feedback Mechanisms</li>
                <li>• Corrective Action Protocols</li>
              </ul>
            </div>

            {/* Responsible AI */}
            <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in">
              <h3 className="text-2xl font-bold text-[#60a5fa] mb-6">Responsible AI</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Ethical Design Principles</li>
                <li>• Impact Assessment and Analysis</li>
                <li>• Inclusive AI Development</li>
                <li>• Sustainability and Environmental Responsibility</li>
                <li>• Human-Centric Approaches</li>
                <li>• Collaboration with Regulatory Bodies</li>
                <li>• Continuous Learning and Adaptation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Universities Section */}
      <section id="partners" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Partner Universities</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Our global network of partner universities collaborating on ethical AI research and development
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-in">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#1e3a8a] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">S.No.</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Partner Universities</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Country</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {partnerUniversities.map((partner, index) => (
                    <tr key={partner.sno} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 text-sm text-gray-900">{partner.sno}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">{partner.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{partner.country}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white rounded-lg shadow-lg animate-fade-in">
              <University className="mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-2">71+</h3>
              <p className="text-lg">Partner Universities</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#3b82f6] to-[#60a5fa] text-white rounded-lg shadow-lg animate-fade-in">
              <Users className="mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-2">25+</h3>
              <p className="text-lg">Countries</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-[#60a5fa] to-[#93c5fd] text-white rounded-lg shadow-lg animate-fade-in">
              <BookOpen className="mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-2">Global</h3>
              <p className="text-lg">Collaboration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="join" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Us</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Membership in the TAR-AI Special Interest Group is open to anyone interested in engaging with the ethical dimensions of AI. We welcome professionals, researchers, and AI experts who share our commitment to fostering an AI landscape that is transparent, accountable, and responsible.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white p-8 rounded-lg shadow-lg animate-fade-in">
              <h3 className="text-2xl font-bold mb-4">Benefits of Membership</h3>
              <ul className="space-y-3">
                <li>• Access to exclusive resources</li>
                <li>• Networking opportunities</li>
                <li>• Latest developments in AI ethics</li>
                <li>• Collaborative research opportunities</li>
                <li>• Professional development workshops</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Who Can Join?</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• AI researchers and practitioners</li>
                <li>• Technology professionals</li>
                <li>• Policy makers and regulators</li>
                <li>• Academic researchers</li>
                <li>• Industry professionals</li>
                <li>• Anyone passionate about ethical AI</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Keep an eye on our Events section, where we will showcase an array of webinars, panel discussions, and collaborative workshops featuring renowned thought leaders and practitioners in AI ethics.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <Calendar className="text-[#1e3a8a] mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Webinars</h3>
              <p className="text-gray-700">Regular online sessions covering the latest in AI ethics and governance.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <Users className="text-[#3b82f6] mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Panel Discussions</h3>
              <p className="text-gray-700">Expert panels discussing current challenges and solutions in AI ethics.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <BookOpen className="text-[#60a5fa] mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Workshops</h3>
              <p className="text-gray-700">Hands-on collaborative workshops for practical learning and implementation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Resource Library</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Delve into our meticulously curated Resource Library, which features a diverse collection of articles, studies, white papers, and practical tools designed to support stakeholders in their pursuit of ethical AI.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 animate-fade-in">
              <FileText className="text-[#1e3a8a] mx-auto mb-4" size={48} />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Articles</h3>
              <p className="text-gray-700">Latest research and insights</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 animate-fade-in">
              <BookOpen className="text-[#3b82f6] mx-auto mb-4" size={48} />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Studies</h3>
              <p className="text-gray-700">Comprehensive research studies</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 animate-fade-in">
              <FileText className="text-[#60a5fa] mx-auto mb-4" size={48} />
              <h3 className="text-lg font-bold text-gray-900 mb-2">White Papers</h3>
              <p className="text-gray-700">Detailed technical documents</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 animate-fade-in">
              <Users className="text-[#93c5fd] mx-auto mb-4" size={48} />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Tools</h3>
              <p className="text-gray-700">Practical implementation tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get Involved</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
              Are you ready to make a difference? If you are keen to join the TAR-AI Special Interest Group or seek further information, please do not hesitate to contact us.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="text-[#1e3a8a] mr-4" size={24} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:rsrathore@cardiffmet.ac.uk" className="text-[#1e3a8a] hover:underline">
                        rsrathore@cardiffmet.ac.uk
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="text-[#3b82f6] mr-4" size={24} />
                    <div>
                      <p className="font-semibold">Leadership</p>
                      <p className="text-gray-700">Dr. Rajkumar Singh Rathore</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <div className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Join Our Mission</h3>
                <p className="text-lg mb-6">
                  Together, we can influence the future of AI, ensuring it aligns with our collective values and serves the greater good.
                </p>
                <p className="text-lg">
                  Thank you for your interest in the TAR-AI Special Interest Group. Together, we can champion the ethical advancement of artificial intelligence for a better tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1e3a8a] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img 
                src="/lovable-uploads/aba5cddd-c24d-4842-aacc-24df0214781d.png" 
                alt="Cardiff Metropolitan University"
                className="h-12 w-auto mb-4 filter brightness-0 invert"
              />
              <p className="text-blue-100">
                TAR-AI Special Interest Group - Promoting ethical AI through transparency, accountability, and responsibility.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('about')} className="text-blue-100 hover:text-white">About</button></li>
                <li><button onClick={() => scrollToSection('mission')} className="text-blue-100 hover:text-white">Mission</button></li>
                <li><button onClick={() => scrollToSection('objectives')} className="text-blue-100 hover:text-white">Objectives</button></li>
                <li><button onClick={() => scrollToSection('partners')} className="text-blue-100 hover:text-white">Partners</button></li>
                <li><button onClick={() => scrollToSection('join')} className="text-blue-100 hover:text-white">Join Us</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <p className="text-blue-100 mb-2">
                Email: <a href="mailto:rsrathore@cardiffmet.ac.uk" className="hover:text-white">rsrathore@cardiffmet.ac.uk</a>
              </p>
              <p className="text-blue-100">
                Follow us on social media for updates and discussions
              </p>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center">
            <p className="text-blue-100">
              © 2024 TAR-AI Special Interest Group, Cardiff Metropolitan University. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
