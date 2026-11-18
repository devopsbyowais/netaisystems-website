import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Zap, ShieldCheck, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Button } from '@/components/ui/button.jsx';

// Reusable Custom Checkbox mapped to the navy/cyan theme
const CustomCheckbox = ({ checked, onChange, label, className = "" }) => (
  <label className={`flex items-start gap-3 cursor-pointer group ${className}`}>
    <div className={`mt-0.5 w-5 h-5 rounded border flex items-center justify-center shrink-0 transition-all duration-200 ${
      checked 
        ? 'bg-[#00d4ff] border-[#00d4ff] shadow-[0_0_10px_rgba(0,212,255,0.3)]' 
        : 'bg-[#0a0e27] border-[#1a2847] group-hover:border-[#00d4ff]/50'
    }`}>
      <Check className={`w-3.5 h-3.5 text-[#0a0e27] transition-transform duration-200 ${checked ? 'scale-100' : 'scale-0'}`} strokeWidth={3} />
    </div>
    <input 
      type="checkbox" 
      className="sr-only" 
      checked={checked} 
      onChange={onChange} 
    />
    <span className="text-[#a0aec0] group-hover:text-white transition-colors text-sm md:text-base leading-snug pt-[1px]">
      {label}
    </span>
  </label>
);

const AutomationRequestPage = () => {
  const navigate = useNavigate();

  // --- STATE MANAGEMENT ---
  const initialFormState = {
    fullName: '',
    email: '',
    companyName: '',
    website: '',
    phonePrimary: '',
    phoneSecondary: '',
    industry: ''
  };

  const [formData, setFormData] = useState(initialFormState);

  const [useCases, setUseCases] = useState([]);
  const [useCaseOther, setUseCaseOther] = useState('');
  
  const [tools, setTools] = useState([]);
  const [toolOther, setToolOther] = useState('');
  
  const [description, setDescription] = useState('');
  
  const initialAckState = {
    ack1: false,
    ack2: false,
    ack3: false
  };
  const [acknowledgements, setAcknowledgements] = useState(initialAckState);

  const [selectedPackage, setSelectedPackage] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- CONSTANTS ---
  const ACTIVATION_FEE = 1000;
  const PACKAGES = [
    { id: 1, label: '1 Automation', price: 500 },
    { id: 2, label: '2 Automations', price: 900 },
    { id: 3, label: '3 Automations', price: 1250 },
    { id: 4, label: '4 Automations', price: 1500 },
    { id: 5, label: '5 Automations', price: 1750 }
  ];

  const USE_CASE_OPTIONS = [
    'Lead Capture & Qualification Automation',
    'Multi-Channel Marketing Bot',
    'CRM Data Entry & Cleanup System',
    'Customer Onboarding System',
    'Proposal & Contract Automation',
    'Invoice & Payment Reminders',
    'Recruitment & Screening Automation',
    'Employee Onboarding & Training System',
    'Marketing Campaign Automation',
    'Customer Support Help Desk',
    'Fraud Detection System',
    'AI News Letter System'
  ];

  const TOOL_OPTIONS = [
    'HubSpot', 'Salesforce', 'Zendesk',
    'Intercom', 'Slack', 'Calendly',
    'Zoom', 'Twilio', 'Aircall',
    'Facebook', 'Instagram', 'Gmail/Outlook'
  ];

  // --- DYNAMIC LOGIC ---
  const activeCount = useCases.length + (useCaseOther.trim() !== '' ? 1 : 0);
  const maxAvailablePackages = Math.max(1, Math.min(5, activeCount));

  // Auto-select the highest available option when requirements change
  useEffect(() => {
    setSelectedPackage(maxAvailablePackages);
  }, [maxAvailablePackages]);

  const currentTotal = useMemo(() => {
    const pkgPrice = PACKAGES.find(p => p.id === selectedPackage)?.price || 500;
    return pkgPrice + ACTIVATION_FEE;
  }, [selectedPackage]);

  // --- HANDLERS ---
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const toggleArrayItem = useCallback((setter) => (item) => {
    setter(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
  }, []);

  const toggleUseCase = toggleArrayItem(setUseCases);
  const toggleTool = toggleArrayItem(setTools);

  const toggleAck = useCallback((key) => {
    setAcknowledgements(prev => ({ ...prev, [key]: !prev[key] }));
  }, []);

  // --- VALIDATION ---
  const isFormValid = useMemo(() => {
    const hasBasicInfo = !!(
      formData.fullName.trim() && 
      formData.email.trim() && 
      formData.phonePrimary.trim() && 
      formData.industry.trim()
    );
    const hasAcks = acknowledgements.ack1 && acknowledgements.ack2 && acknowledgements.ack3;
    return hasBasicInfo && hasAcks;
  }, [formData, acknowledgements]);

  // --- SUBMISSION ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);

    try {
      const pkgPrice = PACKAGES.find(p => p.id === selectedPackage)?.price || 500;
      
      const payload = new URLSearchParams({
        fullName: formData.fullName,
        email: formData.email,
        companyName: formData.companyName,
        website: formData.website,
        primaryContactNumber: formData.phonePrimary,
        secondaryContactNumber: formData.phoneSecondary,
        industry: formData.industry,
        useCases: useCases.join(', '),
        useCasesOther: useCaseOther,
        tools: tools.join(', '),
        toolsOther: toolOther,
        description: description,
        packagePrice: pkgPrice.toString(),
        totalEstimatedPrice: currentTotal.toString(),
        ackScope: acknowledgements.ack1.toString(),
        ackPayment: acknowledgements.ack2.toString(),
        ackTerms: acknowledgements.ack3.toString()
      });

      // Send POST request to Google Apps Script webhook
      await fetch('https://script.google.com/macros/s/AKfycbzeCh2U6WO4hPtC1NlIL9un6zKtVWOuzTg2RfPxY2VG7JfL5w0y3fwq16-ZD6RGW4qr/exec', {
        method: 'POST',
        mode: 'no-cors', // required for GAS without preflight/CORS config
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: payload.toString()
      });

      toast.success('Thank you! Your automation request has been submitted successfully.');
      
      // Reset form
      setFormData(initialFormState);
      setUseCases([]);
      setUseCaseOther('');
      setTools([]);
      setToolOther('');
      setDescription('');
      setAcknowledgements(initialAckState);
      setSelectedPackage(1);
      
    } catch (error) {
      console.error("Submission error:", error);
      toast.error('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0e27] pb-32">
      {/* Header Section */}
      <section className="relative pt-32 pb-16 border-b border-[#1a2847] overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.15)_0%,transparent_70%)]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button 
            type="button"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#a0aec0] hover:text-[#00d4ff] transition-colors mb-8 group w-fit"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Pricing</span>
          </button>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Let's Build Your <span className="text-[#00d4ff]">Automation</span>
            </h1>
            <p className="text-lg text-[#a0aec0] max-w-[65ch] leading-relaxed">
              Fill out the details below to configure your automation package. We'll analyze your requirements and set up your secure environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Form Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <form onSubmit={handleSubmit} className="space-y-8" noValidate>
          
          {/* SECTION 1 - Basic Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="card-navy"
          >
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#1a2847]">
              <div className="section-badge">1</div>
              <h2 className="text-2xl font-bold text-white">Basic Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="form-label">Full Name *</label>
                <Input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="John Doe" className="form-input" required />
              </div>
              <div>
                <label className="form-label">Business Email *</label>
                <Input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="john@company.com" className="form-input" required />
              </div>
              <div>
                <label className="form-label">Company Name</label>
                <Input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} placeholder="Acme Inc." className="form-input" />
              </div>
              <div>
                <label className="form-label">Company Website</label>
                <Input type="url" name="website" value={formData.website} onChange={handleInputChange} placeholder="https://acme.com" className="form-input" />
              </div>
              <div>
                <label className="form-label">Primary Contact Number *</label>
                <Input type="tel" name="phonePrimary" value={formData.phonePrimary} onChange={handleInputChange} placeholder="+1 (555) 000-0000" className="form-input" required />
              </div>
              <div>
                <label className="form-label">Secondary Contact Number</label>
                <Input type="tel" name="phoneSecondary" value={formData.phoneSecondary} onChange={handleInputChange} placeholder="+1 (555) 000-0000" className="form-input" />
              </div>
              <div className="md:col-span-2">
                <label className="form-label">Industry *</label>
                <Input type="text" name="industry" value={formData.industry} onChange={handleInputChange} placeholder="e.g. Healthcare, Finance, Retail" className="form-input" required />
              </div>
            </div>
          </motion.div>

          {/* SECTION 2 - Select Package */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="card-elevated"
          >
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#1a2847]">
              <div className="section-badge bg-[#00d4ff] text-[#0a0e27]">2</div>
              <div>
                <h2 className="text-2xl font-bold text-white">Select Package</h2>
                <p className="text-sm text-[#00d4ff] mt-1 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" /> Options unlock dynamically based on Section 3 selections.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
              {PACKAGES.map(pkg => {
                const isAvailable = pkg.id <= maxAvailablePackages;
                const isSelected = selectedPackage === pkg.id;
                
                return (
                  <button
                    key={pkg.id}
                    type="button"
                    disabled={!isAvailable}
                    onClick={() => setSelectedPackage(pkg.id)}
                    data-selected={isSelected}
                    data-disabled={!isAvailable}
                    className="package-btn"
                  >
                    <span className={`text-sm font-medium ${isSelected ? 'text-[#00d4ff]' : 'text-[#a0aec0]'}`}>
                      {pkg.label}
                    </span>
                    <span className={`text-xl font-bold ${isSelected ? 'text-white' : 'text-gray-400'}`}>
                      ${pkg.price}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="bg-[#0a0e27] rounded-xl p-5 border border-[#1a2847] flex items-center justify-between mb-6">
              <span className="text-[#a0aec0] font-medium flex items-center gap-2">
                Platform Activation Fee
                <span className="text-xs bg-[#1a2847] text-[#00d4ff] px-2 py-0.5 rounded uppercase tracking-wider font-bold">Mandatory</span>
              </span>
              <span className="text-white font-bold">${ACTIVATION_FEE.toLocaleString()}</span>
            </div>

            <div className="bg-gradient-to-r from-[#1a2847]/50 to-transparent rounded-xl p-6 border border-[#00d4ff]/20 flex flex-col sm:flex-row items-center justify-between">
              <div>
                <p className="text-white text-lg font-bold">Estimated Total</p>
                <p className="text-sm text-[#a0aec0]">Package + Activation Fee</p>
              </div>
              <div className="text-3xl font-black text-[#00d4ff] mt-2 sm:mt-0">
                ${currentTotal.toLocaleString()} <span className="text-lg text-white/50 font-medium">USD</span>
              </div>
            </div>
          </motion.div>

          {/* SECTION 3 - Automation Use Case */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="card-navy"
          >
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#1a2847]">
              <div className="section-badge">3</div>
              <div>
                <h2 className="text-2xl font-bold text-white">Automation Use Case</h2>
                <p className="text-sm text-[#a0aec0] mt-1">Select all workflows you'd like to automate.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-8">
              {USE_CASE_OPTIONS.map(option => (
                <CustomCheckbox 
                  key={option}
                  label={option}
                  checked={useCases.includes(option)}
                  onChange={() => toggleUseCase(option)}
                />
              ))}
            </div>
            
            <div className="pt-6 border-t border-[#1a2847]">
              <label className="form-label">Other (Please specify)</label>
              <Input 
                type="text" 
                value={useCaseOther} 
                onChange={(e) => setUseCaseOther(e.target.value)} 
                placeholder="Describe custom workflow..." 
                className="form-input" 
              />
            </div>
          </motion.div>

          {/* SECTION 4 - Tools & Integrations */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="card-navy"
          >
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#1a2847]">
              <div className="section-badge">4</div>
              <h2 className="text-2xl font-bold text-white">Tools & Integrations</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {TOOL_OPTIONS.map(option => (
                <CustomCheckbox 
                  key={option}
                  label={option}
                  checked={tools.includes(option)}
                  onChange={() => toggleTool(option)}
                  className="border border-[#1a2847] rounded-xl p-4 bg-[#0a0e27] hover:border-[#00d4ff]/50 transition-all duration-200"
                />
              ))}
            </div>
            
            <div className="pt-6 border-t border-[#1a2847]">
              <label className="form-label">Other tools you use (Please specify)</label>
              <Input 
                type="text" 
                value={toolOther} 
                onChange={(e) => setToolOther(e.target.value)} 
                placeholder="e.g. Shopify, Quickbooks, custom API..." 
                className="form-input" 
              />
            </div>
          </motion.div>

          {/* SECTION 5 - Describe Your Automation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="card-navy"
          >
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#1a2847]">
              <div className="section-badge">5</div>
              <h2 className="text-2xl font-bold text-white">Describe Your Automation</h2>
            </div>
            
            <Textarea 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Please describe your current process, the pain points you're facing, and what you want the automation to achieve..." 
              className="form-input min-h-[180px] resize-y text-base leading-relaxed"
            />
          </motion.div>

          {/* SECTION 6 - Acknowledgements */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="bg-[#0f1535] border border-[#1a2847] rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#1a2847]">
              <div className="section-badge bg-[#1a2847] text-[#00d4ff] border-none"><ShieldCheck className="w-5 h-5" /></div>
              <h2 className="text-2xl font-bold text-white">Acknowledgements</h2>
            </div>
            
            <div className="space-y-5">
              <CustomCheckbox 
                label="I understand that scope changes may affect the final delivery timeline."
                checked={acknowledgements.ack1}
                onChange={() => toggleAck('ack1')}
              />
              <CustomCheckbox 
                label="I agree to the payment of the selected package plus the one-time activation fee."
                checked={acknowledgements.ack2}
                onChange={() => toggleAck('ack2')}
              />
              <CustomCheckbox 
                label="I have read and agree to the Terms of Service and Privacy Policy."
                checked={acknowledgements.ack3}
                onChange={() => toggleAck('ack3')}
              />
            </div>
          </motion.div>

          {/* BOTTOM SUBMIT SECTION */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            className="sticky bottom-0 z-30 bg-[#0a0e27]/95 backdrop-blur-md border-t border-[#1a2847] py-6 -mx-4 px-4 sm:mx-0 sm:px-8 mt-12 rounded-t-2xl sm:rounded-2xl shadow-[0_-15px_40px_-15px_rgba(0,0,0,0.5)]"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <p className="text-[#a0aec0] text-sm font-medium mb-1 uppercase tracking-wider">Estimated Total</p>
                <p className="text-3xl font-black text-white">
                  ${currentTotal.toLocaleString()} <span className="text-lg text-white/50 font-medium">USD</span>
                </p>
              </div>
              
              <Button 
                type="submit" 
                disabled={!isFormValid || isSubmitting}
                className="bg-[#00d4ff] text-[#0a0e27] hover:bg-[#00b8e6] hover:brightness-110 active:scale-[0.98] w-full md:w-auto px-10 py-7 text-lg font-bold h-auto disabled:opacity-50 disabled:bg-[#00d4ff] disabled:cursor-not-allowed transition-all"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin mr-2" />
                    Processing...
                  </>
                ) : (
                  'Build My Automation'
                )}
              </Button>
            </div>
            {!isFormValid && (
              <p className="text-sm text-[#00d4ff]/80 mt-4 text-center md:text-right font-medium">
                * Please complete all required fields and acknowledgements to proceed.
              </p>
            )}
          </motion.div>
          
        </form>
      </div>
    </div>
  );
};

export default AutomationRequestPage;