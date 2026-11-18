import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, Link } from 'react-router-dom';
import { Loader2, CheckCircle2, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Button } from '@/components/ui/button.jsx';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group.jsx';

const COMPANY_SIZES = [
  { value: '1-10', label: '1-10 employees' },
  { value: '11-50', label: '11-50 employees' },
  { value: '51-100', label: '51-100 employees' },
  { value: '100+', label: '100+ employees' }
];

const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwhzeHYZKwFnReN9UjKW0w552ZEB7oTBun0ZA9VERQoraLoxRTarssKhAm879eNVOeyjQ/exec';

const ConsultationPage = () => {
  const navigate = useNavigate();
  
  // State matches the required logical fields
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    company: '',
    position: '',
    size: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCompanySizeChange = (value) => {
    setFormData(prev => ({ ...prev, size: value }));
  };

  const resetForm = () => {
    setFormData({
      email: '',
      phone: '',
      company: '',
      position: '',
      size: ''
    });
  };

  const handleSubmit = async (e) => {
    // 2) Add custom submit event handler with event.preventDefault() to block default form submission completely.
    e.preventDefault();
    
    // 8) VALIDATION: Accept ANY input format, only ensure required fields are not empty
    if (!formData.email.trim() || !formData.company.trim() || !formData.position.trim() || !formData.size) {
      toast.error('Please fill in all required fields (Email, Company, Position, Size).');
      return;
    }

    setIsSubmitting(true);

    try {
      // 3) Use FormData(form) to collect all form inputs.
      const submitData = new FormData(e.target);
      
      // Ensure the size value from the custom RadioGroup is explicitly included
      // if it wasn't automatically captured by FormData
      if (!submitData.has('size') && formData.size) {
        submitData.append('size', formData.size);
      }

      // 4) Send fetch POST request with FormData (NO JSON, NO manual Content-Type headers)
      await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        body: submitData
      });

      // 6) SUCCESS: If fetch completes, show toast and reset all form fields. Do NOT parse response.
      toast.success('Your request has been submitted. We will contact you within 48 hours.', {
        duration: 5000,
        icon: <CheckCircle2 className="w-5 h-5" />
      });

      resetForm();

      setTimeout(() => {
        navigate('/');
      }, 2500);

    } catch (error) {
      // 7) ERROR: Only show error if network request completely fails
      console.error('Submission error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>{`Book Consultation | NetAiSystems`}</title>
        <meta name="description" content="Book a consultation with NetAISystems to discuss AI automation, software development, cloud engineering, business systems, or creative digital services." />
      </Helmet>

      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm font-medium text-[hsl(var(--muted-foreground))] hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 sm:p-8 border-b border-[hsl(var(--border))] bg-[hsl(var(--card))]/50">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Book Your Consultation
            </h1>
            <p className="text-[hsl(var(--muted-foreground))] text-sm sm:text-base">
              Tell us about your project and our team will reach out within 48 hours to discuss the right approach.
            </p>
          </div>

          {/* 1) Remove all Hostinger form attributes, actions, and integrations. NO action, NO method. */}
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-8" noValidate>
            {/* Hidden input to guarantee FormData capture for the size field */}
            <input type="hidden" name="size" value={formData.size} />

            {/* Section 1: Contact Information */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-[hsl(var(--border))] pb-3">
                <div className="w-7 h-7 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center text-[hsl(var(--primary))] font-bold text-sm">
                  1
                </div>
                <h2 className="text-lg font-semibold text-white">Contact Information</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="email" className="text-[hsl(var(--muted-foreground))]">
                    Business Email *
                  </Label>
                  {/* 5) Field mapping: input name matches Google Apps Script expectations */}
                  {/* Removing browser 'required' and 'type="email"' to enforce custom validation only (req 8) */}
                  <Input
                    id="email"
                    name="email"
                    type="text"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="bg-[hsl(var(--background))] text-white placeholder:text-gray-500"
                  />
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="phone" className="text-[hsl(var(--muted-foreground))]">
                    Phone Number (Optional)
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="text"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(123) 456-7890"
                    className="bg-[hsl(var(--background))] text-white placeholder:text-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-[hsl(var(--muted-foreground))]">
                    Company Name *
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="ABC Technologies"
                    className="bg-[hsl(var(--background))] text-white placeholder:text-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="position" className="text-[hsl(var(--muted-foreground))]">
                    Company Position *
                  </Label>
                  <Input
                    id="position"
                    name="position"
                    type="text"
                    value={formData.position}
                    onChange={handleChange}
                    placeholder="CEO, CTO, Marketing, etc."
                    className="bg-[hsl(var(--background))] text-white placeholder:text-gray-500"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Business Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-[hsl(var(--border))] pb-3">
                <div className="w-7 h-7 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center text-[hsl(var(--primary))] font-bold text-sm">
                  2
                </div>
                <h2 className="text-lg font-semibold text-white">Business Details *</h2>
              </div>

              <div className="space-y-4">
                <Label className="text-[hsl(var(--muted-foreground))]">
                  Company Size
                </Label>
                <RadioGroup 
                  value={formData.size} 
                  onValueChange={handleCompanySizeChange}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                >
                  {COMPANY_SIZES.map((size) => (
                    <div key={size.value} className="flex items-center space-x-3 bg-[hsl(var(--background))] rounded-lg p-4 border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))]/50 transition-colors duration-200">
                      <RadioGroupItem 
                        value={size.value} 
                        id={`size-${size.value}`}
                        className="text-[hsl(var(--primary))]"
                      />
                      <Label 
                        htmlFor={`size-${size.value}`} 
                        className="text-white font-normal cursor-pointer flex-1"
                      >
                        {size.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-[hsl(var(--border))]">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary h-12 text-base font-semibold"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Request'
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;