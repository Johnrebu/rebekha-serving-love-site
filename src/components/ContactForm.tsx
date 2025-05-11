
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration with your provided credentials
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        subject: formData.subject || 'Website Inquiry',
        message: formData.message
      };
      
      // Send email using EmailJS
      const response = await emailjs.send(
        'service_4vlc0r7',  // Your Service ID
        'template_eiiy98f', // Your Template ID
        templateParams,
        'ogQh6AcgQUAdLCNuG' // Your Public Key
      );
      
      console.log('Email sent successfully:', response);
      
      // Show success toast
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you shortly."
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return <section id="contact" className="section-padding bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-burgundy font-medium">Get in Touch</span>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle mx-auto">
            Have questions or ready to plan your next event? Reach out to us and we'll be happy to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-6 text-burgundy">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required className="w-full" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required className="w-full" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" className="w-full" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="What is this regarding?" className="w-full" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="How can we help you?" rows={5} required className="w-full" />
              </div>
              <Button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
          
          {/* Contact Information - Kept the same */}
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-6 text-burgundy">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-burgundy/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-burgundy" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-600 mt-1">
                    No.19, Perumal Kovil Street, Irumbuliyur, West Tambaram, Chennai-45
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-burgundy/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-burgundy" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-600 mt-1">
                    <a href="tel:+919445435102" className="hover:text-burgundy">+91 9445435102
+91 8925477007
                  </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-burgundy/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-burgundy" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600 mt-1">
                    <a href="mailto:christonancy70@gmail.com" className="hover:text-burgundy">christonancy70@gmail.com</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-burgundy/10 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-burgundy" />
                </div>
                <div>
                  <h4 className="font-medium">Business Hours</h4>
                  <p className="text-gray-600 mt-1">
                    Monday to Saturday: 9:00 AM - 7:00 PM<br />
                    Sunday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
            
            {/* Google Map */}
            <div className="rounded-lg overflow-hidden shadow-md h-64 mt-6">
              <iframe title="Rebekha Caterers Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.675379497844!2d80.10110287422997!3d12.992922814157047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f76c4f84f375%3A0xc826cc4f8ce25bc8!2sTambaram%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1697566500000!5m2!1sen!2sin" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </div>
    </section>;
}
