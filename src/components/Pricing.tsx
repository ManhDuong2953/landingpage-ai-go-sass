import React, { useState } from 'react';
import { Check, Star, Zap } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      price: isAnnual ? 9 : 12,
      originalPrice: isAnnual ? 12 : null,
      description: 'Perfect for small teams getting started',
      features: [
        'Up to 5 team members',
        'Basic analytics',
        '10GB storage',
        'Email support',
        'Mobile app access',
      ],
      highlighted: false,
      color: 'from-gray-400 to-gray-600',
    },
    {
      name: 'Professional',
      price: isAnnual ? 29 : 39,
      originalPrice: isAnnual ? 39 : null,
      description: 'Best for growing businesses',
      features: [
        'Up to 25 team members',
        'Advanced analytics',
        '100GB storage',
        'Priority support',
        'API access',
        'Custom integrations',
        'Advanced security',
      ],
      highlighted: true,
      color: 'from-blue-500 to-purple-600',
      badge: 'Most Popular',
    },
    {
      name: 'Enterprise',
      price: isAnnual ? 99 : 129,
      originalPrice: isAnnual ? 129 : null,
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Enterprise analytics',
        'Unlimited storage',
        '24/7 phone support',
        'Custom development',
        'SLA guarantee',
        'Dedicated account manager',
        'Advanced compliance',
      ],
      highlighted: false,
      color: 'from-green-500 to-emerald-600',
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. Upgrade or downgrade at any time.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                isAnnual ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                Save 25%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                plan.highlighted ? 'ring-2 ring-blue-500 ring-offset-4' : ''
              }`}
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>{plan.badge}</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                    <div className="text-left">
                      {plan.originalPrice && (
                        <div className="text-lg text-gray-400 line-through">${plan.originalPrice}</div>
                      )}
                      <div className="text-gray-600">per month</div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className={`p-1 rounded-full bg-gradient-to-r ${plan.color}`}>
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-xl hover:scale-105'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200 hover:scale-105'
                  }`}
                >
                  {plan.highlighted ? (
                    <span className="flex items-center justify-center space-x-2">
                      <Zap className="h-5 w-5" />
                      <span>Get Started</span>
                    </span>
                  ) : (
                    'Choose Plan'
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <a href="#" className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300">
            Compare all features →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;