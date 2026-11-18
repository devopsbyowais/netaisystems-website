import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { serviceDivisions } from '@/data/services.js';

/**
 * Editorial service index used on the homepage and services page.
 * Numbered rows rather than six repeated cards.
 */
const ServiceIndex = () => (
  <ol className="border-t border-[#1b2440]">
    {serviceDivisions.map((division) => (
      <li key={division.slug} className="min-w-0 border-b border-[#1b2440]">
        <Link
          to={`/services/${division.slug}`}
          className="group grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-4 gap-y-2 py-6 transition-colors hover:bg-white/[0.015] md:grid-cols-12 md:items-baseline md:gap-8 md:py-8"
        >
          <span className="pt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#55647e] md:col-span-1">
            {division.number}
          </span>

          <h3 className="text-[15px] font-semibold leading-snug text-white transition-colors group-hover:text-[#9fe8f7] md:col-span-4 md:text-[17px]">
            {division.title}
          </h3>

          <p className="col-start-2 max-w-md text-[13.5px] leading-relaxed text-[#8e9db4] md:col-span-5 md:col-start-auto md:text-sm">
            {division.summary}
          </p>

          <span className="col-start-2 mt-1 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#5fd6ef] md:col-span-2 md:col-start-auto md:mt-0 md:justify-self-end">
            Explore
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        </Link>
      </li>
    ))}
  </ol>
);

export default ServiceIndex;
