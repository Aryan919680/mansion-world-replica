import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-serif font-bold mb-4 sm:mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to find your dream mansion? Our expert team is here to guide you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold mb-4 sm:mb-6">Contact Information</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                Reach out to us through any of the following channels. We're available 24/7 for our valued clients.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {[
                { icon: Phone, title: "Phone", detail: "+1 (555) 123-4567" },
                { icon: Mail, title: "Email", detail: "contact@opulentsolution.com" },
                { icon: MapPin, title: "Office", detail: "123 Luxury Avenue\nBeverly Hills, CA 90210" },
                { icon: Clock, title: "Hours", detail: "Monday - Sunday\n24/7 Available" },
              ].map((item) => (
                <div key={item.title} className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">{item.title}</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm whitespace-pre-line">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="card-luxury">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-lg sm:text-xl lg:text-2xl font-serif">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                      Full Name
                    </label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full text-sm" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                      Email Address
                    </label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full text-sm" />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Phone Number
                  </label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="w-full text-sm" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full resize-none text-sm"
                    placeholder="Tell us about your dream property..."
                  />
                </div>

                <Button type="submit" className="btn-luxury w-full text-sm sm:text-base">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
