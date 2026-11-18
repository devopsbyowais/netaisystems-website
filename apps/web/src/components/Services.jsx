import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { serviceDivisions } from '@/data/services.js';

function Services() {
  return (
    <section id="services" className="py-24 bg-[#0f1535]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-[#a0aec0] text-lg max-w-3xl mx-auto">
            From AI automation and custom software to cloud engineering, business
            systems, and creative digital solutions — one partner across six service
            divisions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {serviceDivisions.map((service, index) => {
            const Icon = service.icon;
            const previewCapabilities = service.capabilities.slice(0, 4);
            const remainingCount = service.capabilities.length - previewCapabilities.length;

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="card-elevated hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col h-full"
              >
                <div className="w-14 h-14 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-[#00d4ff]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-[#a0aec0] leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="flex flex-wrap gap-2 mb-6">
                  {previewCapabilities.map((capability) => (
                    <li
                      key={capability}
                      className="text-xs text-[#a0aec0] border border-[#1a2847] bg-[#0a0e27] rounded-full px-3 py-1"
                    >
                      {capability}
                    </li>
                  ))}
                  {remainingCount > 0 && (
                    <li className="text-xs text-[#00d4ff]/80 border border-[#00d4ff]/20 bg-[#00d4ff]/5 rounded-full px-3 py-1">
                      +{remainingCount} more
                    </li>
                  )}
                </ul>

                <Link
                  to={`/services/${service.slug}`}
                  className="mt-auto inline-flex items-center gap-2 text-[#00d4ff] font-semibold hover:gap-3 transition-all duration-200 w-fit"
                >
                  Explore {service.title.split(/[\s,]+/)[0]}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
