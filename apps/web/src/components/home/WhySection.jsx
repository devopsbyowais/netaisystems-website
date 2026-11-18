import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/common/SectionHeading.jsx';
import { differentiators } from '@/data/site.js';

const WhySection = () => (
  <section className="border-t border-[#1b2440] py-20 md:py-28">
    <div className="section-container">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Why NetAISystems"
            title="A Technology Partner Focused on the Bigger Picture."
          />
          <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-[#8e9db4]">
            The aim is not to add more tools. It is to make the technology around your business
            clearer, more connected and easier to maintain.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:col-span-7">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
              className="border-t border-[#1b2440] py-6"
            >
              <p className="text-[9.5px] font-semibold tracking-[0.18em] text-[#55647e]">
                0{index + 1}
              </p>
              <h3 className="mt-3 text-[15px] font-semibold leading-snug text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-[#8e9db4]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhySection;
