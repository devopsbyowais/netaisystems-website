import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading.jsx';
import { companyPrinciples } from '@/data/site.js';

const IntroSection = () => (
  <section className="py-20 md:py-28">
    <div className="section-container">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-6">
          <SectionHeading
            eyebrow="Who we are"
            title="Technology Should Move Your Business Forward, Not Make It More Complicated."
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="lg:col-span-6 lg:pt-9"
        >
          <p className="text-[15px] leading-relaxed text-[#9aa9bf] sm:text-base">
            Businesses need more than disconnected tools and isolated services. They need
            technology that works together.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-[#9aa9bf] sm:text-base">
            At NetAISystems, we bring software development, intelligent automation, cloud
            engineering, business systems, and creative capabilities together to help
            organizations solve real problems and build for the future.
          </p>
        </motion.div>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {companyPrinciples.map((principle, index) => (
          <motion.div
            key={principle.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00c8ee]/40"
          >
            <p className="text-[10.5px] font-semibold tracking-[0.18em] text-[#55647e]">
              0{index + 1}
            </p>
            <h3 className="mt-3 text-[15px] font-semibold text-white">{principle.title}</h3>
            <p className="mt-2 max-w-xs text-[13.5px] leading-relaxed text-[#8e9db4]">
              {principle.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IntroSection;
