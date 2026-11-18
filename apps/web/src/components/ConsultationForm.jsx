import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogTrigger 
} from '@/components/ui/dialog.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select.jsx';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyg-mMhgq3E9bqcf_vCzncGvQBqbJySTE8NmOoFS90HKhFUwdpLz-wbo6SSl31yWapt/exec';

const ConsultationForm = () => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    company: '',
    position: '',
    size: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
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
    e.preventDefault();

    if (!formData.email.trim() || !formData.company.trim() || !formData.position.trim()) {
      toast.error('Please fill in all required fields (Email, Company, Position).');
      return;
    }

    setIsSubmitting(true);

    try {
      const submitData = new FormData(e.target);
      
      if (!submitData.has('size') && formData.size) {
        submitData.append('size', formData.size);
      }

      await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        body: submitData
      });

      toast.success('Your request has been submitted. We will contact you within 48 hours.', {
        duration: 4000
      });

      resetForm();
      setOpen(false);

    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary))]/90 font-medium shadow-sm transition-all active:scale-[0.98] h-8 sm:h-10 px-3 sm:px-4 text-xs sm:text-sm">
          <span className="hidden sm:inline">Book Consultation</span>
          <span className="sm:hidden">Book</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[380px] w-[95vw] max-h-[95vh] overflow-y-auto p-4 sm:p-5 bg-[hsl(var(--card))] border-[hsl(var(--border))] text-[hsl(var(--card-foreground))] gap-3">
        <DialogHeader className="space-y-1.5">
          <DialogTitle className="text-lg font-bold leading-none">Book a Consultation</DialogTitle>
          <DialogDescription className="text-xs text-[hsl(var(--muted-foreground))]">
            Fill out the form below and our team will reach out within 48 hours.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-3" noValidate>
          <input type="hidden" name="size" value={formData.size} />

          <div className="space-y-1">
            <Label htmlFor="email" className="text-xs text-[hsl(var(--foreground))]">
              Business Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="text"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@company.com"
              className="h-8 text-sm bg-[hsl(var(--background))] border-[hsl(var(--border))] text-[hsl(var(--foreground))]"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="phone" className="text-xs text-[hsl(var(--foreground))]">
              Phone Number <span className="text-[hsl(var(--muted-foreground))] font-normal">(Optional)</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="text"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(123) 456-7890"
              className="h-8 text-sm bg-[hsl(var(--background))] border-[hsl(var(--border))] text-[hsl(var(--foreground))]"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="company" className="text-xs text-[hsl(var(--foreground))]">
              Company Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              placeholder="Acme Corp"
              className="h-8 text-sm bg-[hsl(var(--background))] border-[hsl(var(--border))] text-[hsl(var(--foreground))]"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="position" className="text-xs text-[hsl(var(--foreground))]">
              Company Position <span className="text-destructive">*</span>
            </Label>
            <Input
              id="position"
              name="position"
              type="text"
              value={formData.position}
              onChange={handleChange}
              placeholder="CEO, CTO, Manager"
              className="h-8 text-sm bg-[hsl(var(--background))] border-[hsl(var(--border))] text-[hsl(var(--foreground))]"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="size" className="text-xs text-[hsl(var(--foreground))]">
              Company Size <span className="text-[hsl(var(--muted-foreground))] font-normal">(Optional)</span>
            </Label>
            <Select value={formData.size} onValueChange={handleSelectChange}>
              <SelectTrigger className="h-8 text-sm bg-[hsl(var(--background))] border-[hsl(var(--border))] text-[hsl(var(--foreground))]">
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent className="bg-[hsl(var(--popover))] border-[hsl(var(--border))] text-[hsl(var(--popover-foreground))]">
                <SelectItem value="1-10" className="text-sm">1-10 employees</SelectItem>
                <SelectItem value="11-50" className="text-sm">11-50 employees</SelectItem>
                <SelectItem value="51-100" className="text-sm">51-100 employees</SelectItem>
                <SelectItem value="100+" className="text-sm">100+ employees</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-9 text-sm bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary))]/90 transition-all active:scale-[0.98]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-3 w-3 animate-spin" />
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

export default ConsultationForm;