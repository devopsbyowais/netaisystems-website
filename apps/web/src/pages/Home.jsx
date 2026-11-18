import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/home/HeroSection.jsx';
import IntroSection from '@/components/home/IntroSection.jsx';
import ServicesSection from '@/components/home/ServicesSection.jsx';
import ZodAgentSection from '@/components/home/ZodAgentSection.jsx';
import ProcessSection from '@/components/home/ProcessSection.jsx';
import IndustriesSection from '@/components/home/IndustriesSection.jsx';
import WorkSection from '@/components/home/WorkSection.jsx';
import WhySection from '@/components/home/WhySection.jsx';
import CTASection from '@/components/common/CTASection.jsx';

function Home() {
  return (
    <>
      <Helmet>
        <title>NetAISystems — Technology &amp; Digital Solutions Agency</title>
        <meta
          name="description"
          content="NetAISystems builds the technology behind better businesses: AI automation, web and software development, DevOps and cloud, CRM and ERP systems, CGI and UI/UX design."
        />
      </Helmet>

      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <ZodAgentSection />
      <ProcessSection />
      <IndustriesSection />
      <WorkSection />
      <WhySection />
      <CTASection />
    </>
  );
}

export default Home;
