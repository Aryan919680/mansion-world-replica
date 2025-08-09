import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-royal-blue" />,
      title: "Phone",
      details: ["+91 96530 83048"],
      description: "Call us for immediate assistance"
    },
    {
      icon: <Mail className="w-6 h-6 text-royal-blue" />,
      title: "Email",
      details: ["opulentsultions9@gmail.com"],
      description: "Send us your queries anytime"
    },
    {
      icon: <MapPin className="w-6 h-6 text-royal-blue" />,
      title: "Address",
      details: ["FLAT NO- F3/102, Building: KRITIKA APARTMENT Road/Street: SULTANPUR ROAD Nearby Landmark: BEHIND- AMUL BANAS DAIRY Locality/Sub Locality: CG CITY City/Town/Village: Lucknow District: Lucknow State: Uttar Pradesh PIN Code: 226002"],
      description: "Visit our flagship store"
    },
    {
      icon: <Clock className="w-6 h-6 text-royal-blue" />,
      title: "Business Hours",
      details: ["Monday - Saturday: 10AM - 8PM", "Sunday: 11AM - 6PM"],
      description: "We're here to help"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-cream to-background mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
<h2 className="lg:text-[18px] md:text-[28px] font-heading mb-4 md:mb-6">              Get In Touch
            </h2>
        <p className="lg:text-[13px] md:text-[22px] leading-relaxed">
              Have questions about our gifts or need help with a special order? 
              We're here to make your gifting experience extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm font-medium">{detail}</p>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-royal-blue">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What is this regarding?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us how we can help you..." 
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Map & Additional Info */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-royal-blue/20 to-gold/20 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-royal-blue mx-auto mb-2" />
                      <p className="text-lg font-semibold">Interactive Map</p>
                      <p className="text-sm text-muted-foreground">Coming Soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Why Choose The Mansion?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-royal-blue rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Premium Quality</h4>
                      <p className="text-sm text-muted-foreground">Carefully curated gifts of the highest quality</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-royal-blue rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Personalized Service</h4>
                      <p className="text-sm text-muted-foreground">Tailored recommendations for every occasion</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-royal-blue rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Fast Delivery</h4>
                      <p className="text-sm text-muted-foreground">Quick and secure delivery nationwide</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;