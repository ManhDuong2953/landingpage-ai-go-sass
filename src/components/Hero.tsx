import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Star, Users, TrendingUp } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      {/* Background Animations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400/20 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-green-400/20 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-indigo-400/20 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className={`inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Star className="h-4 w-4 text-yellow-500" />
            <span className="text-sm font-medium text-gray-700">Trusted by 10,000+ companies</span>
          </div>

          {/* Main Headline */}
          <h1 className={`text-5xl md:text-7xl font-bold text-gray-900 mb-6 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Scale Your{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 bg-clip-text text-transparent animate-pulse">
              SaaS Business
            </span>
            <br />
            Like Never Before
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Powerful tools and analytics to help you grow faster, engage better, and scale smarter.
            Join thousands of successful companies already using GoSaaS.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <span>Start Free Trial</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-semibold text-lg transition-colors duration-300">
              <div className="p-3 bg-white rounded-full shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <Play className="h-5 w-5" />
              </div>
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {[
              { icon: Users, number: '10K+', label: 'Active Users' },
              { icon: TrendingUp, number: '99.9%', label: 'Uptime' },
              { icon: Star, number: '4.9/5', label: 'Rating' },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="p-3 bg-white rounded-full shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 mb-3">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-2 h-2 bg-blue-500 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-1/3 right-0 w-2 h-2 bg-purple-500 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-green-500 rounded-full animate-ping delay-1500"></div>
      </div>
    </section>
  );
};

export default Hero;