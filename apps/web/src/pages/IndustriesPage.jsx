import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/common/PageHero.jsx';
import SectionHeading from '@/components/common/SectionHeading.jsx';
import CTASection from '@/components/common/CTASection.jsx';
import { industries } from '@/data/site.js';
import { serviceDivisions } from '@/data/services.js';

const divisionLabel = (slug) =>
  serviceDivisions.find((division) => division.slug === slug)?.shortTitle || slug;

const IndustriesPage = () => (
  <div className="bg-[#0a0e27]">
    <Helmet>
      <title>Industries | NetAISystems</title>
      <meta
        name="description"
        content="How NetAISystems capabilities apply to technology and SaaS, professional services, real estate, healthcare, construction, ecommerce and recruitment."
      />
    </Helmet>

    <PageHero
      eyebrow="Industries"
      title="Technology That Adapts to Your Industry."
      description="Different industries face different challenges. We develop technology solutions around the way businesses operate, serve customers, and manage their work."
      breadcrumb={[{ label: 'Industries' }]}
    />

    <section className="py-14 md:py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="How to read this page"
              title="Industry context changes the right solution."
              description="The same capabilities apply differently depending on regulation, customer expectations and how work is organised. Below is how we approach each sector, not a claim that we have served every one."
            />
          </div>

          <nav aria-label="Industries on this page" className="lg:col-span-5 lg:pt-9">
            <p className="text-[9.5px] font-semibold uppercase tracking-[0.18em] text-[#55647e]">
              On this page
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-0 border-t border-[#1b2440] sm:grid-cols-2 lg:grid-cols-1">
              {industries.map((industry) => (
                <li key={industry.slug} className="border-b border-[#1b2440]">
                  <a
                    href={`#${industry.slug}`}
                    className="flex items-center justify-between gap-4 py-2.5 text-[12.5px] text-[#8e9db4] transition-colors hover:text-white"
                  >
                    {industry.name}
                    <span className="text-[9.5px] tracking-[0.16em] text-[#55647e]">
                      {String(industries.indexOf(industry) + 1).padStart(2, '0')}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>

    <div className="border-t border-[#1b2440]">
      {industries.map((industry, index) => (
        <section
          key={industry.slug}
          id={industry.slug}
          className="scroll-mt-24 border-b border-[#1b2440] py-10 md:py-14"
        >
          <div className="section-container">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-3">
                <p className="text-[9.5px] font-semibold tracking-[0.18em] text-[#55647e]">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h2 className="mt-3 text-[1.35rem] font-semibold tracking-[-0.025em] text-white">
                  {industry.name}
                </h2>
                <p className="mt-2 max-w-xs text-[12.5px] leading-relaxed text-[#8392a9]">
                  {industry.summary}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:col-span-9">
                <div>
                  <h3 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#71809b]">
                    Typical challenges
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {industry.challenges.map((challenge) => (
                      <li
                        key={challenge}
                        className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-[#a7b4c8]"
                      >
                        <span
                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#5fd6ef]"
                          aria-hidden="true"
                        />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#71809b]">
                    Relevant solutions
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {industry.solutions.map((solution) => (
                      <li
                        key={solution}
                        className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-[#a7b4c8]"
                      >
                        <span
                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#5fd6ef]"
                          aria-hidden="true"
                        />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#71809b]">
                    Divisions involved
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {industry.divisions.map((slug) => (
                      <li key={slug}>
                        <Link
                          to={`/services/${slug}`}
                          className="group inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#8e9db4] transition-colors hover:text-[#5fd6ef]"
                        >
                          {divisionLabel(slug)}
                          <ArrowUpRight
                            className="h-3 w-3 opacity-60 transition-opacity group-hover:opacity-100"
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/start-project`}
                    className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#5fd6ef] transition-colors hover:text-white"
                  >
                    Discuss your context
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>

    <section className="py-16 md:py-20">
      <div className="section-container">
        <p className="max-w-2xl text-[12.5px] leading-relaxed text-[#71809b]">
          These industries describe where our capabilities apply. They are not a claim of
          existing clients or completed projects in every sector. Genuine, inspectable work is
          published on the{' '}
          <Link to="/work" className="text-[#8fdff0] underline decoration-[#2a3552] underline-offset-4 hover:text-white">
            Work page
          </Link>
          .
        </p>
      </div>
    </section>

    <CTASection
      title="Tell us about your sector and the outcome you need."
      description="We will map the right combination of automation, software, infrastructure and design for your context."
    />
  </div>
);

export default IndustriesPage;
