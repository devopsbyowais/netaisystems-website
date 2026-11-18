import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/common/PageHero.jsx';
import SectionHeading from '@/components/common/SectionHeading.jsx';
import ProcessSteps from '@/components/common/ProcessSteps.jsx';
import CTASection from '@/components/common/CTASection.jsx';
import { contact } from '@/data/site.js';
import { serviceDivisions } from '@/data/services.js';

const approach = [
  {
    title: 'Understanding the business problem',
    text: 'We begin with the situation behind the request: how work happens today, where it breaks down, and what a useful outcome would look like.'
  },
  {
    title: 'Selecting suitable technologies',
    text: 'Tools are chosen against the requirement, the existing systems and the team who will maintain the result — not by default.'
  },
  {
    title: 'Building around actual requirements',
    text: 'The solution is shaped around the real process rather than forcing the business into a predefined template.'
  },
  {
    title: 'Maintaining clear communication',
    text: 'Progress, decisions and constraints are discussed through scheduled reviews and shared documentation.'
  },
  {
    title: 'Delivering in structured stages',
    text: 'Work moves through discovery, planning, build and launch, with reviewable outputs at each stage.'
  }
];

const AboutPage = () => (
  <div className="bg-[#0a0e27]">
    <Helmet>
      <title>About | NetAISystems</title>
      <meta
        name="description"
        content="NetAISystems is a technology and digital solutions company helping businesses build, automate and improve their digital operations through AI automation, software, cloud, business systems and creative technology."
      />
    </Helmet>

    <PageHero
      eyebrow="About NetAISystems"
      title="Technology Built Around the Way Businesses Work."
      description="NetAISystems is a technology and digital solutions company focused on helping businesses build, automate, and improve their digital operations."
      breadcrumb={[{ label: 'About' }]}
      aside={
        <p className="border-t border-[#2a3552] pt-5 text-[12.5px] leading-relaxed text-[#8e9db4]">
          Based in {contact.location}. We work with teams wherever they operate, through
          scheduled reviews and shared documentation.
        </p>
      }
    />

    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="ambient-a" />
        <div className="ambient-b" />
      </div>
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Who we are" title="One company across the technology stack." />
          </div>
          <div className="lg:col-span-7">
            <div className="space-y-4">
              <p className="text-[15px] leading-relaxed text-[#9aa9bf] sm:text-base">
                Our capabilities span AI automation, software development, DevOps, business
                systems, and creative technology.
              </p>
              <p className="text-[15px] leading-relaxed text-[#9aa9bf] sm:text-base">
                We approach each project by understanding the business requirement first, then
                identifying the right combination of technology and expertise to deliver a
                practical solution.
              </p>
              <p className="text-[15px] leading-relaxed text-[#9aa9bf] sm:text-base">
                That approach keeps the work connected. A new platform can be designed, built,
                deployed and supported by the same team, with one view of what the business is
                trying to achieve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="border-y border-[#1b2440] bg-[#080d1f] py-16 md:py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-14">
          <div>
            <p className="eyebrow">Mission</p>
            <p className="mt-5 text-[1.3rem] font-medium leading-[1.4] tracking-[-0.02em] text-white sm:text-[1.55rem]">
              To help businesses make better use of technology through intelligent systems,
              reliable software, and practical digital solutions.
            </p>
          </div>
          <div className="md:border-l md:border-[#1b2440] md:pl-14">
            <p className="eyebrow">Vision</p>
            <p className="mt-5 text-[1.3rem] font-medium leading-[1.4] tracking-[-0.02em] text-white sm:text-[1.55rem]">
              To become a trusted technology partner for businesses looking to improve
              operations, develop digital products, and grow through technology.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Our approach"
              title="How we take a project from problem to delivery."
              description="No invented process. These are the principles that shape how engagements are run."
            />
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-[#1b2440]">
              {approach.map((item, index) => (
                <div
                  key={item.title}
                  className="grid grid-cols-[2.25rem_1fr] gap-x-4 border-b border-[#1b2440] py-5 md:grid-cols-[2.25rem_1fr_1.4fr] md:gap-x-8"
                >
                  <span className="pt-0.5 text-[9.5px] font-semibold tracking-[0.16em] text-[#55647e]">
                    0{index + 1}
                  </span>
                  <h3 className="text-[14.5px] font-semibold leading-snug text-white">
                    {item.title}
                  </h3>
                  <p className="col-start-2 mt-2 text-[13px] leading-relaxed text-[#8e9db4] md:col-start-auto md:mt-0">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="border-y border-[#1b2440] bg-[#080d1f] py-16 md:py-24">
      <div className="section-container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Capabilities"
            title="Six divisions, one standard of work."
            description="Each division can be engaged on its own or combined into a single programme."
          />
          <Link
            to="/services"
            className="inline-flex shrink-0 items-center gap-2 text-[13px] font-semibold text-[#5fd6ef] transition-colors hover:text-white"
          >
            All services
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 border-t border-[#1b2440] sm:grid-cols-2 lg:grid-cols-3">
          {serviceDivisions.map((division) => (
            <Link
              key={division.slug}
              to={`/services/${division.slug}`}
              className="group flex items-start justify-between gap-4 border-b border-[#1b2440] p-5 transition-colors hover:bg-white/[0.015] sm:odd:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n+1)]:border-r lg:[&:nth-child(3n+2)]:border-r"
            >
              <span>
                <span className="block text-[9.5px] tracking-[0.16em] text-[#55647e]">
                  {division.number}
                </span>
                <span className="mt-2 block text-[13.5px] font-semibold leading-snug text-white">
                  {division.title}
                </span>
                <span className="mt-1.5 block text-[12px] leading-relaxed text-[#8392a9]">
                  {division.summary}
                </span>
              </span>
              <ArrowUpRight
                className="mt-0.5 h-4 w-4 shrink-0 text-[#55647e] transition-colors group-hover:text-[#5fd6ef]"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="How we work"
          title="A clear process, from first conversation to delivery."
          className="mb-12 md:mb-16"
        />
        <ProcessSteps />
      </div>
    </section>

    <CTASection />
  </div>
);

export default AboutPage;
