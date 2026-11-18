import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading.jsx';
import ServiceIndex from '@/components/common/ServiceIndex.jsx';

const ServicesSection = () => (
  <section
    id="services"
    className="relative overflow-hidden border-y border-[#1b2440] bg-[#080d1f] bg-pattern-grid py-20 md:py-28"
  >
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="ambient-a" />
      <div className="ambient-b" />
    </div>
    <div className="section-container relative z-10">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="What we do"
          title="Everything You Need to Build, Automate and Scale."
          description="Explore our six areas of expertise, each designed to address a different part of your digital and technology journey."
        />
        <Link
          to="/services"
          className="inline-flex shrink-0 items-center gap-2 text-[13px] font-semibold text-[#5fd6ef] transition-colors hover:text-white"
        >
          All services
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="mt-12 md:mt-14">
        <ServiceIndex />
      </div>

      <p className="mt-8 text-[13px] leading-relaxed text-[#8e9db4]">
        Not sure which division fits?{' '}
        <Link
          to="/start-project"
          className="font-medium text-[#5fd6ef] underline decoration-[#2a3552] underline-offset-4 transition-colors hover:text-white hover:decoration-[#5fd6ef]/60"
        >
          Tell us the problem
        </Link>{' '}
        and we will map the right combination.
      </p>
    </div>
  </section>
);

export default ServicesSection;
