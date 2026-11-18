import React from 'react';
import { motion } from 'framer-motion';

function Stats() {
  const stats = [
    {
      value: '20+',
      label: 'Satisfied Customers'
    },
    {
      value: '24/7',
      label: 'Expert Support'
    }
  ];

  return (
    <section className="py-20 bg-[#0a0e27]">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-navy text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-[#a0aec0] mb-4">
                {stat.value}
              </div>
              <div className="text-[#a0aec0] text-lg">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;