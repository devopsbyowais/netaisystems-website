import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

/**
 * Shared page hero for every page except the homepage.
 * Keeps the title, intro, breadcrumb and any page actions in one rhythm.
 */
const PageHero = ({
  eyebrow,
  title,
  description,
  breadcrumb = [],
  aside = null,
  children
}) => (
  <section className="relative overflow-hidden border-b border-[#1b2440] pb-14 pt-28 md:pb-20 md:pt-36">
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="absolute inset-x-0 top-0 h-[26rem] bg-[radial-gradient(ellipse_at_25%_0%,rgba(0,200,238,0.10),transparent_62%)]" />
      <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-[#1b2440] to-transparent" />
    </div>

    <div className="section-container relative z-10">
      {breadcrumb.length > 0 && (
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-[12px] text-[#71809b]">
            <li>
              <Link to="/" className="transition-colors hover:text-[#b9c6d8]">
                Home
              </Link>
            </li>
            {breadcrumb.map((crumb, index) => {
              const last = index === breadcrumb.length - 1;
              return (
                <li key={`${crumb.label}-${index}`} className="flex items-center gap-2">
                  <ChevronRight className="h-3 w-3 text-[#3c4a66]" aria-hidden="true" />
                  {crumb.href && !last ? (
                    <Link
                      to={crumb.href}
                      className="transition-colors hover:text-[#b9c6d8]"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={last ? 'text-[#b9c6d8]' : ''}>{crumb.label}</span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      )}

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={aside ? 'lg:col-span-8' : 'lg:col-span-10'}
        >
          {eyebrow && (
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-6 bg-[#00c8ee]/70" aria-hidden="true" />
              <p className="eyebrow">{eyebrow}</p>
            </div>
          )}
          <h1 className="max-w-3xl text-[clamp(1.8rem,8vw,2.1rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-[2.7rem] lg:text-[3.15rem]">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[#9aa9bf] sm:text-[17px]">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </motion.div>

        {aside && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-4 lg:pt-14"
          >
            {aside}
          </motion.div>
        )}
      </div>
    </div>
  </section>
);

export default PageHero;
