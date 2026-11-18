import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/common/PageHero.jsx';
import ServiceIndex from '@/components/common/ServiceIndex.jsx';
import SectionHeading from '@/components/common/SectionHeading.jsx';
import ProcessSteps from '@/components/common/ProcessSteps.jsx';
import CTASection from '@/components/common/CTASection.jsx';

const ServicesPage = () => (
  <div className="bg-[#0a0e27]">
    <Helmet>
      <title>Services | NetAISystems</title>
      <meta
        name="description"
        content="Explore the six NetAISystems service divisions: AI automation and agentic engineering, web and software development, DevOps and cloud, CRM and ERP systems, CGI and 3D, and UI/UX design."
      />
    </Helmet>

    <PageHero
      eyebrow="Services"
      title="Six areas of expertise. One technology partner."
      description="Each division has its own specialists and its own discipline. What they share is a single delivery process, one point of accountability, and a focus on solutions that keep working after launch."
      breadcrumb={[{ label: 'Services' }]}
    />

    <section className="py-16 md:py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Divisions"
              title="Choose a discipline, or bring us the problem."
              description="Most projects use more than one division. You do not need to decide the technical route before the first conversation."
            />
          </div>
          <div className="lg:col-span-7 lg:pt-10">
            <p className="max-w-xl text-[14px] leading-relaxed text-[#8e9db4]">
              A new platform usually needs design, engineering and cloud infrastructure. An
              automation project often needs a business system behind it. Select a division
              below to see what it covers, or{' '}
              <Link
                to="/start-project"
                className="font-medium text-[#5fd6ef] underline decoration-[#2a3552] underline-offset-4 hover:text-white"
              >
                start with your requirements
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="mt-10 md:mt-14">
          <ServiceIndex />
        </div>
      </div>
    </section>

    <section className="border-y border-[#1b2440] bg-[#080d1f] py-16 md:py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Connected delivery"
              title="The work connects, even when the divisions are different."
            />
          </div>
          <div className="lg:col-span-6">
            <div className="space-y-5">
              {[
                {
                  title: 'One brief, one plan',
                  text: 'Requirements are gathered once and translated into a single plan, rather than passed between separate suppliers.'
                },
                {
                  title: 'Decisions made together',
                  text: 'Design, engineering, infrastructure and automation choices are reviewed against the same business objective.'
                },
                {
                  title: 'One team after launch',
                  text: 'Support and improvement continue with the people who built the solution and understand its constraints.'
                }
              ].map((item) => (
                <div key={item.title} className="border-t border-[#1b2440] pt-5">
                  <h3 className="text-[14.5px] font-semibold text-white">{item.title}</h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#8e9db4]">
                    {item.text}
                  </p>
                </div>
              ))}
              <Link
                to="/about"
                className="inline-flex items-center gap-2 pt-2 text-[13px] font-semibold text-[#5fd6ef] transition-colors hover:text-white"
              >
                How we approach a project
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="How we work"
          title="The same process across every division."
          description="A structured path from understanding the problem to supporting what we build."
          align="center"
          className="mb-12 md:mb-16"
        />
        <ProcessSteps />
      </div>
    </section>

    <CTASection />
  </div>
);

export default ServicesPage;
