
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventTime: '',
    eventType: '',
    guestCount: '',
    additionalInfo: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare template params for EmailJS
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        eventDate: formData.eventDate,
        eventTime: formData.eventTime,
        eventType: formData.eventType,
        guestCount: formData.guestCount,
        additionalInfo: formData.additionalInfo || 'No additional information provided'
      };
      
      // Send booking email using EmailJS
      const response = await emailjs.send(
        'service_4vlc0r7', // Your Service ID
        'template_eiiy98f', // Your Template ID - you may want to create a different template for bookings
        templateParams,
        'ogQh6AcgQUAdLCNuG' // Your Public Key
      );
      
      console.log('Booking request sent:', response);
      
      // Show success toast
      toast({
        title: "Booking Request Sent!",
        description: "Thank you for your booking request. We'll contact you shortly to confirm the details."
      });
      
      // Close the modal and reset form
      onClose();
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        eventTime: '',
        eventType: '',
        guestCount: '',
        additionalInfo: ''
      });
    } catch (error) {
      console.error("Error sending booking request:", error);
      toast({
        title: "Error",
        description: "There was a problem submitting your booking request. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Tomorrow's date for min date in date picker
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowFormatted = tomorrow.toISOString().split('T')[0];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-burgundy text-center">Book Your Event</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your contact number"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="eventType">Event Type</Label>
              <Select
                value={formData.eventType}
                onValueChange={(value) => handleSelectChange('eventType', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wedding">Wedding</SelectItem>
                  <SelectItem value="corporate">Corporate Event</SelectItem>
                  <SelectItem value="birthday">Birthday Party</SelectItem>
                  <SelectItem value="anniversary">Anniversary</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="eventDate">Event Date</Label>
              <Input
                id="eventDate"
                name="eventDate"
                type="date"
                value={formData.eventDate}
                onChange={handleChange}
                min={tomorrowFormatted}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="eventTime">Event Time</Label>
              <Input
                id="eventTime"
                name="eventTime"
                type="time"
                value={formData.eventTime}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="guestCount">Number of Guests</Label>
            <Input
              id="guestCount"
              name="guestCount"
              type="number"
              value={formData.guestCount}
              onChange={handleChange}
              placeholder="Approximate guest count"
              min="1"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="additionalInfo">Additional Information</Label>
            <Textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              placeholder="Any dietary preferences, special requests, or other details"
              rows={3}
            />
          </div>
          
          <DialogFooter className="mt-6">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose} 
              className="w-full sm:w-auto"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="bg-burgundy hover:bg-burgundy/90 text-white w-full sm:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
