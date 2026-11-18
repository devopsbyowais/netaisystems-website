import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import ButtonLink from '@/components/common/ButtonLink.jsx';

const capabilities = [
  'Connects with existing tools, APIs and data',
  'Keeps context across sessions and teams',
  'Chat-based access to business information',
  'Orchestrates multi-step business workflows',
  'Runs in production with built-in monitoring',
  'Provides visibility across connected operations'
];

const ZodAgentSection = () => (
  <section className="relative overflow-hidden border-b border-[#1b2440] py-20 md:py-28">
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="ambient-a" />
      <div className="ambient-b" />
    </div>
    <div className="section-container relative z-10">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="lg:col-span-6"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-6 bg-[#00c8ee]/70" aria-hidden="true" />
            <p className="eyebrow">Featured product</p>
          </div>

          <h2 className="max-w-md text-[1.8rem] font-semibold leading-[1.1] tracking-[-0.03em] text-white sm:text-[2.2rem] lg:text-[2.4rem]">
            Business Management, Made More Intelligent.
          </h2>

          <p className="mt-6 text-[15px] font-semibold text-[#5fd6ef] sm:text-base">
            ZodAgent — AI-Powered ERP
          </p>
          <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-[#9aa9bf] sm:text-base">
            ZodAgent is an AI-powered ERP system developed by NetAISystems to help businesses
            manage and streamline their operations through an intelligent, centralized
            platform.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/zodagent" withArrow>
              Explore ZodAgent
            </ButtonLink>
            <a
              href="https://www.zodagent.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-[#2a3552] px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-[#5fd6ef]/60 hover:bg-white/[0.04]"
            >
              Official website
              <ExternalLink className="h-4 w-4 text-[#8e9db4]" aria-hidden="true" />
            </a>
          </div>

          <p className="mt-5 text-[12px] text-[#71809b]">
            Part of our CRM, ERP &amp; Business Systems division.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="lg:col-span-6"
        >
          <div className="relative">
            <div className="relative rounded-xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-md shadow-[0_30px_80px_-28px_rgba(0,0,0,0.65)] sm:p-7">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-[9.5px] font-semibold uppercase tracking-[0.2em] text-[#71809b]">
                    Product
                  </p>
                  <p className="mt-3 text-[1.6rem] font-semibold leading-none tracking-[-0.03em] text-white">
                    ZodAgent
                  </p>
                  <p className="mt-2 text-[12px] font-medium text-[#5fd6ef]">
                    AI-Powered ERP System
                  </p>
                </div>
                <span className="rounded border border-[#2a3552] px-2.5 py-1 text-[9.5px] uppercase tracking-[0.14em] text-[#8e9db4]">
                  NetAISystems
                </span>
              </div>

              <div className="my-6 h-px bg-[#1b2440]" aria-hidden="true" />

              <ul className="space-y-3">
                {capabilities.map((capability, index) => (
                  <li key={capability} className="flex items-start gap-3">
                    <span className="mt-0.5 text-[9.5px] tracking-[0.14em] text-[#55647e]">
                      0{index + 1}
                    </span>
                    <span className="text-[12.5px] leading-relaxed text-[#a7b4c8]">
                      {capability}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#1b2440] pt-4">
                <span className="text-[10.5px] text-[#71809b]">
                  Built and supported by NetAISystems
                </span>
                <Link
                  to="/zodagent"
                  className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#5fd6ef] transition-colors hover:text-white"
                >
                  About the product
                  <ArrowRight className="h-3 w-3" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ZodAgentSection;
