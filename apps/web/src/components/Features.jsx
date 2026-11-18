import React from 'react';
import { RefreshCw, CheckCircle, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

function Features() {
  const features = [
    {
      icon: RefreshCw,
      title: 'Smart Workflows',
      description: 'Adaptive automation that learns and optimizes based on your business patterns and customer behavior.'
    },
    {
      icon: CheckCircle,
      title: 'Fast Deployment',
      description: 'Get up and running in days, not months. Our streamlined onboarding ensures rapid time-to-value.'
    },
    {
      icon: Lock,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee. Your data and operations are always protected.'
    }
  ];

  return (
    <section className="py-24 bg-[#0f1535]">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-navy"
              >
                <div className="w-12 h-12 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#a0aec0]">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;