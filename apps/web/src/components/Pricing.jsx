import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Zap, Shield, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

function Pricing() {
  const navigate = useNavigate();
  const [selectedAgents, setSelectedAgents] = useState(1);

  const pricingMap = {
    1: { rapid: 500, custom: 750 },
    2: { rapid: 900, custom: 1250 },
    3: { rapid: 1250, custom: 1650 },
    4: { rapid: 1500, custom: 1950 },
    5: { rapid: 1750, custom: 2000 },
  };

  const tiers = [
    {
      name: 'Rapid Workflow Automation',
      price: pricingMap[selectedAgents].rapid,
      description: 'Perfect for businesses ready to automate core processes',
      features: [
        'Up to 3 automated workflows',
        'Basic CRM integration',
        'Email & chat support',
        'Monthly performance reports',
        'Standard deployment timeline'
      ],
      cta: 'Start Automation',
      highlighted: false,
      route: '/automation-request'
    },
    {
      name: 'Custom AI Automation',
      price: pricingMap[selectedAgents].custom,
      description: 'Advanced automation with dedicated AI agents',
      features: [
        'Unlimited automated workflows',
        'Full CRM & tool integration',
        'Priority 24/7 support',
        'Real-time analytics dashboard',
        'Dedicated success manager',
        'Custom AI agent development'
      ],
      cta: 'Request Consultation',
      highlighted: true,
      badge: 'MOST POPULAR',
      route: '/custom-ai-automation'
    }
  ];

  const guarantees = [
    {
      icon: Shield,
      title: '7-Days Money Back Guarantee',
      description: 'Not satisfied? Full refund within the first week'
    },
    {
      icon: Headphones,
      title: 'Dedicated Onboarding',
      description: 'Personal setup assistance from our expert team'
    },
    {
      icon: Check,
      title: 'Secure & Private',
      description: 'Enterprise-grade security for all your data'
    }
  ];

  const handleCtaClick = (route) => {
    navigate(route);
    window.scrollTo(0, 0);
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-[#0f1535] w-full overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Transparent Pricing that </span>
            <span className="text-[#00d4ff]">Scales</span>
          </h2>
          <p className="text-[#a0aec0] text-base sm:text-lg max-w-3xl mx-auto mb-8 px-4">
            Choose the power you need. From rapid workflows to custom enterprise AI agents.
          </p>

          {/* Number Selector */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <span className="text-[#a0aec0] font-medium">Number of AI Agents:</span>
            <div className="flex flex-wrap justify-center gap-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  onClick={() => setSelectedAgents(num)}
                  className={`w-12 h-12 rounded-lg font-semibold transition-all duration-200 touch-target ${
                    selectedAgents === num
                      ? 'bg-[#00d4ff] text-[#0a0e27] shadow-[0_0_15px_rgba(0,212,255,0.4)]'
                      : 'bg-[#1a2847] text-[#a0aec0] hover:bg-[#1a2847]/80'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-6 sm:p-8 flex flex-col h-full ${
                tier.highlighted
                  ? 'bg-[#0a0e27] border-2 border-[#00d4ff] shadow-lg shadow-cyan-500/10 lg:scale-105 z-10'
                  : 'bg-[#0a0e27] border border-[#1a2847]'
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-full text-center">
                  <span className="bg-[#00d4ff] text-[#0a0e27] px-4 py-1 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase shadow-md">
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {tier.name}
                </h3>
                <p className="text-[#a0aec0] text-sm sm:text-base min-h-[48px]">
                  {tier.description}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-4xl sm:text-5xl font-bold text-white">
                  ${tier.price}
                </span>
                <span className="text-[#a0aec0] font-medium">/mo</span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                    <span className="text-[#a0aec0] text-sm sm:text-base leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleCtaClick(tier.route)}
                className={`w-full min-h-[48px] rounded-xl font-bold transition-all duration-200 mt-auto ${
                  tier.highlighted
                    ? 'bg-[#00d4ff] text-[#0a0e27] hover:bg-[#00b8e6] hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]'
                    : 'bg-[#1a2847] text-white hover:bg-[#1a2847]/80 border border-[#1a2847] hover:border-[#00d4ff]/50'
                }`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Platform Activation Fee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-elevated mb-16 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center flex-shrink-0">
              <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-[#00d4ff]" />
            </div>
            <div className="flex-1 w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Platform Activation Fee
              </h3>
              <p className="text-[#a0aec0] text-sm sm:text-base mb-6">
                One-time setup to configure your custom automation infrastructure
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                {[
                  'Complete system integration',
                  'Custom workflow design',
                  'Team training session',
                  'Performance optimization'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#00d4ff] shrink-0" />
                    <span className="text-[#a0aec0] text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="text-2xl sm:text-3xl font-bold text-white border-t border-[#1a2847] pt-4">
                $1,000 <span className="text-base sm:text-lg text-[#a0aec0] font-normal">one-time</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Guarantees */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-[#0a0e27] p-6 rounded-2xl border border-[#1a2847]"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#00d4ff]" />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                  {guarantee.title}
                </h4>
                <p className="text-[#a0aec0] text-xs sm:text-sm leading-relaxed">
                  {guarantee.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Pricing;