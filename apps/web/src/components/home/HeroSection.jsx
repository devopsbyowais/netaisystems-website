import React from 'react';
import { motion } from 'framer-motion';
import ButtonLink from '@/components/common/ButtonLink.jsx';

const layers = [
  { label: 'Experience', items: 'Websites · Interfaces · Visual content' },
  { label: 'Intelligence', items: 'AI agents · Workflows · Knowledge systems' },
  { label: 'Operations', items: 'CRM / ERP · Business systems · Reporting' },
  { label: 'Foundation', items: 'Cloud · Deployment · Monitoring' }
];

const HeroSection = () => (
  <section className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(ellipse_at_20%_0%,rgba(0,200,238,0.10),transparent_60%)]" />
      <div className="absolute bottom-0 left-1/2 h-px w-[86%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#1b2440] to-transparent" />
    </div>
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="ambient-a" />
      <div className="ambient-b" />
    </div>

    <div className="section-container relative z-10">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="lg:col-span-7"
        >
          <p className="mb-7 inline-flex items-center gap-2.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#8e9db4] sm:tracking-[0.2em]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00c8ee]" aria-hidden="true" />
            Technology &amp; digital solutions agency
          </p>

          <h1 className="max-w-2xl text-[clamp(2rem,9vw,2.45rem)] font-semibold leading-[1.03] tracking-[-0.04em] text-white sm:text-[3.1rem] lg:text-[3.55rem]">
            We Build the Technology Behind{' '}
            <span className="text-[#5fd6ef]">Better Businesses.</span>
          </h1>

          <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-[#9aa9bf] sm:text-[16.5px]">
            From intelligent AI systems and custom software to cloud infrastructure and digital
            experiences, NetAISystems turns complex business requirements into practical
            technology solutions.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/start-project" withArrow>
              Start Your Project
            </ButtonLink>
            <ButtonLink to="/services" variant="secondary">
              Explore Our Services
            </ButtonLink>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <span className="h-px w-10 bg-[#2a3552]" aria-hidden="true" />
            <p className="text-[11.5px] leading-relaxed text-[#71809b]">
              One partner across six divisions — from first conversation to support.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12, ease: 'easeOut' }}
          className="lg:col-span-5"
        >
          <div className="relative mx-auto max-w-md lg:ml-auto lg:mr-0">
            <div className="relative rounded-xl border border-white/10 bg-white/[0.045] p-5 shadow-[0_24px_70px_-30px_rgba(0,0,0,0.75)] backdrop-blur-md sm:p-6">
              <div className="flex items-center justify-between gap-4 border-b border-[#1b2440] pb-4">
                <span className="text-[9.5px] font-semibold uppercase tracking-[0.2em] text-[#71809b]">
                  One partner · Six divisions
                </span>
                <span className="inline-flex items-center gap-1.5 text-[9.5px] uppercase tracking-[0.14em] text-[#5fd6ef]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00c8ee]" aria-hidden="true" />
                  Connected
                </span>
              </div>

              <ul>
                {layers.map((layer, index) => (
                  <li key={layer.label} className="relative flex gap-4 py-4">
                    <div className="relative flex w-3 shrink-0 justify-center">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 rounded-full border border-[#5fd6ef]/70 bg-[#0b1226]"
                        aria-hidden="true"
                      />
                      {index < layers.length - 1 && (
                        <span
                          className="absolute bottom-[-1rem] top-4 w-px bg-[#243050]"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="text-[12.5px] font-medium text-white">
                          {layer.label}
                        </span>
                        <span className="text-[9.5px] tracking-[0.16em] text-[#55647e]">
                          0{index + 1}
                        </span>
                      </div>
                      <p className="mt-1 text-[11.5px] leading-relaxed text-[#8392a9]">
                        {layer.items}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-1 flex items-center gap-4 border-t border-[#1b2440] pt-4">
                <span className="text-[10.5px] leading-relaxed text-[#71809b]">
                  Built, integrated and supported by NetAISystems
                </span>
                <span
                  className="h-px flex-1 bg-gradient-to-r from-[#243050] to-[#00c8ee]/40"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
