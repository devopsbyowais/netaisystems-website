import React from 'react';
import { Target, Lightbulb, Users } from 'lucide-react';
import { motion } from 'framer-motion';

function WhyNetAiSystems() {
  const values = [
    {
      icon: Target,
      title: 'Precision Automation',
      description: 'Every system we build is tailored to your exact business needs, ensuring maximum efficiency and ROI.'
    },
    {
      icon: Lightbulb,
      title: 'Future-Forward Vision',
      description: 'We stay ahead of AI trends to deliver cutting-edge solutions that keep you competitive tomorrow.'
    },
    {
      icon: Users,
      title: 'Human-Centric Design',
      description: 'Our automation enhances human capabilities rather than replacing them, creating better experiences for everyone.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0e27]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Why </span>
            <span className="text-[#00d4ff]">NetAiSystems</span>
          </h2>
          <p className="text-[#a0aec0] text-lg max-w-3xl mx-auto">
            We believe automation should amplify human potential, not replace it. 
            Our vision is to create intelligent systems that work seamlessly alongside your team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-[#00d4ff]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-[#a0aec0]">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyNetAiSystems;