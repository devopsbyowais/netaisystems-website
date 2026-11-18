import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, ExternalLink } from 'lucide-react';
import PageHero from '@/components/common/PageHero.jsx';
import ButtonLink from '@/components/common/ButtonLink.jsx';
import SectionHeading from '@/components/common/SectionHeading.jsx';
import CTASection from '@/components/common/CTASection.jsx';

const capabilities = [
  {
    title: 'Connected business data',
    text: 'Connects with existing tools, APIs and data so operational information is not confined to separate applications.'
  },
  {
    title: 'Context that carries',
    text: 'Keeps context across sessions and teams, reducing the need to repeat the background of a task.'
  },
  {
    title: 'Plain-language access',
    text: 'Gives teams chat-based access to the business information held in the platform.'
  },
  {
    title: 'Multi-step workflows',
    text: 'Orchestrates complex, multi-step business workflows using defined tools and business rules.'
  },
  {
    title: 'Production operation',
    text: 'Deploys to production with built-in monitoring, so the platform can be operated rather than just demonstrated.'
  },
  {
    title: 'Operational visibility',
    text: 'Provides real-time visibility into connected operations and the points that need attention.'
  }
];

const ZodAgentPage = () => (
  <div className="bg-[#0a0e27]">
    <Helmet>
      <title>ZodAgent — AI-Powered ERP | NetAISystems</title>
      <meta
        name="description"
        content="ZodAgent is an AI-powered ERP system by NetAISystems, designed to help businesses manage and streamline operations through one intelligent, centralized platform."
      />
    </Helmet>

    <PageHero
      eyebrow="Product · NetAISystems"
      title="ZodAgent — AI-Powered ERP"
      description="ZodAgent is an AI-powered ERP system developed by NetAISystems to help businesses manage and streamline their operations through an intelligent, centralized platform."
      breadcrumb={[{ label: 'Products', href: '/products' }, { label: 'ZodAgent' }]}
      aside={
        <dl className="border-t border-[#2a3552] pt-5 text-[12px]">
          <div className="flex items-baseline justify-between gap-4 border-b border-[#1b2440] pb-3">
            <dt className="text-[#71809b]">Category</dt>
            <dd className="text-right font-medium text-white">AI-Powered ERP</dd>
          </div>
          <div className="flex items-baseline justify-between gap-4 border-b border-[#1b2440] py-3">
            <dt className="text-[#71809b]">Developed by</dt>
            <dd className="font-medium text-white">NetAISystems</dd>
          </div>
          <div className="flex items-baseline justify-between gap-4 py-3">
            <dt className="text-[#71809b]">Division</dt>
            <dd className="text-right font-medium text-white">CRM, ERP &amp; Business Systems</dd>
          </div>
        </dl>
      }
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <ButtonLink to="/start-project?service=zodagent" withArrow>
          Start Your Project
        </ButtonLink>
        <a
          href="https://www.zodagent.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-[#2a3552] px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-[#5fd6ef]/60 hover:bg-white/[0.04]"
        >
          Visit official website
          <ExternalLink className="h-4 w-4 text-[#8e9db4]" aria-hidden="true" />
        </a>
      </div>
    </PageHero>

    <section className="py-16 md:py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Overview" title="What ZodAgent is." />
          </div>
          <div className="lg:col-span-7">
            <p className="text-[15px] leading-relaxed text-[#9aa9bf] sm:text-base">
              ZodAgent is an AI-powered ERP system for managing and streamlining business
              operations from a single, centralized platform. It brings tools, data and
              workflows together so a team can run day-to-day operations with intelligent
              automation built in.
            </p>
            <p className="mt-4 text-[14px] leading-relaxed text-[#8e9db4]">
              It is not a separate chatbot bolted onto an existing system. The platform is the
              operating environment: connected records, workflows and business context in one
              place, with an intelligent layer that helps teams use them.
            </p>

            <div className="mt-8 border-t border-[#1b2440] pt-6">
              <p className="text-[9.5px] font-semibold uppercase tracking-[0.18em] text-[#55647e]">
                The practical difference
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  'Less time reconciling information between separate systems.',
                  'Fewer routine updates performed by hand.',
                  'A clearer view of what is happening across connected operations.'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#5fd6ef]"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    <span className="text-[13.5px] leading-relaxed text-[#a7b4c8]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="border-y border-[#1b2440] bg-[#080d1f] py-16 md:py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Capabilities"
          title="What the platform provides."
          description="Verified product capabilities. The list is kept to what the current product supports."
          className="mb-12 md:mb-16"
        />

        <div className="grid grid-cols-1 border-t border-[#1b2440] sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="border-b border-[#1b2440] p-5 transition-colors hover:bg-white/[0.015] sm:odd:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n+1)]:border-r lg:[&:nth-child(3n+2)]:border-r"
            >
              <p className="text-[9.5px] font-semibold tracking-[0.16em] text-[#55647e]">
                0{index + 1}
              </p>
              <h3 className="mt-3 text-[14px] font-semibold text-white">{capability.title}</h3>
              <p className="mt-2 text-[12.5px] leading-relaxed text-[#8e9db4]">
                {capability.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="How it fits"
              title="Built around how a business actually operates."
              description="ZodAgent is intended for teams managing operational information and repeatable workflows across several tools."
            />
            <Link
              to="/services/crm-erp"
              className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-[#5fd6ef] transition-colors hover:text-white"
            >
              Explore our CRM &amp; ERP division
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="border-t border-[#1b2440]">
              {[
                {
                  title: 'One centralized place',
                  text: 'Business operations, records and connected systems are accessed from one platform instead of several disconnected tools.'
                },
                {
                  title: 'Intelligent assistance',
                  text: 'Teams can ask for information in plain language and have the platform retrieve what is relevant from connected business data.'
                },
                {
                  title: 'Workflow support',
                  text: 'Multi-step processes can be coordinated inside the system, with visibility when something needs attention.'
                },
                {
                  title: 'Operated in production',
                  text: 'The platform is deployed with monitoring, so it can run as part of daily operations and be improved over time.'
                }
              ].map((item) => (
                <div key={item.title} className="border-b border-[#1b2440] py-5">
                  <h3 className="text-[14px] font-semibold text-white">{item.title}</h3>
                  <p className="mt-1.5 max-w-xl text-[13px] leading-relaxed text-[#8e9db4]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="border-t border-[#1b2440] py-14 md:py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-12">
          <p className="text-[9.5px] font-semibold uppercase tracking-[0.18em] text-[#55647e] lg:col-span-2">
            Product interface
          </p>
          <div className="lg:col-span-8">
            <p className="max-w-2xl text-[13px] leading-relaxed text-[#8e9db4]">
              Interface walkthroughs are provided during a product conversation, so what you see
              reflects the current version of the platform rather than a static marketing image.
              The official ZodAgent website also shows the product directly.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href="https://www.zodagent.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#5fd6ef] transition-colors hover:text-white"
              >
                zodagent.com
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <a
                href="https://docs.zodagent.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#8e9db4] transition-colors hover:text-white"
              >
                Documentation
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CTASection
      eyebrow="Product enquiry"
      title="Bring ZodAgent Into Your Business."
      description="Tell us how your operations are managed today. We will review the requirements and discuss whether ZodAgent is the right fit."
    />
  </div>
);

export default ZodAgentPage;
