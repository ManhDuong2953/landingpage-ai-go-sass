import React, { useEffect, useRef, useState } from 'react';
import { Shield, Zap, BarChart3, Users, Globe, Smartphone } from 'lucide-react';

const Features = () => {
  const [visibleFeatures, setVisibleFeatures] = useState(new Set());
  const featuresRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption, SSO, and compliance certifications.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed with global CDN, caching, and performance monitoring.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Real-time insights, custom dashboards, and predictive analytics powered by AI.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless teamwork with real-time collaboration, comments, and approval workflows.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Deploy worldwide with multi-region support, localization, and 99.9% uptime.',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Native mobile apps and responsive design for perfect experience on any device.',
      color: 'from-teal-500 to-cyan-500',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleFeatures(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const featureCards = featuresRef.current?.querySelectorAll('.feature-card');
    featureCards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to help you build, scale, and optimize your SaaS business
            with confidence and ease.
          </p>
        </div>

        {/* Features Grid */}
        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={`feature-card group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform ${
                visibleFeatures.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              } hover:scale-105`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;