import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading.jsx';
import { workProjects } from '@/data/work.js';

const WorkSection = () => (
  <section className="relative overflow-hidden py-20 md:py-28">
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="ambient-a" />
      <div className="ambient-b" />
    </div>
    <div className="section-container relative z-10">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Selected work"
          title="Real Projects. Practical Technology."
          description="Explore selected digital products and development projects that demonstrate our approach to building useful technology."
        />
        <Link
          to="/work"
          className="inline-flex shrink-0 items-center gap-2 text-[13px] font-semibold text-[#5fd6ef] transition-colors hover:text-white"
        >
          View all work
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6">
        {workProjects.map((project, index) => (
          <Link
            key={project.slug}
            to={project.href}
            className="group grid grid-cols-1 gap-x-8 gap-y-3 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00c8ee]/40 hover:bg-white/[0.04] md:grid-cols-12 md:items-baseline"
          >
            <div className="md:col-span-2">
              <p className="text-[9.5px] font-semibold uppercase tracking-[0.18em] text-[#55647e]">
                0{index + 1} · {project.type}
              </p>
            </div>

            <div className="md:col-span-4">
              <h3 className="text-[1.15rem] font-semibold text-white transition-colors group-hover:text-[#9fe8f7] sm:text-[1.3rem]">
                {project.title}
              </h3>
              <p className="mt-1 text-[11.5px] text-[#71809b]">{project.category}</p>
            </div>

            <p className="max-w-md text-[13.5px] leading-relaxed text-[#8e9db4] md:col-span-4">
              {project.summary}
            </p>

            <span className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#5fd6ef] md:col-span-2 md:justify-self-end">
              View project
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default WorkSection;
