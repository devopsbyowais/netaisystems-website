import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Loader2, ShieldCheck, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Checkbox } from '@/components/ui/checkbox.jsx';

const INDUSTRIES = [
  'Technology', 'Healthcare', 'Finance', 'E-commerce', 
  'Education', 'Real Estate', 'Manufacturing', 
  'Consulting', 'Telecommunications', 'Other'
];

const DEMO_OPTIONS = [
  'RAG Chatbot',
  'Multi-Channel Marketing & Lead Capture System',
  'Email Fraud Detection & Prevention System',
  'AI Powered Newsletter System',
  'Lead Capture & Qualification',
  'Customer Support Help Desk',
  'Proposal & Contract Automation System'
];

const RagChatbotDemoRequestPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    businessEmail: '',
    phoneNumber: '',
    industry: '',
    companyWebsite: '',
    automationDemos: [],
    requirements: '',
    consent: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    // Required fields
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company Name is required';
    if (!formData.industry) newErrors.industry = 'Industry is required';
    if (formData.automationDemos.length === 0) newErrors.automationDemos = 'Please select at least one demo solution';
    if (!formData.requirements.trim()) newErrors.requirements = 'Requirements description is required';
    if (!formData.consent) newErrors.consent = 'You must accept the privacy policy to continue';

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = 'Business Email is required';
    } else if (!emailRegex.test(formData.businessEmail)) {
      newErrors.businessEmail = 'Please enter a valid email address';
    }

    // Phone validation: supports +1 (555) 123-4567, 555-123-4567, 5551234567
    const phoneRegex = /^(\+\d{1,3}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required';
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleDemoToggle = (demo, checked) => {
    setFormData(prev => {
      const updatedDemos = checked
        ? [...prev.automationDemos, demo]
        : prev.automationDemos.filter(d => d !== demo);
      
      return { ...prev, automationDemos: updatedDemos };
    });

    if (errors.automationDemos) {
      setErrors(prev => ({ ...prev, automationDemos: null }));
    }
  };

  const handleConsentChange = (checked) => {
    setFormData(prev => ({ ...prev, consent: checked }));
    if (errors.consent) {
      setErrors(prev => ({ ...prev, consent: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fix the errors in the form before submitting.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare data for x-www-form-urlencoded format
      const formParams = new URLSearchParams();
      formParams.append('fullName', formData.fullName);
      formParams.append('companyName', formData.companyName);
      formParams.append('businessEmail', formData.businessEmail);
      formParams.append('phoneNumber', formData.phoneNumber);
      formParams.append('industry', formData.industry);
      formParams.append('companyWebsite', formData.companyWebsite);
      formParams.append('useCase', formData.automationDemos.join(', '));
      formParams.append('requirements', formData.requirements);
      formParams.append('consent', formData.consent.toString());

      // Submit to Google Apps Script Webhook
      await fetch('https://script.google.com/macros/s/AKfycbzf_G3f2J0CT9VSShNWuB6vAJBm2At5JLyYryhaYDMykQE8owphHlP7Wzm25SLJ_WFS/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formParams.toString(),
      });
      
      toast.success('Your demo request has been successfully submitted. A NetAISystems expert will reach out within 24 hours to arrange your personalized AI demonstration.', {
        duration: 8000
      });

      // Reset form
      setFormData({
        fullName: '',
        companyName: '',
        businessEmail: '',
        phoneNumber: '',
        industry: '',
        companyWebsite: '',
        automationDemos: [],
        requirements: '',
        consent: false
      });
      
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Failed to submit form. Please try again or contact support.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Request an AI Automation Demo - NetAISystems</title>
        <meta 
          name="description" 
          content="Explore how NetAISystems empowers businesses with intelligent automation. Schedule a personalized demo tailored to your needs." 
        />
      </Helmet>

      <div className="w-full bg-[hsl(var(--background))]">
        
        {/* FORM SECTION */}
        <section id="demo-form" className="relative pb-24 pt-32 md:pt-40 overflow-hidden min-h-screen">
          {/* Background Ambient Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[hsl(var(--primary))]/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 bg-pattern-dots opacity-30 pointer-events-none" />

          <div className="section-container relative z-10 max-w-4xl mx-auto">
            
            {/* Form Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-balance text-white">
                Request an <span className="text-gradient-cyan">AI Automation Demo</span>
              </h1>
              <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto leading-relaxed">
                Explore how NetAISystems empowers businesses with intelligent automation. Select your preferred solution and schedule a personalized demo tailored to your needs.
              </p>
            </motion.div>

            {/* Form Container */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 md:p-10 shadow-2xl shadow-black/40 relative z-20 backdrop-blur-sm"
            >
              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                
                {/* Section 1: Your Information */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 border-b border-[hsl(var(--border))] pb-4">
                    <div className="w-8 h-8 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center text-[hsl(var(--primary))] font-bold">1</div>
                    <h3 className="text-xl font-bold text-white">Your Information</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-[hsl(var(--muted-foreground))]">Full Name *</Label>
                      <Input 
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`form-input bg-[hsl(var(--background))] ${errors.fullName ? 'border-destructive focus:ring-destructive' : ''}`}
                      />
                      {errors.fullName && <p className="text-sm text-destructive mt-1">{errors.fullName}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="companyName" className="text-[hsl(var(--muted-foreground))]">Company Name *</Label>
                      <Input 
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="ABC Technologies"
                        className={`form-input bg-[hsl(var(--background))] ${errors.companyName ? 'border-destructive focus:ring-destructive' : ''}`}
                      />
                      {errors.companyName && <p className="text-sm text-destructive mt-1">{errors.companyName}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="businessEmail" className="text-[hsl(var(--muted-foreground))]">Business Email *</Label>
                      <Input 
                        id="businessEmail"
                        name="businessEmail"
                        type="email"
                        value={formData.businessEmail}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className={`form-input bg-[hsl(var(--background))] ${errors.businessEmail ? 'border-destructive focus:ring-destructive' : ''}`}
                      />
                      {errors.businessEmail && <p className="text-sm text-destructive mt-1">{errors.businessEmail}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phoneNumber" className="text-[hsl(var(--muted-foreground))]">Phone Number *</Label>
                      <Input 
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        className={`form-input bg-[hsl(var(--background))] ${errors.phoneNumber ? 'border-destructive focus:ring-destructive' : ''}`}
                      />
                      {errors.phoneNumber && <p className="text-sm text-destructive mt-1">{errors.phoneNumber}</p>}
                    </div>
                  </div>
                </div>

                {/* Section 2: Business Details */}
                <div className="space-y-6 pt-4">
                  <div className="flex items-center gap-3 border-b border-[hsl(var(--border))] pb-4">
                    <div className="w-8 h-8 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center text-[hsl(var(--primary))] font-bold">2</div>
                    <h3 className="text-xl font-bold text-white">Business Details</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="industry" className="text-[hsl(var(--muted-foreground))]">Industry *</Label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className={`form-input bg-[hsl(var(--background))] w-full appearance-none ${errors.industry ? 'border-destructive focus:ring-destructive' : ''}`}
                      >
                        <option value="" disabled>Select your industry</option>
                        {INDUSTRIES.map(ind => (
                          <option key={ind} value={ind}>{ind}</option>
                        ))}
                      </select>
                      {errors.industry && <p className="text-sm text-destructive mt-1">{errors.industry}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="companyWebsite" className="text-[hsl(var(--muted-foreground))]">Company Website (Optional)</Label>
                      <Input 
                        id="companyWebsite"
                        name="companyWebsite"
                        type="url"
                        value={formData.companyWebsite}
                        onChange={handleChange}
                        placeholder="https://www.company.com"
                        className="form-input bg-[hsl(var(--background))]"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 3: Automation Demo Selection */}
                <div className="space-y-6 pt-4">
                  <div className="flex items-center gap-3 border-b border-[hsl(var(--border))] pb-4">
                    <div className="w-8 h-8 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center text-[hsl(var(--primary))] font-bold">3</div>
                    <h3 className="text-xl font-bold text-white">Automation Demo Selection *</h3>
                  </div>

                  <div className="space-y-4">
                    <p className="text-sm text-[hsl(var(--muted-foreground))]">Select the automation solutions you are interested in seeing:</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {DEMO_OPTIONS.map((demo) => (
                        <div key={demo} className="flex items-start space-x-3 p-3 rounded-lg border border-[hsl(var(--border))]/50 bg-[hsl(var(--background))]/50 hover:bg-[hsl(var(--background))] transition-colors">
                          <Checkbox 
                            id={`demo-${demo}`}
                            checked={formData.automationDemos.includes(demo)}
                            onCheckedChange={(checked) => handleDemoToggle(demo, checked)}
                            className="mt-0.5 data-[state=checked]:bg-[hsl(var(--primary))] data-[state=checked]:border-[hsl(var(--primary))]"
                          />
                          <Label
                            htmlFor={`demo-${demo}`}
                            className="text-sm font-medium leading-snug cursor-pointer select-none text-[hsl(var(--card-foreground))]"
                          >
                            {demo}
                          </Label>
                        </div>
                      ))}
                    </div>
                    {errors.automationDemos && <p className="text-sm text-destructive mt-2">{errors.automationDemos}</p>}
                  </div>
                </div>

                {/* Section 4: Project Requirements */}
                <div className="space-y-6 pt-4">
                  <div className="flex items-center gap-3 border-b border-[hsl(var(--border))] pb-4">
                    <div className="w-8 h-8 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center text-[hsl(var(--primary))] font-bold">4</div>
                    <h3 className="text-xl font-bold text-white">Project Requirements</h3>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="requirements" className="text-[hsl(var(--muted-foreground))]">Describe Your Requirements *</Label>
                    <Textarea 
                      id="requirements"
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleChange}
                      placeholder="Tell us about your business needs and automation goals."
                      className={`form-input bg-[hsl(var(--background))] min-h-[150px] resize-y ${errors.requirements ? 'border-destructive focus:ring-destructive' : ''}`}
                    />
                    {errors.requirements && <p className="text-sm text-destructive mt-1">{errors.requirements}</p>}
                  </div>
                </div>

                {/* Consent & Submit */}
                <div className="space-y-8 pt-6 border-t border-[hsl(var(--border))]">
                  <div className="flex items-start space-x-3 bg-[hsl(var(--background))]/50 p-4 rounded-xl border border-[hsl(var(--border))]/50">
                    <Checkbox 
                      id="consent" 
                      name="consent"
                      checked={formData.consent}
                      onCheckedChange={handleConsentChange}
                      className="mt-1 data-[state=checked]:bg-[hsl(var(--primary))] data-[state=checked]:border-[hsl(var(--primary))]"
                    />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="consent"
                        className="text-sm font-medium leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[hsl(var(--card-foreground))] cursor-pointer select-none"
                      >
                        I agree to be contacted by NetAISystems regarding this demo request and accept the Privacy Policy. *
                      </label>
                      {errors.consent && <p className="text-sm text-destructive mt-1">{errors.consent}</p>}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
                    <div className="flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))]">
                      <ShieldCheck className="w-4 h-4 text-[hsl(var(--primary))]" />
                      <span>Your data is securely encrypted and handled with strict confidentiality.</span>
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="btn-primary w-full sm:w-auto min-w-[200px]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Request Demo
                          <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>

              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RagChatbotDemoRequestPage;