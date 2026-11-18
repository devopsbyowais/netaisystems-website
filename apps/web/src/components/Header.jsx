import React, { memo, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { primaryNav } from '@/data/site.js';
import { serviceDivisions } from '@/data/services.js';

const Header = memo(() => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const servicesRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const menuToggleRef = useRef(null);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      const first = mobileMenuRef.current?.querySelector('button, a');
      first?.focus();
    }
  }, [mobileOpen]);

  useEffect(() => {
    const onClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setServicesOpen(false);
        setMobileOpen(false);
        menuToggleRef.current?.focus();
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const isActive = (href) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  const servicesActive = location.pathname.startsWith('/services');

  const navLinkClass = (active) =>
    `relative px-3 py-2 text-[13.5px] font-medium transition-colors ${
      active ? 'text-white' : 'text-[#96a5bc] hover:text-white'
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || mobileOpen
          ? 'border-[#1b2440] bg-[#080d1f]/95 backdrop-blur-md'
          : 'border-transparent bg-[#0a0e27]/70 backdrop-blur-sm'
      }`}
    >
      <nav className="section-container" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between gap-3 sm:gap-6 md:h-[76px]">
          <Link
            to="/"
            className="flex shrink-0 items-center gap-2.5 transition-opacity hover:opacity-80"
            aria-label="NetAISystems home"
          >
            <img
              src="https://horizons-cdn.hostinger.com/7db26c42-5cfa-4d6f-8931-02671b24cb00/favicon-E9P8R.png"
              alt=""
              className="h-8 w-8 object-contain"
              width="32"
              height="32"
            />
            <span className="text-[17px] font-semibold tracking-[-0.02em] text-white">
              NetAISystems
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {primaryNav.map((item) => {
              if (item.label === 'Services') {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    ref={servicesRef}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setServicesOpen((open) => !open)}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      className={`flex items-center gap-1.5 px-3 py-2 text-[13.5px] font-medium transition-colors ${
                        servicesActive || servicesOpen
                          ? 'text-white'
                          : 'text-[#96a5bc] hover:text-white'
                      }`}
                    >
                      Services
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          servicesOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.16, ease: 'easeOut' }}
                          className="absolute left-1/2 top-full w-[46rem] -translate-x-1/2 pt-3"
                        >
                          <div className="overflow-hidden rounded-xl border border-[#232f4d] bg-[#0b1226] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)]">
                            <div className="grid grid-cols-2">
                              {serviceDivisions.map((division, index) => (
                                <Link
                                  key={division.slug}
                                  to={`/services/${division.slug}`}
                                  className={`group flex flex-col gap-1 px-5 py-4 transition-colors hover:bg-white/[0.035] ${
                                    index < 4 ? 'border-b border-[#1b2440]' : ''
                                  } ${index % 2 === 0 ? 'border-r border-[#1b2440]' : ''}`}
                                >
                                  <span className="flex items-baseline gap-2.5">
                                    <span className="text-[10px] font-semibold tracking-[0.16em] text-[#55647e]">
                                      {division.number}
                                    </span>
                                    <span className="text-[13.5px] font-semibold text-white transition-colors group-hover:text-[#9fe8f7]">
                                      {division.title}
                                    </span>
                                  </span>
                                  <span className="pl-[1.65rem] text-[12px] leading-relaxed text-[#8392a9]">
                                    {division.navDescription}
                                  </span>
                                </Link>
                              ))}
                            </div>
                            <div className="flex items-center justify-between gap-4 border-t border-[#1b2440] bg-[#080d1f] px-5 py-3">
                              <span className="text-[11.5px] text-[#71809b]">
                                One partner across six technology divisions.
                              </span>
                              <Link
                                to="/services"
                                className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#5fd6ef] hover:text-white"
                              >
                                All services
                                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={navLinkClass(isActive(item.href))}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden shrink-0 lg:block">
            <Link
              to="/start-project"
              className="inline-flex min-h-[42px] items-center justify-center rounded-lg bg-[#00c8ee] px-4 py-2.5 text-[13px] font-semibold text-[#061023] transition-colors hover:bg-[#4ad9f5]"
            >
              Start Your Project
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/start-project"
              className="inline-flex min-h-[44px] items-center justify-center whitespace-nowrap rounded-lg bg-[#00c8ee] px-3 py-2 text-[11.5px] font-semibold text-[#061023] transition-colors hover:bg-[#4ad9f5] max-[359px]:hidden"
            >
              Start Project
            </Link>
            <button
              ref={menuToggleRef}
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="-mr-1 flex min-h-[44px] min-w-[44px] items-center justify-center text-white"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-navigation"
              ref={mobileMenuRef}
              role="dialog"
              aria-modal="false"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="overflow-hidden border-t border-[#1b2440] lg:hidden"
            >
              <div className="max-h-[calc(100vh-5rem)] overflow-y-auto py-4">
                {primaryNav.map((item) => {
                  if (item.label === 'Services') {
                    return (
                      <div key={item.label} className="mb-1">
                        <button
                          type="button"
                          onClick={() => setMobileServicesOpen((open) => !open)}
                          aria-expanded={mobileServicesOpen}
                          className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-[15px] font-medium text-[#b9c6d8] transition-colors hover:bg-white/5 hover:text-white"
                        >
                          Services
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              mobileServicesOpen ? 'rotate-180' : ''
                            }`}
                            aria-hidden="true"
                          />
                        </button>

                        {mobileServicesOpen && (
                          <div className="mb-2 ml-3 mt-1 space-y-0.5 border-l border-[#1b2440] pl-3">
                            <Link
                              to="/services"
                              onClick={() => setMobileOpen(false)}
                              className="block rounded-lg px-3 py-3 text-[13px] font-semibold text-[#5fd6ef] hover:bg-white/5"
                            >
                              All services
                            </Link>
                            {serviceDivisions.map((division) => (
                              <Link
                                key={division.slug}
                                to={`/services/${division.slug}`}
                                onClick={() => setMobileOpen(false)}
                                className="block rounded-lg px-3 py-3 hover:bg-white/5"
                              >
                                <span className="block text-[13.5px] font-medium text-[#b9c6d8]">
                                  {division.title}
                                </span>
                                <span className="mt-0.5 block text-[11.5px] leading-relaxed text-[#71809b]">
                                  {division.navDescription}
                                </span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`mb-1 block rounded-lg px-3 py-3 text-[15px] font-medium transition-colors ${
                        isActive(item.href)
                          ? 'bg-[#00c8ee]/10 text-[#5fd6ef]'
                          : 'text-[#b9c6d8] hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                {/* The header CTA is hidden below 360px; keep it reachable inside the menu. */}
                <Link
                  to="/start-project"
                  onClick={() => setMobileOpen(false)}
                  className="mt-3 hidden min-h-[44px] items-center justify-center rounded-lg bg-[#00c8ee] px-4 py-2.5 text-[14px] font-semibold text-[#061023] max-[359px]:flex"
                >
                  Start Your Project
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
});

Header.displayName = 'Header';
export default Header;
