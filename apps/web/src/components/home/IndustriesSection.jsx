import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading.jsx';
import { industries } from '@/data/site.js';

const IndustriesSection = () => (
  <section className="relative overflow-hidden border-y border-[#1b2440] bg-[#080d1f] py-20 md:py-28">
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="ambient-a" />
      <div className="ambient-b" />
    </div>
    <div className="section-container relative z-10">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-6">
          <SectionHeading eyebrow="Industries" title="Technology That Adapts to Your Industry." />
        </div>
        <div className="lg:col-span-6 lg:pt-9">
          <p className="max-w-lg text-[15px] leading-relaxed text-[#9aa9bf] sm:text-base">
            Different industries face different challenges. We develop technology solutions
            around the way businesses operate, serve customers, and manage their work.
          </p>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((industry, index) => (
          <div
            key={industry.slug}
            className="group rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00c8ee]/40 hover:bg-white/[0.05]"
          >
            <p className="text-[9.5px] font-semibold tracking-[0.18em] text-[#55647e]">
              0{index + 1}
            </p>
            <h3 className="mt-3 text-[14.5px] font-semibold leading-snug text-white">
              {industry.name}
            </h3>
            <p className="mt-2 text-[12.5px] leading-relaxed text-[#8392a9]">
              {industry.summary}
            </p>
          </div>
        ))}

        <Link
          to="/industries"
          className="group flex flex-col justify-between gap-8 rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00c8ee]/40 hover:bg-white/[0.05]"
        >
          <p className="text-[9.5px] font-semibold uppercase tracking-[0.18em] text-[#55647e]">
            All sectors
          </p>
          <span className="inline-flex items-center gap-2 text-[13px] font-medium text-[#5fd6ef]">
            How we work across industries
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        </Link>
      </div>

      <p className="mt-6 text-[12px] leading-relaxed text-[#71809b]">
        These are industries our capabilities can serve, not a claim of existing clients in
        every sector.
      </p>
    </div>
  </section>
);

export default IndustriesSection;
