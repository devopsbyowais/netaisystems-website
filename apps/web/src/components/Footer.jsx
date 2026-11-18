import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import { contact, companyLinks } from '@/data/site.js';
import { serviceDivisions } from '@/data/services.js';

const productLinks = [{ label: 'ZodAgent', href: '/zodagent' }];

const FooterColumn = ({ title, children }) => (
  <div>
    <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#71809b]">
      {title}
    </h3>
    <ul className="space-y-2.5">{children}</ul>
  </div>
);

const Footer = memo(() => (
  <footer className="border-t border-[#1b2440] bg-[#080d1f]">
    <div className="section-container pb-10 pt-16">
      <div className="grid grid-cols-1 gap-10 border-b border-[#1b2440] pb-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <Link to="/" className="mb-5 flex w-fit items-center gap-2.5">
            <img
              src="https://horizons-cdn.hostinger.com/7db26c42-5cfa-4d6f-8931-02671b24cb00/favicon-E9P8R.png"
              alt=""
              className="h-8 w-8 object-contain"
              width="32"
              height="32"
              loading="lazy"
            />
            <span className="text-lg font-semibold tracking-[-0.02em] text-white">
              NetAISystems
            </span>
          </Link>

          <p className="max-w-sm text-[13.5px] leading-relaxed text-[#8e9db4]">
            One technology partner for intelligent automation, software, cloud infrastructure,
            business systems and creative digital work.
          </p>

          <Link
            to="/start-project"
            className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-[#5fd6ef] transition-colors hover:text-white"
          >
            Start Your Project
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          <div className="mt-6 flex items-center gap-2.5">
            {contact.socials.map((social) => {
              const Icon = social.label === 'LinkedIn' ? Linkedin : Instagram;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#232f4d] text-[#8e9db4] transition-colors hover:border-[#5fd6ef]/50 hover:text-[#5fd6ef] sm:h-9 sm:w-9"
                >
                  <Icon size={18} strokeWidth={1.75} className="sm:h-4 sm:w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:col-span-8">
          <FooterColumn title="Company">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-[13px] text-[#96a5bc] transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Services">
            {serviceDivisions.map((division) => (
              <li key={division.slug}>
                <Link
                  to={`/services/${division.slug}`}
                  className="text-[12.5px] leading-snug text-[#96a5bc] transition-colors hover:text-white"
                >
                  {division.title}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Products">
            {productLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-[13px] text-[#96a5bc] transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-1 text-[11.5px] leading-relaxed text-[#55647e]">
              AI-Powered ERP System
            </li>
          </FooterColumn>

          <FooterColumn title="Contact">
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="break-all text-[13px] text-[#96a5bc] transition-colors hover:text-white"
              >
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}
                className="text-[13px] text-[#96a5bc] transition-colors hover:text-white"
              >
                {contact.phone}
              </a>
            </li>
            {contact.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-[#96a5bc] transition-colors hover:text-white"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </FooterColumn>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <p className="text-[11.5px] text-[#55647e]">
          &copy; {new Date().getFullYear()} NetAISystems. All rights reserved.
        </p>
        <p className="text-[11.5px] text-[#55647e]">
          Technology &amp; digital solutions agency
        </p>
      </div>
    </div>
  </footer>
));

Footer.displayName = 'Footer';
export default Footer;
