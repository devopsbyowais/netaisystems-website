import React, { useMemo, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Mail,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import { motion } from 'framer-motion';
import PageHero from '@/components/common/PageHero.jsx';
import { contact } from '@/data/site.js';
import { serviceDivisions } from '@/data/services.js';

/**
 * Existing NetAISystems Google Apps Script endpoint already used by the
 * automation enquiry form. Kept as a single constant so it can be repointed
 * without touching the page.
 */
const ENQUIRY_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbxaHA1lkdUjT7aimWn-SDODptzHT-MnxhFdQNl6qLDrIBoZS0xU63LlmSPSNa87y1O9/exec';

const SERVICE_OPTIONS = [
  ...serviceDivisions.map((division) => division.title),
  'ZodAgent ERP',
  'Multiple Services',
  'Other'
];

const INITIAL_FORM = {
  fullName: '',
  email: '',
  company: '',
  phone: '',
  budget: '',
  service: '',
  description: ''
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const StartProjectPage = () => {
  const [searchParams] = useSearchParams();
  const preselectedSlug = searchParams.get('service');

  const initialService = useMemo(() => {
    if (!preselectedSlug) return '';
    if (preselectedSlug === 'zodagent') return 'ZodAgent ERP';
    const division = serviceDivisions.find((item) => item.slug === preselectedSlug);
    return division ? division.title : '';
  }, [preselectedSlug]);

  const [formData, setFormData] = useState({
    ...INITIAL_FORM,
    service: initialService
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [submitError, setSubmitError] = useState('');
  const submittedRef = useRef(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => {
      if (!previous[name]) return previous;
      const next = { ...previous };
      delete next[name];
      return next;
    });
    if (submitError) setSubmitError('');
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.fullName.trim()) nextErrors.fullName = 'Please enter your full name.';
    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your business email.';
    } else if (!EMAIL_PATTERN.test(formData.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.company.trim()) nextErrors.company = 'Please enter your company name.';
    if (!formData.phone.trim()) nextErrors.phone = 'Please enter a phone number.';
    if (!formData.service) nextErrors.service = 'Please select the service you need.';
    if (!formData.description.trim()) {
      nextErrors.description = 'Please tell us about your project.';
    }

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (submittedRef.current || status === 'submitting') return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstField = Object.keys(validationErrors)[0];
      document.getElementById(firstField)?.focus();
      return;
    }

    setStatus('submitting');
    setSubmitError('');

    const payload = new FormData();
    // Field names are kept aligned with the existing Apps Script handler.
    payload.append('full_name', formData.fullName.trim());
    payload.append('business_email', formData.email.trim());
    payload.append('company_name', formData.company.trim());
    payload.append('primary_contact_number', formData.phone.trim());
    payload.append('industry', formData.service);
    payload.append('company_size', formData.budget);
    payload.append('use_case', formData.service);
    payload.append('budget', formData.budget);
    payload.append('service', formData.service);
    payload.append('description', formData.description.trim());
    payload.append('form_source', 'Start Your Project');

    try {
      await fetch(ENQUIRY_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        body: payload
      });

      submittedRef.current = true;
      setStatus('success');
      setFormData({ ...INITIAL_FORM });
      setErrors({});
    } catch (error) {
      console.error('Project enquiry submission failed:', error);
      setSubmitError(
        'We could not submit your enquiry. Your details have been kept — please try again, or email us directly.'
      );
      setStatus('error');
    }
  };

  const inputClass = (field) =>
    `form-input ${
      errors[field] ? 'border-red-400/70 focus:border-red-400 focus:ring-red-400' : ''
    }`;

  return (
    <div className="bg-[#0a0e27]">
      <Helmet>
        <title>Start Your Project | NetAISystems</title>
        <meta
          name="description"
          content="Tell NetAISystems about your project. Share your business, budget and requirements and our team will review them and get back to you."
        />
      </Helmet>

      <PageHero
        eyebrow="Start your project"
        title="Let's Talk About What You're Building."
        description="Share your requirements with us. Whether you need a new digital product, improved infrastructure, intelligent automation, or a business system, our team will review your enquiry and discuss the next steps."
        breadcrumb={[{ label: 'Start Your Project' }]}
      />

      <section className="py-14 md:py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            {/* LEFT — enquiry form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                {status === 'success' ? (
                  <div
                    role="status"
                    aria-live="polite"
                    className="border-t border-[#2a3552] pt-8"
                  >
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#00c8ee]/30 bg-[#00c8ee]/10">
                      <CheckCircle2 className="h-6 w-6 text-[#5fd6ef]" aria-hidden="true" />
                    </div>
                    <h2 className="text-[1.6rem] font-semibold tracking-[-0.03em] text-white sm:text-[2rem]">
                      Thank you for reaching out!
                    </h2>
                    <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#9aa9bf]">
                      Your project enquiry has been successfully submitted. Our team will
                      review your requirements and contact you shortly.
                    </p>
                    <Link
                      to="/"
                      className="mt-8 inline-flex items-center gap-2 text-[13px] font-semibold text-[#5fd6ef] transition-colors hover:text-white"
                    >
                      Return to homepage
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="fullName" className="form-label">
                          Full Name <span className="text-[#5fd6ef]">*</span>
                        </label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          autoComplete="name"
                          value={formData.fullName}
                          onChange={handleChange}
                          className={inputClass('fullName')}
                          placeholder="Jane Smith"
                          aria-required="true"
                          aria-invalid={Boolean(errors.fullName)}
                          aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                        />
                        {errors.fullName && (
                          <p id="fullName-error" className="mt-2 text-[12.5px] text-red-400">
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="form-label">
                          Business Email <span className="text-[#5fd6ef]">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={inputClass('email')}
                          placeholder="jane@company.com"
                          aria-required="true"
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-2 text-[12.5px] text-red-400">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="company" className="form-label">
                          Company Name <span className="text-[#5fd6ef]">*</span>
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          autoComplete="organization"
                          value={formData.company}
                          onChange={handleChange}
                          className={inputClass('company')}
                          placeholder="Company Inc."
                          aria-required="true"
                          aria-invalid={Boolean(errors.company)}
                          aria-describedby={errors.company ? 'company-error' : undefined}
                        />
                        {errors.company && (
                          <p id="company-error" className="mt-2 text-[12.5px] text-red-400">
                            {errors.company}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="form-label">
                          Phone Number <span className="text-[#5fd6ef]">*</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className={inputClass('phone')}
                          placeholder="+1 (555) 000-0000"
                          aria-required="true"
                          aria-invalid={Boolean(errors.phone)}
                          aria-describedby={errors.phone ? 'phone-error' : undefined}
                        />
                        {errors.phone && (
                          <p id="phone-error" className="mt-2 text-[12.5px] text-red-400">
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="budget" className="form-label">
                          Estimated Project Budget{' '}
                          <span className="font-normal text-[#71809b]">(optional)</span>
                        </label>
                        <input
                          id="budget"
                          name="budget"
                          type="text"
                          value={formData.budget}
                          onChange={handleChange}
                          className={inputClass('budget')}
                          placeholder="Enter your estimated budget (optional)"
                          aria-invalid={Boolean(errors.budget)}
                          aria-describedby={errors.budget ? 'budget-error' : undefined}
                        />
                        {errors.budget && (
                          <p id="budget-error" className="mt-2 text-[12.5px] text-red-400">
                            {errors.budget}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="service" className="form-label">
                          Which Service Do You Need?{' '}
                          <span className="text-[#5fd6ef]">*</span>
                        </label>
                        <div className="relative">
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className={`${inputClass('service')} appearance-none pr-10 ${
                              formData.service ? '' : 'text-[#71809b]'
                            }`}
                            aria-required="true"
                            aria-invalid={Boolean(errors.service)}
                            aria-describedby={errors.service ? 'service-error' : undefined}
                          >
                            <option value="">Select a service</option>
                            {SERVICE_OPTIONS.map((option) => (
                              <option
                                key={option}
                                value={option}
                                className="bg-[#0a1024] text-white"
                              >
                                {option}
                              </option>
                            ))}
                          </select>
                          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#71809b]">
                            <ChevronDown className="h-4 w-4" aria-hidden="true" />
                          </span>
                        </div>
                        {errors.service && (
                          <p id="service-error" className="mt-2 text-[12.5px] text-red-400">
                            {errors.service}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mt-6">
                      <label htmlFor="description" className="form-label">
                        Tell Us About Your Project <span className="text-[#5fd6ef]">*</span>
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={8}
                        className={`${inputClass('description')} min-h-[200px] resize-y leading-relaxed`}
                        placeholder="Briefly describe your project, requirements, or the challenge you'd like us to solve..."
                        aria-required="true"
                        aria-invalid={Boolean(errors.description)}
                        aria-describedby={errors.description ? 'description-error' : undefined}
                      />
                      {errors.description && (
                        <p id="description-error" className="mt-2 text-[12.5px] text-red-400">
                          {errors.description}
                        </p>
                      )}
                    </div>

                    {submitError && (
                      <div
                        role="alert"
                        className="mt-6 flex items-start gap-3 rounded-lg border border-red-400/30 bg-red-500/10 p-4"
                      >
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" aria-hidden="true" />
                        <div className="text-[12.5px] leading-relaxed text-red-200">
                          <p>{submitError}</p>
                          <a
                            href={`mailto:${contact.email}`}
                            className="mt-1 inline-block font-semibold text-white underline underline-offset-2"
                          >
                            {contact.email}
                          </a>
                        </div>
                      </div>
                    )}

                    <div className="mt-7 flex flex-col gap-4 border-t border-[#1b2440] pt-6 sm:flex-row sm:items-center sm:justify-between">
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="order-1 inline-flex min-h-[50px] items-center justify-center gap-2 rounded-lg bg-[#00c8ee] px-8 py-3.5 text-sm font-semibold text-[#061023] transition-colors hover:bg-[#4ad9f5] disabled:cursor-not-allowed disabled:opacity-60 sm:order-2"
                      >
                        {status === 'submitting' ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                            Sending…
                          </>
                        ) : (
                          <>
                            Schedule a Session
                            <ArrowRight className="h-4 w-4" aria-hidden="true" />
                          </>
                        )}
                      </button>

                      <p className="order-2 max-w-[16rem] text-[11.5px] leading-relaxed text-[#71809b] sm:order-1">
                        We use your details only to respond to this enquiry.
                      </p>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>

            {/* RIGHT — email only */}
            <aside className="lg:col-span-5">
              <div className="border-t border-[#2a3552] pt-6 lg:sticky lg:top-28">
                <div className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-[#5fd6ef]" aria-hidden="true" />
                  <h2 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#71809b]">
                    Email
                  </h2>
                </div>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-4 block break-all text-[1.05rem] font-medium text-[#b9c6d8] transition-colors hover:text-white sm:text-[1.2rem]"
                >
                  {contact.email}
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartProjectPage;
