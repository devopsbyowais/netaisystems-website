import React from 'react';
import { Zap, TrendingUp, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

function Results() {
  const results = [
    {
      icon: Zap,
      metric: '+250%',
      metricPrefix: 'Up To',
      label: 'Response Speed',
      description: 'Average improvement in customer response time across all automated channels'
    },
    {
      icon: TrendingUp,
      metric: '≈$100k+',
      label: 'Revenue Generated',
      description: 'Additional monthly revenue unlocked through automated sales processes'
    },
    {
      icon: Clock,
      metric: '87.8%',
      label: 'Time Saved',
      description: 'Reduction in manual task completion time for operational workflows'
    }
  ];

  return (
    <section id="results" className="py-24 bg-[#0a0e27]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Proven Results. </span>
            <span className="text-[#00d4ff]">Real Automation Impact.</span>
          </h2>
          <p className="text-[#a0aec0] text-lg max-w-3xl mx-auto">
            Measurable outcomes delivered through AI-powered CRM, communication, 
            and workflow automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((result, index) => {
            const Icon = result.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-navy text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-[#00d4ff]" />
                </div>
                <div className="mb-2">
                  {result.metricPrefix && (
                    <div className="text-sm font-normal text-[#a0aec0] mb-2">
                      {result.metricPrefix}
                    </div>
                  )}
                  <div className="text-5xl font-bold text-white">
                    {result.metric}
                  </div>
                </div>
                <div className="text-[#00d4ff] font-semibold text-lg mb-4">
                  {result.label}
                </div>
                <p className="text-[#a0aec0]">
                  {result.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Results;