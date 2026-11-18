import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, ExternalLink } from 'lucide-react';
import PageHero from '@/components/common/PageHero.jsx';
import ButtonLink from '@/components/common/ButtonLink.jsx';
import SectionHeading from '@/components/common/SectionHeading.jsx';
import CTASection from '@/components/common/CTASection.jsx';

const capabilities = [
  'Connects with existing tools, APIs and data',
  'Keeps context across sessions and teams',
  'Chat-based access to business information',
  'Orchestrates multi-step business workflows',
  'Runs in production with built-in monitoring',
  'Provides visibility across connected operations'
];

const ProductsPage = () => (
  <div className="bg-[#0a0e27]">
    <Helmet>
      <title>Products | NetAISystems</title>
      <meta
        name="description"
        content="ZodAgent is an AI-powered ERP system by NetAISystems, built to help businesses manage and streamline operations through one centralized platform."
      />
    </Helmet>

    <PageHero
      eyebrow="Products"
      title="Run Your Business Through a Smarter ERP Experience."
      description="ZodAgent brings business management into an intelligent, centralized platform designed to help organizations organize and streamline their operations."
      breadcrumb={[{ label: 'Products' }]}
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <ButtonLink to="/zodagent" withArrow>
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
    </PageHero>

    <section className="py-16 md:py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <p className="eyebrow">Featured product</p>
            <h2 className="mt-4 text-[2rem] font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-[2.6rem]">
              ZodAgent
            </h2>
            <p className="mt-2 text-[14px] font-medium text-[#5fd6ef]">
              AI-Powered ERP System
            </p>
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-[#9aa9bf]">
              ZodAgent is an AI-powered ERP system developed by NetAISystems to help businesses
              manage and streamline their operations through an intelligent, centralized
              platform.
            </p>
            <p className="mt-4 max-w-lg text-[14px] leading-relaxed text-[#8e9db4]">
              It is built around one place for connected business operations, rather than
              another tool that adds to the number of systems a team has to check.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/zodagent" withArrow>
                Product overview
              </ButtonLink>
              <Link
                to="/start-project?service=zodagent"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-[#2a3552] px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-[#5fd6ef]/60 hover:bg-white/[0.04]"
              >
                Discuss ZodAgent
                <ArrowUpRight className="h-4 w-4 text-[#8e9db4]" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-xl border border-[#232f4d] bg-[#0b1226] p-6 sm:p-7">
              <div className="flex items-start justify-between gap-6 border-b border-[#1b2440] pb-5">
                <div>
                  <p className="text-[9.5px] font-semibold uppercase tracking-[0.2em] text-[#71809b]">
                    Product
                  </p>
                  <p className="mt-2.5 text-[1.45rem] font-semibold tracking-[-0.03em] text-white">
                    ZodAgent
                  </p>
                </div>
                <span className="rounded border border-[#2a3552] px-2.5 py-1 text-[9.5px] uppercase tracking-[0.14em] text-[#8e9db4]">
                  NetAISystems
                </span>
              </div>

              <h3 className="mt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#71809b]">
                Verified capabilities
              </h3>
              <ul className="mt-4 grid grid-cols-1 gap-3">
                {capabilities.map((capability) => (
                  <li key={capability} className="flex items-start gap-2.5">
                    <Check
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#5fd6ef]"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    <span className="text-[12.5px] leading-relaxed text-[#a7b4c8]">
                      {capability}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 border-t border-[#1b2440] pt-4 text-[10.5px] leading-relaxed text-[#71809b]">
                Product interface walkthroughs are available during a product conversation.
                The official website shows the current product.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="border-y border-[#1b2440] bg-[#080d1f] py-16 md:py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Intended audience"
              title="For businesses outgrowing disconnected tools."
              description="ZodAgent is aimed at organizations whose operational information and workflows are spread across several systems."
            />
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
              {[
                {
                  title: 'Operations-led teams',
                  text: 'Businesses that need a clearer view of day-to-day work across connected systems.'
                },
                {
                  title: 'Growing companies',
                  text: 'Organizations where spreadsheets and separate applications have stopped scaling with the business.'
                },
                {
                  title: 'Teams handling recurring processes',
                  text: 'Operations with repeatable workflows, handoffs and reporting that would benefit from one platform.'
                },
                {
                  title: 'Leaders who need visibility',
                  text: 'Decision-makers who want operational information without requesting manual reports.'
                }
              ].map((item) => (
                <div key={item.title} className="border-t border-[#1b2440] py-5">
                  <h3 className="text-[13.5px] font-semibold text-white">{item.title}</h3>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#8e9db4]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Also from NetAISystems"
              title="Live automation demonstrations."
              description="Our products and demonstrations come from the same engineering practice as client work."
            />
          </div>

          <div className="lg:col-span-7">
            <div className="border-t border-[#1b2440]">
              {[
                {
                  title: 'AI automation demo suite',
                  text: 'Working examples of AI agents, workflow automation and retrieval-based assistants.',
                  href: '/demo'
                },
                {
                  title: 'RAG chatbot demonstration',
                  text: 'An assistant that answers from approved business documentation rather than general model knowledge.',
                  href: '/rag-chatbot-demo'
                }
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="group flex items-start justify-between gap-6 border-b border-[#1b2440] py-6 transition-colors hover:bg-white/[0.015]"
                >
                  <div>
                    <h3 className="text-[14.5px] font-semibold text-white">{item.title}</h3>
                    <p className="mt-1.5 max-w-md text-[12.5px] leading-relaxed text-[#8e9db4]">
                      {item.text}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="mt-1 h-4 w-4 shrink-0 text-[#55647e] transition-colors group-hover:text-[#5fd6ef]"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <CTASection
      eyebrow="Product enquiry"
      title="See Whether ZodAgent Fits Your Operations."
      description="Tell us how your business manages customer records, operations and reporting today. We will review the requirements and discuss the next step."
    />
  </div>
);

export default ProductsPage;
