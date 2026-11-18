import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import PageHero from '@/components/common/PageHero.jsx';
import ButtonLink from '@/components/common/ButtonLink.jsx';
import CTASection from '@/components/common/CTASection.jsx';
import { workProjects } from '@/data/work.js';

const WorkPage = () => (
  <div className="bg-[#0a0e27]">
    <Helmet>
      <title>Work | NetAISystems</title>
      <meta
        name="description"
        content="Genuine NetAISystems projects: ZodAgent, our AI-powered ERP system, and live demonstrations of AI agents, workflow automation and retrieval-based assistants."
      />
    </Helmet>

    <PageHero
      eyebrow="Work"
      title="Real Projects. Practical Technology."
      description="Explore selected digital products and development projects that demonstrate our approach to building useful technology."
      breadcrumb={[{ label: 'Work' }]}
    />

    <section className="border-b border-[#1b2440] py-10 md:py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-12">
          <p className="text-[9.5px] font-semibold uppercase tracking-[0.18em] text-[#55647e] lg:col-span-2">
            A note on this page
          </p>
          <p className="max-w-2xl text-[13px] leading-relaxed text-[#8e9db4] lg:col-span-8">
            Only work that genuinely exists is published here. Client engagements are added
            only when the client has approved what can be shared. No testimonials, client
            names, performance figures or outcomes are invented.
          </p>
        </div>
      </div>
    </section>

    <div>
      {workProjects.map((project, index) => (
        <article
          key={project.slug}
          id={project.slug}
          className="scroll-mt-24 border-b border-[#1b2440] py-14 md:py-20"
        >
          <div className="section-container">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-3">
                <p className="text-[9.5px] font-semibold tracking-[0.18em] text-[#55647e]">
                  {String(index + 1).padStart(2, '0')} · {project.type}
                </p>
                <p className="mt-2 text-[11.5px] text-[#71809b]">{project.category}</p>

                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    to={project.href}
                    className="group inline-flex items-center gap-2 text-[12.5px] font-semibold text-[#5fd6ef] transition-colors hover:text-white"
                  >
                    {project.linkLabel}
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-9">
                <h2 className="text-[1.8rem] font-semibold leading-[1.1] tracking-[-0.03em] text-white sm:text-[2.2rem]">
                  {project.title}
                </h2>
                <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#a7b4c8]">
                  {project.overview}
                </p>

                <div className="mt-9 grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="border-t border-[#2a3552] pt-5">
                    <h3 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#71809b]">
                      Problem / objective
                    </h3>
                    <p className="mt-3 text-[13px] leading-relaxed text-[#8e9db4]">
                      {project.objective}
                    </p>
                  </div>
                  <div className="border-t border-[#2a3552] pt-5">
                    <h3 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#71809b]">
                      Solution developed
                    </h3>
                    <p className="mt-3 text-[13px] leading-relaxed text-[#8e9db4]">
                      {project.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-9 grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#71809b]">
                      Relevant features
                    </h3>
                    <ul className="mt-3 grid grid-cols-1 gap-2.5">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5">
                          <Check
                            className="mt-0.5 h-3 w-3 shrink-0 text-[#5fd6ef]"
                            strokeWidth={2.5}
                            aria-hidden="true"
                          />
                          <span className="text-[12.5px] leading-relaxed text-[#a7b4c8]">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#71809b]">
                      Technology used
                    </h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <li
                          key={technology}
                          className="rounded border border-[#232f4d] px-2.5 py-1 text-[11.5px] text-[#8e9db4]"
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="mt-8 border-l border-[#2a3552] pl-4 text-[11.5px] leading-relaxed text-[#71809b]">
                  {project.note}
                </p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>

    <section className="py-16 md:py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h2 className="text-[1.5rem] font-semibold tracking-[-0.025em] text-white sm:text-[1.8rem]">
              Looking for work closer to your project?
            </h2>
            <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-[#9aa9bf]">
              Tell us what you are building and we will walk you through the most relevant
              examples, the decisions behind them and how a similar approach could apply to
              your requirements.
            </p>
          </div>
          <div className="lg:col-span-5 lg:flex lg:justify-end">
            <ButtonLink to="/start-project" withArrow>
              Start Your Project
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>

    <CTASection
      title="Have a Challenge Worth Solving?"
      description="Tell us what you want to build, improve, or automate. Let's explore the right technology solution for your business."
    />
  </div>
);

export default WorkPage;
