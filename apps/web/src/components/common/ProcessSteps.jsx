import React from 'react';
import { motion } from 'framer-motion';
import { workProcess } from '@/data/site.js';

/**
 * Numbered delivery process, shared by the homepage and service pages.
 * Rendered as an editorial timeline: one rule, four stages, no cards.
 */
const ProcessSteps = ({ compact = false }) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
    {workProcess.map((step, index) => (
      <motion.div
        key={step.step}
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
        className="relative rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00c8ee]/40"
      >
        <span
          className="absolute left-6 -top-2 h-2 w-2 rounded-full bg-[#00c8ee]"
          aria-hidden="true"
        />
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5fd6ef]">
          {step.step}
        </p>
        <h3
          className={`mt-3 font-semibold text-white ${
            compact ? 'text-base' : 'text-lg md:text-xl'
          }`}
        >
          {step.title}
        </h3>
        <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-[#8e9db4]">
          {step.description}
        </p>
      </motion.div>
    ))}
  </div>
);

export default ProcessSteps;
