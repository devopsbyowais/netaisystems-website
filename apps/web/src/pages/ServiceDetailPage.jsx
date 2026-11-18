import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown, Check, ExternalLink } from 'lucide-react';
import PageHero from '@/components/common/PageHero.jsx';
import ButtonLink from '@/components/common/ButtonLink.jsx';
import SectionHeading from '@/components/common/SectionHeading.jsx';
import ProcessSteps from '@/components/common/ProcessSteps.jsx';
import CTASection from '@/components/common/CTASection.jsx';
import { getServiceDivision, getRelatedDivisions } from '@/data/services.js';

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const division = getServiceDivision(slug);

  if (!division) {
    return <Navigate to="/services" replace />;
  }

  const relatedDivisions = getRelatedDivisions(division.slug);

  return (
    <div className="bg-[#0a0e27]">
      <Helmet>
        <title>{`${division.title} | NetAISystems`}</title>
        <meta
          name="description"
          content={`${division.heroHeading} ${division.summary}`}
        />
      </Helmet>

      <PageHero
        eyebrow={`Service ${division.number}`}
        title={division.heroHeading}
        description={division.summary}
        breadcrumb={[
          { label: 'Services', href: '/services' },
          { label: division.shortTitle }
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink to={`/start-project?service=${division.slug}`} withArrow>
            Start Your Project
          </ButtonLink>
          <ButtonLink to="/services" variant="secondary">
            All Services
          </ButtonLink>
        </div>
      </PageHero>

      {/* Overview */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="ambient-a" />
          <div className="ambient-b" />
        </div>
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <h2 className="text-[1.5rem] font-semibold tracking-[-0.025em] text-white sm:text-[1.8rem]">
                What this division does
              </h2>
              <div className="mt-5 space-y-4">
                {division.intro.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="max-w-2xl text-[15px] leading-relaxed text-[#9aa9bf]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 lg:pl-6">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm sm:p-6">
                <div className="border-t border-[#2a3552] pt-0">
                <p className="text-[9.5px] font-semibold uppercase tracking-[0.18em] text-[#55647e]">
                  At a glance
                </p>
                <dl className="mt-5 space-y-4 text-[13px]">
                  <div className="flex items-baseline justify-between gap-4 border-b border-[#1b2440] pb-4">
                    <dt className="text-[#8e9db4]">Division</dt>
                    <dd className="text-right font-medium text-white">
                      {division.number} / 06
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-[#1b2440] pb-4">
                    <dt className="text-[#8e9db4]">Capabilities</dt>
                    <dd className="font-medium text-white">{division.offerings.length}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-[#1b2440] pb-4">
                    <dt className="text-[#8e9db4]">Delivery</dt>
                    <dd className="text-right font-medium text-white">
                      Discover → Support
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-[#8e9db4]">Next step</dt>
                    <dd>
                      <Link
                        to={`/start-project?service=${division.slug}`}
                        className="font-medium text-[#5fd6ef] hover:text-white"
                      >
                        Start Your Project
                      </Link>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* What we offer */}
      <section className="border-y border-[#1b2440] bg-[#080d1f] py-16 md:py-24">
        <div className="section-container">
          <SectionHeading
            eyebrow="What we offer"
            title="Capabilities within this division."
            description="The specific work we deliver. Engagements can use one capability or combine several."
            className="mb-12 md:mb-16"
          />

          <div className="grid grid-cols-1 gap-x-12 gap-y-0 md:grid-cols-2">
            {division.offerings.map((offering, index) => (
              <motion.div
                key={offering.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (index % 2) * 0.05, ease: 'easeOut' }}
                className="border-t border-[#1b2440] py-6"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-[9.5px] font-semibold tracking-[0.16em] text-[#55647e]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold leading-snug text-white">
                      {offering.name}
                    </h3>
                    <p className="mt-1.5 max-w-md text-[13.5px] leading-relaxed text-[#8e9db4]">
                      {offering.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems and deliverables */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <SectionHeading eyebrow="The problem" title="What this usually solves." className="mb-8" />
              <ul className="border-t border-[#1b2440]">
                {division.problems.map((problem) => (
                  <li
                    key={problem}
                    className="flex items-start gap-3 border-b border-[#1b2440] py-3.5 text-[13.5px] leading-relaxed text-[#a7b4c8]"
                  >
                    <span
                      className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#5fd6ef]"
                      aria-hidden="true"
                    />
                    {problem}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="Typical deliverables"
                title="What a client receives."
                className="mb-8"
              />
              <ul className="grid grid-cols-1 gap-y-3 border-t border-[#1b2440] pt-6 sm:grid-cols-2 sm:gap-x-6">
                {division.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex items-start gap-2.5">
                    <Check
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#5fd6ef]"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    <span className="text-[13.5px] leading-relaxed text-[#a7b4c8]">
                      {deliverable}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases or design principles */}
      {(division.useCases || division.designPrinciples) && (
        <section className="border-y border-[#1b2440] bg-[#080d1f] py-16 md:py-20">
          <div className="section-container">
            {division.useCases && (
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
                <div className="lg:col-span-5">
                  <SectionHeading eyebrow="Typical use cases" title="Where this work applies." />
                </div>
                <ul className="grid grid-cols-1 gap-x-8 gap-y-0 sm:grid-cols-2 lg:col-span-7">
                  {division.useCases.map((useCase) => (
                    <li
                      key={useCase}
                      className="border-t border-[#1b2440] py-4 text-[13.5px] text-[#a7b4c8]"
                    >
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {division.designPrinciples && (
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
                <div className="lg:col-span-5">
                  <SectionHeading
                    eyebrow="Design principles"
                    title="What guides the work."
                  />
                </div>
                <ul className="grid grid-cols-1 gap-x-8 gap-y-0 sm:grid-cols-2 lg:col-span-7">
                  {division.designPrinciples.map((principle) => (
                    <li
                      key={principle}
                      className="flex items-center gap-3 border-t border-[#1b2440] py-4 text-[13.5px] text-[#a7b4c8]"
                    >
                      <span
                        className="h-1 w-1 shrink-0 rounded-full bg-[#5fd6ef]"
                        aria-hidden="true"
                      />
                      {principle}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Featured product */}
      {division.relatedProduct && (
        <section className="py-16 md:py-20">
          <div className="section-container">
            <div className="grid grid-cols-1 gap-8 border-t border-[#2a3552] pt-8 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <p className="eyebrow">{division.relatedProduct.label}</p>
                <h2 className="mt-3 text-[1.6rem] font-semibold tracking-[-0.03em] text-white sm:text-[2rem]">
                  {division.relatedProduct.name}
                </h2>
                <p className="mt-1 text-[13px] font-medium text-[#5fd6ef]">
                  {division.relatedProduct.subtitle}
                </p>
              </div>
              <div className="lg:col-span-7">
                <p className="max-w-xl text-[14.5px] leading-relaxed text-[#9aa9bf]">
                  {division.relatedProduct.description}
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink to={division.relatedProduct.href} withArrow>
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
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Technologies */}
      {division.technologies?.length > 0 && (
        <section className="border-y border-[#1b2440] bg-[#080d1f] py-16 md:py-20">
          <div className="section-container">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-4">
                <SectionHeading
                  eyebrow="Tools & technologies"
                  title="Selected because they fit."
                  description="Technology is chosen during planning, not by default. Each item below has a specific role in the work."
                />
              </div>
              <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:col-span-8">
                {division.technologies.map((technology) => (
                  <div key={technology.name} className="border-t border-[#1b2440] py-4">
                    <h3 className="text-[13.5px] font-semibold text-white">
                      {technology.name}
                    </h3>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-[#8e9db4]">
                      {technology.purpose}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <SectionHeading
            eyebrow="Our working process"
            title="How an engagement runs."
            description="The same four stages apply regardless of the division involved."
            className="mb-12 md:mb-16"
          />
          <ProcessSteps compact />
        </div>
      </section>

      {/* FAQs */}
      {division.faqs?.length > 0 && (
        <section className="border-t border-[#1b2440] py-16 md:py-20">
          <div className="section-container">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-4">
                <SectionHeading eyebrow="FAQs" title="Common questions." />
              </div>
              <div className="lg:col-span-8">
                {division.faqs.map((faq) => (
                  <details
                    key={faq.q}
                    className="group border-b border-[#1b2440] py-5 first:border-t"
                  >
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
                      <span className="text-[14px] font-medium text-white">{faq.q}</span>
                      <ChevronDown
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#71809b] transition-transform group-open:rotate-180"
                        aria-hidden="true"
                      />
                    </summary>
                    <p className="mt-3 max-w-2xl text-[13.5px] leading-relaxed text-[#8e9db4]">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Other divisions */}
      <section className="border-t border-[#1b2440] py-14 md:py-16">
        <div className="section-container">
          <p className="text-[9.5px] font-semibold uppercase tracking-[0.18em] text-[#55647e]">
            Other divisions
          </p>
          <div className="mt-5 grid grid-cols-1 border-t border-[#1b2440] sm:grid-cols-2 lg:grid-cols-5">
            {relatedDivisions.map((item) => (
              <Link
                key={item.slug}
                to={`/services/${item.slug}`}
                className="group flex items-start justify-between gap-3 border-b border-[#1b2440] py-4 pr-4 transition-colors hover:text-white sm:border-r lg:border-b-0"
              >
                <span>
                  <span className="block text-[9.5px] tracking-[0.16em] text-[#55647e]">
                    {item.number}
                  </span>
                  <span className="mt-1.5 block text-[12.5px] font-medium leading-snug text-[#a7b4c8] transition-colors group-hover:text-white">
                    {item.title}
                  </span>
                </span>
                <ArrowUpRight
                  className="mt-1 h-3.5 w-3.5 shrink-0 text-[#55647e] transition-colors group-hover:text-[#5fd6ef]"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={division.ctaTitle}
        description="Share your requirements and we will come back with a clear view of scope, approach and next steps."
      />
    </div>
  );
};

export default ServiceDetailPage;
