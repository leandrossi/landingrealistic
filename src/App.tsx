import React from 'react';
import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import { 
  Brain, 
  Shield, 
  Boxes,
  BadgeCheck,
  PhoneCall,
  ArrowRight,
  Gauge,
  Smartphone,
  LineChart,
  Target,
  Users,
  Zap,
  Building2,
  Share2,
  Linkedin,
  Twitter
} from 'lucide-react';
import alarmlogo from './assets/alarmlogo.png';

function ValuePillar({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
    >
      <div className="h-16 w-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
        <Icon className="h-8 w-8 text-indigo-600" />
      </div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 text-lg">{description}</p>
    </motion.div>
  );
}

function BenefitCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-indigo-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

function SocialShare() {
  const shareUrl = window.location.href;
  const title = "Transform Alarm Monitoring into a Business Growth Engine";

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`, '_blank');
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg space-y-4 z-50">
      <button 
        onClick={shareOnLinkedIn}
        className="block p-2 hover:bg-gray-100 rounded-full transition-colors"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="h-5 w-5 text-blue-600" />
      </button>
      <button 
        onClick={shareOnTwitter}
        className="block p-2 hover:bg-gray-100 rounded-full transition-colors"
        aria-label="Share on Twitter"
      >
        <Twitter className="h-5 w-5 text-blue-400" />
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <SocialShare />
      {/* Header with Logo */}
      <div className="absolute top-0 left-0 w-full z-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Boxes className="h-8 w-8 text-white" />
              <span className="text-white text-xl font-semibold">Realistic</span>
            </div>
            <div className="flex items-center space-x-6">
              <BadgeCheck className="h-6 w-6 text-white" />
              <span className="text-white">SOC 2 Certified</span>
              <PhoneCall className="h-6 w-6 text-white" />
              <span className="text-white">24/7 Support</span>
              <span className="text-white">|</span>
              <span className="text-white">99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa" 
            alt="Technology Background" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <Shield className="h-16 w-16 mb-8 text-indigo-400" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Alarm Monitoring into a Business Growth Engine
            </h1>
            <p className="text-xl md:text-2xl text-indigo-200 max-w-3xl mb-12">
              AI agents that unlock new revenue, automate installations, and generate actionable operational insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition-colors flex items-center gap-2">
                Request a Live Demo <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors">
                See How Our AI Agents Work
              </button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm">
              <span className="flex items-center gap-2">
                <BadgeCheck className="h-5 w-5" /> SOC 2 Certified
              </span>
              <span className="flex items-center gap-2">
                <PhoneCall className="h-5 w-5" /> 24/7 Support
              </span>
              <span className="flex items-center gap-2">
                <Gauge className="h-5 w-5" /> 99.9% Uptime
              </span>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Value Proposition Section */}
        <section className="mb-32">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Empowering Alarm Monitoring Companies with AI Business Agents
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValuePillar 
              icon={Smartphone}
              title="DIY Installation with AR"
              description="Reduce installation costs with AI-guided setups and augmented reality support for technicians and customers."
            />
            <ValuePillar 
              icon={Brain}
              title="Operational Intelligence"
              description="Machine learning identifies operational gaps, growth opportunities, and retention risks in real-time."
            />
            <ValuePillar 
              icon={LineChart}
              title="AI Business Agents"
              description="Automated systems that support sales, engage customers, and drive revenue growth continuously."
            />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-32 bg-white rounded-3xl p-12 shadow-xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How Our AI-Powered Platform Boosts Your Business
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-semibold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Capture</h3>
                  <p className="text-gray-600">Collect comprehensive data across operations, sales, and customer interactions.</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-semibold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Analyze</h3>
                  <p className="text-gray-600">Machine learning algorithms identify patterns and opportunities for growth.</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-semibold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Act</h3>
                  <p className="text-gray-600">AI agents automatically implement growth strategies and optimize operations.</p>
                </div>
              </motion.div>
            </div>
            <div className="relative h-96">
              <Player
                autoplay
                loop
                src="https://lottie.host/embed/32a3fdc0-9de9-49e1-be55-634f1b16d367/PYeNcmBOGF.json"
                style={{ height: '100%', width: '100%' }}
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Key Benefits for Alarm Monitoring Companies
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard 
              icon={LineChart}
              title="Boost Revenue per Customer"
              description="Increase average revenue by 30% through AI-driven upselling and retention strategies."
            />
            <BenefitCard 
              icon={Zap}
              title="Cut Installation Costs"
              description="Reduce installation costs by 40% with AR-guided DIY installations and remote support."
            />
            <BenefitCard 
              icon={Users}
              title="Accelerate Customer Onboarding"
              description="Speed up customer activation by 60% using automated setup and verification."
            />
            <BenefitCard 
              icon={Target}
              title="Maximize Upsell Opportunities"
              description="AI identifies and acts on upgrade opportunities automatically."
            />
            <BenefitCard 
              icon={Shield}
              title="Improve Customer Retention"
              description="Reduce churn by 45% through predictive analytics and proactive engagement."
            />
            <BenefitCard 
              icon={Gauge}
              title="Increase Operational Efficiency"
              description="Boost overall efficiency by 50% with AI-powered automation and insights."
            />
          </div>
        </section>

        {/* Success Story Section */}
        <section className="mb-32 bg-gradient-to-br from-indigo-900 to-purple-900 text-white rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="p-12"
            >
              <h2 className="text-3xl font-bold mb-8">Real Results: Turning Operations into Profits</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <LineChart className="h-8 w-8 text-indigo-400" />
                  <p className="text-xl">30% Revenue Growth in 6 Months</p>
                </div>
                <div className="flex items-center gap-4">
                  <Zap className="h-8 w-8 text-indigo-400" />
                  <p className="text-xl">60% Faster Installation Times</p>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="h-8 w-8 text-indigo-400" />
                  <p className="text-xl">50% Increase in Customer Lifetime Value</p>
                </div>
              </div>
              <button className="mt-8 bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                Read Full Success Story
              </button>
            </motion.div>
            <div className="relative">
              <img 
                src={alarmlogo} 
                alt="Generic Security Logo" 
                className="w-full h-full object-contain p-8"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-indigo-900/0 to-indigo-900 md:hidden"></div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="text-center bg-white rounded-3xl p-12 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Business with AI?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join leading monitoring companies transforming operations and driving profits with Realistic AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
              Book a Strategy Call <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition-colors">
              Download Use Case Guide
            </button>
          </div>
          <div className="mt-8 flex justify-center items-center gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <BadgeCheck className="h-5 w-5" /> SOC 2 Certified
            </span>
            <span className="flex items-center gap-2">
              <PhoneCall className="h-5 w-5" /> 24/7 Support
            </span>
            <span className="flex items-center gap-2">
              <Gauge className="h-5 w-5" /> 99.9% Uptime
            </span>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <Shield className="h-8 w-8 mx-auto mb-4 text-indigo-400" />
            <div className="flex justify-center items-center gap-6 mb-4">
              <span className="flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 text-indigo-400" /> SOC 2 Certified
              </span>
              <span className="flex items-center gap-2">
                <PhoneCall className="h-5 w-5 text-indigo-400" /> 24/7 Support
              </span>
              <span className="flex items-center gap-2">
                <Gauge className="h-5 w-5 text-indigo-400" /> 99.9% Uptime
              </span>
            </div>
            <p className="text-gray-400">© 2024 Realistic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
