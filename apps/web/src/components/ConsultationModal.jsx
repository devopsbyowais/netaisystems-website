import React, { useState } from 'react';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog.jsx';
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

const ConsultationModal = ({ open, onOpenChange }) => {
  const [formData, setFormData] = useState({
    businessEmail: '',
    phone: '',
    companyName: '',
    companyPosition: '',
    companySize: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCompanySizeChange = (value) => {
    setFormData(prev => ({ ...prev, companySize: value }));
  };

  const resetForm = () => {
    setFormData({
      businessEmail: '',
      phone: '',
      companyName: '',
      companyPosition: '',
      companySize: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Map form fields to Google Apps Script expected format
      const payload = {
        email: formData.businessEmail,
        phone: formData.phone,
        company: formData.companyName,
        position: formData.companyPosition,
        size: formData.companySize
      };

      // Submit to Google Apps Script
      // CRITICAL: No response.json() parsing or response.ok checks.
      // If fetch completes without throwing a network error, it's a success.
      await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      // Show success message immediately if fetch didn't throw
      toast.success('Your request has been submitted. We will contact you within 48 hours.', {
        duration: 5000,
        icon: <CheckCircle2 className="w-5 h-5" />
      });

      // Reset form completely
      resetForm();

      // Close modal after 2.5 seconds
      setTimeout(() => {
        onOpenChange(false);
      }, 2500);

    } catch (error) {
      // Only catches actual network failures (e.g., CORS block, offline, DNS failure)
      console.error('Submission error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-[hsl(var(--card))] border-[hsl(var(--border))] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            Book Your AI Automation Consultation
          </DialogTitle>
          <DialogDescription className="text-[hsl(var(--muted-foreground))]">
            Fill out the form below and our team will reach out within 48 hours to discuss your automation needs.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4" noValidate>
          {/* Section 1: Contact Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-[hsl(var(--border))] pb-3">
              <div className="w-7 h-7 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center text-[hsl(var(--primary))] font-bold text-sm">
                1
              </div>
              <h3 className="text-lg font-semibold text-white">Contact Information</h3>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="businessEmail" className="text-[hsl(var(--muted-foreground))]">
                  Business Email *
                </Label>
                <Input
                  id="businessEmail"
                  name="businessEmail"
                  type="email"
                  value={formData.businessEmail}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="bg-[hsl(var(--background))] text-white placeholder:text-gray-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-[hsl(var(--muted-foreground))]">
                  Phone Number (Optional)
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(123) 456-7890"
                  className="bg-[hsl(var(--background))] text-white placeholder:text-gray-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyName" className="text-[hsl(var(--muted-foreground))]">
                  Company Name *
                </Label>
                <Input
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="ABC Technologies"
                  className="bg-[hsl(var(--background))] text-white placeholder:text-gray-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyPosition" className="text-[hsl(var(--muted-foreground))]">
                  Company Position *
                </Label>
                <Input
                  id="companyPosition"
                  name="companyPosition"
                  value={formData.companyPosition}
                  onChange={handleChange}
                  placeholder="CEO, CTO, Marketing Director, etc."
                  className="bg-[hsl(var(--background))] text-white placeholder:text-gray-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Section 2: Business Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-[hsl(var(--border))] pb-3">
              <div className="w-7 h-7 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center text-[hsl(var(--primary))] font-bold text-sm">
                2
              </div>
              <h3 className="text-lg font-semibold text-white">Business Details</h3>
            </div>

            <div className="space-y-3">
              <Label className="text-[hsl(var(--muted-foreground))]">
                Company Size (Optional)
              </Label>
              <RadioGroup 
                value={formData.companySize} 
                onValueChange={handleCompanySizeChange}
                className="space-y-2"
              >
                {COMPANY_SIZES.map((size) => (
                  <div key={size.value} className="flex items-center space-x-3 bg-[hsl(var(--background))] rounded-lg p-3 border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))]/50 transition-colors duration-200">
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
              <p className="text-xs text-[hsl(var(--muted-foreground))] mt-2">
                Select Size (optional - you can skip this field)
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-3 pt-4 border-t border-[hsl(var(--border))]">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
              className="min-w-[100px]"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary min-w-[140px]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Request'
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationModal;