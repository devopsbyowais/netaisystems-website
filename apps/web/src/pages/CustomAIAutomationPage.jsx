import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Brain, ArrowRight, ShieldCheck, Loader2, Zap } from 'lucide-react';
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

const CustomAIAutomationPage = () => {
  const navigate = useNavigate();

  // --- STATE MANAGEMENT ---
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    website: '',
    phonePrimary: '',
    phoneSecondary: '',
    industry: ''
  });

  const [companySize, setCompanySize] = useState('');
  
  const [objectives, setObjectives] = useState([]);
  const [otherObjective, setOtherObjective] = useState('');
  
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [description, setDescription] = useState('');
  
  const [confirmations, setConfirmations] = useState({
    conf1: false,
    conf2: false,
    conf3: false,
    conf4: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- CONSTANTS ---
  const COMPANY_SIZES = [
    '1–10 (Solo/Small)',
    '11–50 (Small Biz)',
    '51–200 (Mid-size)',
    '200+ (Enterprise)'
  ];

  const OBJECTIVE_OPTIONS = [
    'RAG Chatbot',
    'Multi-Channel Marketing & Lead Capture System',
    'Email Fraud Detection & Prevention System',
    'AI Powered News Letter System',
    'Lead Capture & Qualification',
    'Customer Support Help Desk',
    'Proposal & Contract Automation System'
  ];

  const PRICING_PLANS = [
    { id: 1, label: '1 Automation', price: 750 },
    { id: 2, label: '2 Automations', price: 1250 },
    { id: 3, label: '3 Automations', price: 1650 },
    { id: 4, label: '4 Automations', price: 1950 },
    { id: 5, label: '5 Automations', price: 2000 }
  ];

  // --- DYNAMIC LOGIC ---
  const activeCount = objectives.length + (otherObjective.trim() !== '' ? 1 : 0);
  const maxAvailablePlans = Math.max(1, Math.min(5, activeCount));

  // Auto-select the highest available option when requirements change
  useEffect(() => {
    setSelectedPlan(maxAvailablePlans);
  }, [maxAvailablePlans]);

  // --- HANDLERS ---
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const toggleObjective = useCallback((item) => {
    setObjectives(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
  }, []);

  const toggleConf = useCallback((key) => {
    setConfirmations(prev => ({ ...prev, [key]: !prev[key] }));
  }, []);

  // --- VALIDATION ---
  const isFormValid = useMemo(() => {
    const hasBasicInfo = !!(
      formData.fullName.trim() && 
      formData.email.trim() && 
      formData.companyName.trim() && 
      formData.phonePrimary.trim() && 
      formData.industry.trim()
    );
    const hasCompanySize = !!companySize;
    const hasDescription = description.trim().length > 0;
    const hasConfs = confirmations.conf1 && confirmations.conf2 && confirmations.conf3 && confirmations.conf4;
    
    return hasBasicInfo && hasCompanySize && hasDescription && hasConfs;
  }, [formData, companySize, description, confirmations]);

  // --- SUBMISSION ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);

    try {
      const plan = PRICING_PLANS.find(p => p.id === selectedPlan);
      const planString = plan ? `${plan.label} – $${plan.price}/month` : '1 Automation – $750/month';

      const payload = new URLSearchParams({
        full_name: formData.fullName,
        business_email: formData.email,
        company_name: formData.companyName,
        company_website: formData.website,
        primary_contact_number: formData.phonePrimary,
        secondary_contact_number: formData.phoneSecondary,
        industry: formData.industry,
        company_size: companySize,
        use_case: objectives.join(', '),
        custom_use_case: otherObjective,
        automation_plan: planString,
        description: description,
        ack_contact: confirmations.conf1 ? 'Yes' : 'No',
        ack_scope_changes: confirmations.conf2 ? 'Yes' : 'No',
        ack_payment_agreement: confirmations.conf3 ? 'Yes' : 'No',
        ack_terms_privacy: confirmations.conf4 ? 'Yes' : 'No'
      });

      // Send POST request to Google Apps Script webhook
      await fetch('https://script.google.com/macros/s/AKfycbxaHA1lkdUjT7aimWn-SDODptzHT-MnxhFdQNl6qLDrIBoZS0xU63LlmSPSNa87y1O9/exec', {
        method: 'POST',
        mode: 'no-cors', // required for GAS without preflight/CORS config
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: payload.toString()
      });

      toast.success('Thank you! Your request has been submitted successfully. A NetAISystems AI specialist will contact you within 24 hours.');
      
      // Reset form
      setFormData({
        fullName: '', email: '', companyName: '', website: '', phonePrimary: '', phoneSecondary: '', industry: ''
      });
      setCompanySize('');
      setObjectives([]);
      setOtherObjective('');
      setDescription('');
      setConfirmations({ conf1: false, conf2: false, conf3: false, conf4: false });
      setSelectedPlan(1);
      
      // Optional: Navigate to home after a brief delay
      setTimeout(() => navigate('/'), 3000);
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
      <section className="relative pt-32 pb-20 border-b border-[#1a2847] overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Header Image with overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-luminosity"
            style={{ backgroundImage: 'url(https://horizons-cdn.hostinger.com/7db26c42-5cfa-4d6f-8931-02671b24cb00/3165ad6fed4146f3f739c767911e0c30.png)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27]/80 via-[#0a0e27]/90 to-[#0a0e27]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.15)_0%,transparent_70%)]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button 
            type="button"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#a0aec0] hover:text-[#00d4ff] transition-colors mb-10 group w-fit"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back</span>
          </button>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="w-20 h-20 rounded-2xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(0,212,255,0.15)]">
              <Brain className="w-10 h-10 text-[#00d4ff]" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Enterprise AI <span className="text-[#00d4ff]">Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-[#a0aec0] max-w-[65ch] mx-auto leading-relaxed">
              We engineer bespoke AI systems for complex business challenges. Tell us about your infrastructure, goals, and requirements so we can build the perfect solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Form Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <form onSubmit={handleSubmit} className="space-y-10" noValidate>
          
          {/* SECTION 1 - Company & Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="card-navy"
          >
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#1a2847]">
              <div className="section-badge">1</div>
              <h2 className="text-2xl font-bold text-white">Company & Contact Information</h2>
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
                <label className="form-label">Company Name *</label>
                <Input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} placeholder="Acme Corp" className="form-input" required />
              </div>
              <div>
                <label className="form-label">Company Website</label>
                <Input type="url" name="website" value={formData.website} onChange={handleInputChange} placeholder="https://acmecorp.com" className="form-input" />
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

          {/* SECTION 2 - Company Size */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="card-navy"
          >
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#1a2847]">
              <div className="section-badge">2</div>
              <div>
                <h2 className="text-2xl font-bold text-white">Company Size *</h2>
                <p className="text-sm text-[#a0aec0] mt-1">Select your current organization scale.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {COMPANY_SIZES.map(size => {
                const isSelected = companySize === size;
                return (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setCompanySize(size)}
                    className={`p-4 rounded-xl border transition-all duration-300 text-center flex items-center justify-center min-h-[80px] ${
                      isSelected 
                        ? 'border-[#00d4ff] bg-[#00d4ff]/10 text-white shadow-[0_0_20px_-5px_rgba(0,212,255,0.3)]' 
                        : 'border-[#1a2847] bg-[#0a0e27] text-[#a0aec0] hover:border-[#00d4ff]/50 hover:bg-[#0f1535]'
                    }`}
                  >
                    <span className="font-medium">{size}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* SECTION 3 - Automation Objective */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="card-navy"
          >
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#1a2847]">
              <div className="section-badge">3</div>
              <div>
                <h2 className="text-2xl font-bold text-white">Automation Objective</h2>
                <p className="text-sm text-[#a0aec0] mt-1">Select all workflows you'd like to implement.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 mb-8">
              {OBJECTIVE_OPTIONS.map(option => (
                <CustomCheckbox 
                  key={option}
                  label={option}
                  checked={objectives.includes(option)}
                  onChange={() => toggleObjective(option)}
                />
              ))}
            </div>
            
            <div className="pt-6 border-t border-[#1a2847]">
              <label className="form-label font-bold text-white mb-3">Other / Custom Objective</label>
              <Textarea 
                value={otherObjective} 
                onChange={(e) => setOtherObjective(e.target.value)} 
                placeholder="Describe any other specific objectives..." 
                className="form-input min-h-[100px] resize-y" 
              />
            </div>
          </motion.div>

          {/* SECTION 4 - Automations in Use (Pricing Plan) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="card-elevated"
          >
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#1a2847]">
              <div className="section-badge bg-[#00d4ff] text-[#0a0e27]">4</div>
              <div>
                <h2 className="text-2xl font-bold text-white">Automations in Use (Pricing Plan) *</h2>
                <p className="text-sm text-[#00d4ff] mt-1 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" /> Plan automatically calculated based on selected objectives (Maximum 5).
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {PRICING_PLANS.map(plan => {
                const isAvailable = plan.id <= maxAvailablePlans;
                const isSelected = selectedPlan === plan.id;
                
                if (!isAvailable) return null;

                return (
                  <label 
                    key={plan.id}
                    className={`flex items-center justify-between p-5 rounded-xl border cursor-pointer transition-all duration-300 ${
                      isSelected
                        ? 'border-[#00d4ff] bg-[#00d4ff]/10 shadow-[0_0_20px_-5px_rgba(0,212,255,0.2)]'
                        : 'border-[#1a2847] bg-[#0a0e27] hover:border-[#00d4ff]/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                        isSelected ? 'border-[#00d4ff]' : 'border-[#1a2847]'
                      }`}>
                        {isSelected && <div className="w-3 h-3 rounded-full bg-[#00d4ff]" />}
                      </div>
                      <span className={`text-lg font-medium ${isSelected ? 'text-white' : 'text-[#a0aec0]'}`}>
                        {plan.label}
                      </span>
                    </div>
                    <span className={`text-xl font-bold ${isSelected ? 'text-[#00d4ff]' : 'text-white'}`}>
                      ${plan.price.toLocaleString()}/month
                    </span>
                    <input 
                      type="radio" 
                      name="pricingPlan" 
                      className="sr-only" 
                      checked={isSelected}
                      onChange={() => setSelectedPlan(plan.id)}
                    />
                  </label>
                );
              })}
            </div>
          </motion.div>

          {/* SECTION 5 - Describe Your Automation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="card-navy"
          >
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#1a2847]">
              <div className="section-badge">5</div>
              <h2 className="text-2xl font-bold text-white">Describe Your Automation *</h2>
            </div>
            
            <Textarea 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Please describe your specific needs, current workflow, and desired outcomes..." 
              className="form-input min-h-[200px] resize-y text-base leading-relaxed"
              required
            />
          </motion.div>

          {/* SECTION 6 - Final Confirmation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="bg-[#0f1535] border border-[#1a2847] rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#1a2847]">
              <div className="section-badge bg-[#1a2847] text-[#00d4ff] border-none"><ShieldCheck className="w-5 h-5" /></div>
              <h2 className="text-2xl font-bold text-white">Final Confirmation</h2>
            </div>
            
            <div className="space-y-5">
              <CustomCheckbox 
                label="I agree to be contacted by the NetAISystems team for a discovery discussion."
                checked={confirmations.conf1}
                onChange={() => toggleConf('conf1')}
              />
              <CustomCheckbox 
                label="I understand that scope changes may affect the final delivery timeline."
                checked={confirmations.conf2}
                onChange={() => toggleConf('conf2')}
              />
              <CustomCheckbox 
                label="I agree to the payment of the selected package plus the one-time activation fee."
                checked={confirmations.conf3}
                onChange={() => toggleConf('conf3')}
              />
              <CustomCheckbox 
                label="I have read and agree to the Terms of Service and Privacy Policy."
                checked={confirmations.conf4}
                onChange={() => toggleConf('conf4')}
              />
            </div>
          </motion.div>

          {/* BOTTOM SUBMIT SECTION */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            className="sticky bottom-0 z-30 bg-[#0a0e27]/95 backdrop-blur-md border-t border-[#1a2847] py-6 -mx-4 px-4 sm:mx-0 sm:px-8 mt-12 rounded-t-2xl sm:rounded-2xl shadow-[0_-15px_40px_-15px_rgba(0,0,0,0.5)] flex flex-col items-center text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Ready to automate your enterprise?</h3>
            <p className="text-[#a0aec0] mb-6">We respond to qualified requests within 24 hours.</p>
            
            <Button 
              type="submit" 
              disabled={!isFormValid || isSubmitting}
              className="bg-[#00d4ff] text-[#0a0e27] hover:bg-[#00b8e6] hover:brightness-110 active:scale-[0.98] w-full sm:w-auto px-10 py-7 text-lg font-bold h-auto disabled:opacity-50 disabled:bg-[#00d4ff] disabled:cursor-not-allowed transition-all group rounded-xl"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin mr-2" />
                  Processing...
                </>
              ) : (
                <>
                  Request Custom AI Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
            
            {!isFormValid && (
              <p className="text-sm text-[#00d4ff]/80 mt-4 font-medium">
                * Please complete all required fields to submit your request.
              </p>
            )}
          </motion.div>
          
        </form>
      </div>
    </div>
  );
};

export default CustomAIAutomationPage;