import React from 'react';
import { motion } from 'framer-motion';
import ButtonLink from '@/components/common/ButtonLink.jsx';

/**
 * Closing conversion band used at the bottom of every page.
 * Deliberately quiet: a rule, one statement and one action.
 */
const CTASection = ({
  eyebrow = 'Start your project',
  title = 'Have a Challenge Worth Solving?',
  description = "Tell us what you want to build, improve, or automate. Let's explore the right technology solution for your business.",
  buttonLabel = 'Start Your Project',
  secondary = null
}) => (
  <section className="relative overflow-hidden border-t border-[#1b2440] bg-[#080d1f] py-20 md:py-28">
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(ellipse_at_50%_100%,rgba(0,200,238,0.08),transparent_70%)]"
      aria-hidden="true"
    />
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="ambient-a" />
      <div className="ambient-b" />
    </div>
    <div className="section-container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="grid grid-cols-1 items-end gap-10 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-10 backdrop-blur-md sm:px-14 sm:py-12 lg:grid-cols-12 lg:gap-12"
      >
        <div className="lg:col-span-8">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-6 bg-[#00c8ee]/70" aria-hidden="true" />
            <p className="eyebrow">{eyebrow}</p>
          </div>
          <h2 className="max-w-2xl text-[clamp(1.7rem,7vw,2rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-white sm:text-[2.6rem] lg:text-[3rem]">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#9aa9bf] sm:text-base">
            {description}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
          <ButtonLink to="/start-project" withArrow>
            {buttonLabel}
          </ButtonLink>
          {secondary}
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
