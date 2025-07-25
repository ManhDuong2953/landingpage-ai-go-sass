import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      if (email.includes('@')) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
      
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 animate-pulse"></div>
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full animate-bounce delay-300"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-white/10 rounded-full animate-bounce delay-700"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
            <Mail className="h-12 w-12 text-white" />
          </div>
        </div>

        {/* Content */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Stay in the{' '}
          <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            Loop
          </span>
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          Get the latest updates, features, and exclusive insights delivered straight to your inbox. 
          Join our community of innovators.
        </p>

        {/* Newsletter Form */}
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-6 py-4 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                disabled={status === 'loading'}
              />
              {status === 'loading' && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                </div>
              )}
            </div>
            <button
              type="submit"
              disabled={status === 'loading' || !email}
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl hover:bg-blue-50 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              Subscribe
            </button>
          </div>

          {/* Status Messages */}
          {status === 'success' && (
            <div className="flex items-center justify-center space-x-2 mt-4 text-green-300 animate-fade-in">
              <CheckCircle className="h-5 w-5" />
              <span>Thanks for subscribing! Check your email for confirmation.</span>
            </div>
          )}
          
          {status === 'error' && (
            <div className="flex items-center justify-center space-x-2 mt-4 text-red-300 animate-fade-in">
              <AlertCircle className="h-5 w-5" />
              <span>Please enter a valid email address.</span>
            </div>
          )}
        </form>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 mt-8 text-blue-200">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4" />
            <span className="text-sm">No spam, ever</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4" />
            <span className="text-sm">Unsubscribe anytime</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4" />
            <span className="text-sm">10,000+ subscribers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;