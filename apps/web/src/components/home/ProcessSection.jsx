import React from 'react';
import SectionHeading from '@/components/common/SectionHeading.jsx';
import ProcessSteps from '@/components/common/ProcessSteps.jsx';

const ProcessSection = () => (
  <section className="py-20 md:py-28">
    <div className="section-container">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-6">
          <SectionHeading
            eyebrow="How we work"
            title="A Clear Process. From First Conversation to Delivery."
          />
        </div>
        <div className="lg:col-span-6 lg:pt-9">
          <p className="max-w-lg text-[15px] leading-relaxed text-[#9aa9bf] sm:text-base">
            Every successful project starts with understanding the problem. We follow a
            structured process to turn requirements into practical solutions.
          </p>
        </div>
      </div>

      <div className="mt-12 md:mt-16">
        <ProcessSteps />
      </div>
    </div>
  </section>
);

export default ProcessSection;
