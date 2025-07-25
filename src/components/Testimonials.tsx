import React, { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechCorp',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'GoSaaS transformed our workflow completely. The analytics insights helped us increase our revenue by 300% in just 6 months.',
      rating: 5,
      company: 'TechCorp',
    },
    {
      name: 'Michael Chen',
      position: 'CTO, Innovation Labs',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'The security features are enterprise-grade. We migrated our entire infrastructure to GoSaaS and never looked back.',
      rating: 5,
      company: 'Innovation Labs',
    },
    {
      name: 'Emily Rodriguez',
      position: 'Marketing Director, GrowthCo',
      avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'The collaboration tools are fantastic. Our team productivity increased by 40% after switching to GoSaaS.',
      rating: 5,
      company: 'GrowthCo',
    },
    {
      name: 'David Kim',
      position: 'Founder, StartupX',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'As a startup, GoSaaS gave us enterprise-level capabilities at a fraction of the cost. Absolutely game-changing.',
      rating: 5,
      company: 'StartupX',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-purple-500/10 rounded-full animate-bounce delay-300"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Loved by{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have transformed their businesses with GoSaaS.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-8 py-12">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                        <Quote className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Rating */}
                    <div className="flex justify-center space-x-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Author */}
                    <div className="flex items-center justify-center space-x-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover ring-4 ring-white/20"
                      />
                      <div className="text-left">
                        <div className="font-semibold text-lg">{testimonial.name}</div>
                        <div className="text-gray-300">{testimonial.position}</div>
                        <div className="text-blue-400 text-sm">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-blue-400 to-purple-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { number: '10,000+', label: 'Happy Customers' },
            { number: '99.9%', label: 'Uptime' },
            { number: '4.9/5', label: 'Average Rating' },
            { number: '24/7', label: 'Support' },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;