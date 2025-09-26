import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
  Brain, 
  Shield, 
  Trophy, 
  Users, 
  BarChart3, 
  Play, 
  CheckCircle, 
  Target,
  MapPin,
  Zap,
  Award,
  Camera,
  Cloud,
  Activity,
  Star,
  X,
  Download,
  Calendar,
  Mail,
  Phone,
  Send,
  Menu,
  ChevronDown
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  // Smooth scrolling function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'how-it-works', 'impact', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle form submission
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert(`Thank you ${formData.name}! Your message has been sent. We'll get back to you soon.`);
    setFormData({ name: '', email: '', organization: '', message: '' });
    setIsContactModalOpen(false);
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Demo modal content
  const DemoModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Platform Demo</h2>
          <button 
            onClick={() => setIsDemoModalOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6">
          <div className="aspect-video bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
            <div className="text-center">
              <Play className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <p className="text-gray-600">Demo video would play here</p>
              <p className="text-sm text-gray-500 mt-2">Showing AI-powered video analysis in action</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Key Features Demonstrated:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" />Real-time video analysis</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" />AI cheat detection</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" />Performance benchmarking</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" />Offline capabilities</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Test Categories:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Vertical Jump Assessment</li>
                <li>• Shuttle Run Analysis</li>
                <li>• Sit-ups Counter</li>
                <li>• Endurance Run Tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Contact modal content
  const ContactModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
          <button 
            onClick={() => setIsContactModalOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <form onSubmit={handleFormSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            <Send className="h-4 w-4 mr-2" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );

  // Proposal modal content
  const ProposalModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Download Proposal</h2>
          <button 
            onClick={() => setIsProposalModalOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6">
          <div className="text-center mb-6">
            <Download className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Proposal</h3>
            <p className="text-gray-600">Comprehensive document detailing the AI-powered sports talent assessment platform.</p>
          </div>
          <div className="space-y-3 mb-6">
            <div className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
              Technical specifications
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
              Implementation timeline
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
              Cost analysis
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
              Expected outcomes
            </div>
          </div>
          <button
            onClick={() => {
              alert('Proposal download started! Check your downloads folder.');
              setIsProposalModalOpen(false);
            }}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            <Download className="h-4 w-4 mr-2" />
            Download PDF (2.3 MB)
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm fixed w-full z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Trophy className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">SportsTalent AI</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className={`transition-colors ${activeSection === 'home' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className={`transition-colors ${activeSection === 'features' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className={`transition-colors ${activeSection === 'how-it-works' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('impact')}
                className={`transition-colors ${activeSection === 'impact' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Impact
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`transition-colors ${activeSection === 'contact' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>

            {/* Get Started Button */}
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                >
                  How It Works
                </button>
                <button 
                  onClick={() => scrollToSection('impact')}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Impact
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Contact
                </button>
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-fit"
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 pt-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Democratizing Sports Talent Assessment with
                <span className="text-yellow-300"> AI Power</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                Revolutionary mobile platform enabling athletes across India to showcase their talent through AI-powered video analysis and standardized fitness assessments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsDemoModalOpen(true)}
                  className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors flex items-center justify-center"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </button>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-700 transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/20 rounded-lg p-4 text-center hover:bg-white/30 transition-colors cursor-pointer">
                    <Users className="h-8 w-8 text-yellow-300 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">1M+</div>
                    <div className="text-blue-100">Athletes</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center hover:bg-white/30 transition-colors cursor-pointer">
                    <MapPin className="h-8 w-8 text-green-300 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">28</div>
                    <div className="text-blue-100">States</div>
                  </div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center hover:bg-white/30 transition-colors cursor-pointer">
                  <Brain className="h-8 w-8 text-purple-300 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">95%</div>
                  <div className="text-blue-100">AI Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Challenge in Indian Sports
              </h2>
              <div className="space-y-6 text-gray-700 text-lg">
                <p>
                  India's vast and diverse landscape presents significant challenges in identifying and assessing athletic talent. Rural athletes lack access to standardized facilities and opportunities to showcase their abilities.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                    <div className="bg-red-100 p-2 rounded-full">
                      <Target className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Limited Infrastructure</h4>
                      <p className="text-gray-600">Absence of standardized assessment facilities in remote areas</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                    <div className="bg-orange-100 p-2 rounded-full">
                      <Users className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Scalability Issues</h4>
                      <p className="text-gray-600">Traditional methods cannot reach millions of potential athletes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our AI-Powered Solution
              </h2>
              <div className="space-y-6 text-gray-700 text-lg">
                <p>
                  SportsTalent AI democratizes sports assessment through mobile technology and artificial intelligence, making standardized talent evaluation accessible to every athlete in India.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Smartphone className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Mobile Accessibility</h4>
                      <p className="text-gray-600">Works on entry-level smartphones with offline capabilities</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Brain className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">AI Verification</h4>
                      <p className="text-gray-600">Advanced algorithms ensure accurate and authentic assessments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Innovative Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge AI technology meets sports science to deliver unprecedented accuracy and accessibility in talent assessment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="bg-blue-600 p-3 rounded-full w-fit mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Based Cheat Detection</h3>
              <p className="text-gray-700">
                Advanced algorithms identify anomalies and manipulations to ensure fair and authentic assessments across all test parameters.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="bg-green-600 p-3 rounded-full w-fit mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Offline Video Analysis</h3>
              <p className="text-gray-700">
                Perform preliminary performance analysis directly on device without requiring continuous internet connectivity.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-100 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="bg-purple-600 p-3 rounded-full w-fit mb-4">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Performance Benchmarking</h3>
              <p className="text-gray-700">
                Compare athlete performance against age and gender-based benchmarks with instant feedback and scoring.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-100 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="bg-orange-600 p-3 rounded-full w-fit mb-4">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gamified Interface</h3>
              <p className="text-gray-700">
                Progress badges, leaderboards, and interactive visuals to engage athletes and encourage participation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl border border-red-100 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="bg-red-600 p-3 rounded-full w-fit mb-4">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Auto-Test Segmentation</h3>
              <p className="text-gray-700">
                Automatically detect and segment performance clips, counting reps and analyzing movements with precision.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl border border-teal-100 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="bg-teal-600 p-3 rounded-full w-fit mb-4">
                <Cloud className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Data Transmission</h3>
              <p className="text-gray-700">
                End-to-end encryption ensures safe transmission of verified data to SAI servers for official evaluation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, standardized process from video recording to official evaluation in just four steps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-blue-600 p-6 rounded-full w-24 h-24 mx-auto mb-6 group-hover:scale-110 transition-transform cursor-pointer">
                <Smartphone className="h-12 w-12 text-white mx-auto" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Record</h3>
                <p className="text-gray-600">
                  Athletes download the app and record videos of prescribed fitness tests using their smartphone camera.
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-green-600 p-6 rounded-full w-24 h-24 mx-auto mb-6 group-hover:scale-110 transition-transform cursor-pointer">
                <Activity className="h-12 w-12 text-white mx-auto" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Analyze</h3>
                <p className="text-gray-600">
                  AI algorithms analyze videos on-device for performance metrics, accuracy, and authenticity verification.
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-purple-600 p-6 rounded-full w-24 h-24 mx-auto mb-6 group-hover:scale-110 transition-transform cursor-pointer">
                <CheckCircle className="h-12 w-12 text-white mx-auto" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Verify</h3>
                <p className="text-gray-600">
                  Verified performance data is securely transmitted to SAI servers with comprehensive authenticity reports.
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-yellow-600 p-6 rounded-full w-24 h-24 mx-auto mb-6 group-hover:scale-110 transition-transform cursor-pointer">
                <Award className="h-12 w-12 text-white mx-auto" />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">4. Evaluate</h3>
                <p className="text-gray-600">
                  Officials review verified data through dashboard interface for talent identification and athlete profiling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Expected Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming sports talent identification in India through technology-driven democratization and scalability.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-2xl text-white hover:shadow-xl transition-shadow cursor-pointer">
              <div className="bg-white/20 p-3 rounded-full w-fit mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Democratization</h3>
              <p className="text-blue-100 text-lg">
                Sports talent assessment reaches even the most remote areas of India, ensuring no potential athlete is left behind.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-8 rounded-2xl text-white hover:shadow-xl transition-shadow cursor-pointer">
              <div className="bg-white/20 p-3 rounded-full w-fit mb-4">
                <BarChart3 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Scalability</h3>
              <p className="text-green-100 text-lg">
                Low-cost, scalable solution enabling mass participation in talent identification initiatives across the nation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-violet-700 p-8 rounded-2xl text-white hover:shadow-xl transition-shadow cursor-pointer">
              <div className="bg-white/20 p-3 rounded-full w-fit mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Transparency</h3>
              <p className="text-purple-100 text-lg">
                Improved efficiency and transparency in evaluating and discovering potential athletes through standardized processes.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gray-50 rounded-2xl p-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="hover:scale-105 transition-transform cursor-pointer">
                <div className="text-4xl font-bold text-blue-600 mb-2">1M+</div>
                <div className="text-gray-700 font-medium">Potential Athletes</div>
              </div>
              <div className="hover:scale-105 transition-transform cursor-pointer">
                <div className="text-4xl font-bold text-green-600 mb-2">28</div>
                <div className="text-gray-700 font-medium">States Covered</div>
              </div>
              <div className="hover:scale-105 transition-transform cursor-pointer">
                <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
                <div className="text-gray-700 font-medium">Cost Reduction</div>
              </div>
              <div className="hover:scale-105 transition-transform cursor-pointer">
                <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-700 font-medium">Accessibility</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Sports Talent Assessment?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Partner with us to revolutionize how India identifies and nurtures its sporting talent through AI-powered technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                alert('Demo scheduled! Our team will contact you within 24 hours to arrange a personalized demonstration.');
              }}
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors flex items-center justify-center"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Demo
            </button>
            <button 
              onClick={() => setIsProposalModalOpen(true)}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-700 transition-colors flex items-center justify-center"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Proposal
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Trophy className="h-8 w-8 text-yellow-400" />
                <span className="text-2xl font-bold">SportsTalent AI</span>
              </div>
              <p className="text-gray-300 text-lg mb-6 max-w-md">
                Empowering India's athletic future through AI-powered talent assessment and democratized sports evaluation.
              </p>
              <div className="text-gray-400">
                <p>Sports Authority of India Initiative</p>
                <p>Government of India</p>
              </div>
              <div className="mt-6 flex space-x-4">
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Us
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => setIsDemoModalOpen(true)} className="hover:text-white transition-colors text-left">Mobile App</button></li>
                <li><button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors text-left">AI Analysis</button></li>
                <li><button onClick={() => alert('Dashboard demo available upon request')} className="hover:text-white transition-colors text-left">Dashboard</button></li>
                <li><button onClick={() => alert('API documentation available for partners')} className="hover:text-white transition-colors text-left">API</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <button onClick={() => setIsContactModalOpen(true)} className="hover:text-white transition-colors">
                    info@sportstalentai.gov.in
                  </button>
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+91 11 2436 XXXX</span>
                </li>
                <li>Sports Authority of India</li>
                <li>New Delhi, India</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 SportsTalent AI. Sports Authority of India. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {isDemoModalOpen && <DemoModal />}
      {isContactModalOpen && <ContactModal />}
      {isProposalModalOpen && <ProposalModal />}
    </div>
  );
}

export default App;