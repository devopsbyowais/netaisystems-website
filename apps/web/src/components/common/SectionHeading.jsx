import React from 'react';
import { motion } from 'framer-motion';

/**
 * Editorial section heading. Uses a thin accent rule instead of a pill or icon
 * so headings stay quiet and consistent across the site.
 */
const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  titleClassName = '',
  as: Heading = 'h2'
}) => {
  const centered = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}
    >
      {eyebrow && (
        <div
          className={`mb-4 flex items-center gap-3 ${centered ? 'justify-center' : ''}`}
        >
          <span className="h-px w-6 bg-[#00c8ee]/70" aria-hidden="true" />
          <p className="eyebrow">{eyebrow}</p>
        </div>
      )}
      <Heading
        className={`text-[1.7rem] font-semibold leading-[1.12] tracking-[-0.03em] text-white sm:text-[2.05rem] lg:text-[2.35rem] ${titleClassName}`}
      >
        {title}
      </Heading>
      {description && (
        <p
          className={`mt-5 text-[15px] leading-relaxed text-[#9aa9bf] sm:text-base ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
