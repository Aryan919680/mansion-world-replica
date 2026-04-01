import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import img1 from "@/assets/pro1.png";
import img2 from "@/assets/pro6.png";
import img3 from "@/assets/pro5.png";
import img4 from "@/assets/pro4.png";

export function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', need: '', details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please enter name and email');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsModalOpen(false);
      alert('Thank you — we received your enquiry. Our studio will contact you within one business day.');
      setFormData({ name: '', company: '', email: '', need: '', details: '' });
    }, 900);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-[40vh] lg:min-h-[56vh] flex items-center justify-center px-4 sm:px-5 py-8 sm:py-12 relative overflow-hidden mt-[70px] sm:mt-[80px] lg:mt-[10rem]">
        <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-6 lg:gap-9 items-center">
          <div className="flex-1">
            <h2 className="text-base sm:text-lg lg:text-[18px] font-heading mb-3 md:mb-6">
              Energise the Pursuit of Your Richest Life
            </h2>
            <p className="text-xs sm:text-sm lg:text-[13px] leading-relaxed mt-2">
              Our Johnnie Walker standee isn't just a display — it's an invitation. Designed to embody the iconic "Keep Walking" spirit, it draws the eye, sparks curiosity, and brings the brand to life.
            </p>
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold rounded-full px-5 sm:px-6 py-2.5 sm:py-3 shadow-2xl mt-4 text-xs sm:text-sm"
            >
              Contact Studio →
            </Button>
            <p className="mt-3 text-muted-foreground text-[11px] sm:text-xs">
              Ideal for retail, tasting rooms, and experiential marketing.
            </p>
          </div>

          {/* Hero image - shown on mobile too, smaller */}
          <div className="w-full max-w-[280px] sm:max-w-[320px] lg:w-96 flex-shrink-0">
            <img 
              className="w-full rounded-lg shadow-2xl border border-white/5 transform hover:translate-y-[-8px] hover:scale-105 transition-transform duration-500 ease-out"
              src={img1} 
              alt="Johnnie Walker Standee — hero mockup."
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-5 py-6 sm:py-9">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-5 sm:gap-7 items-start">
          <div>
            <div className="bg-card rounded-xl p-4 sm:p-7 shadow-lg border border-border">
              <h2 className="text-base sm:text-lg lg:text-[18px] font-heading mb-3 md:mb-6">
                Johnnie Walker — Brand Experience Standee
              </h2>
              <p className="text-xs sm:text-sm lg:text-[13px] leading-relaxed mt-2 mb-4">
                This premium freestanding standee was engineered for impact. From the heritage-inspired typography to a rich black-and-gold palette, every element reinforces Johnnie Walker's timeless elegance and adventurous energy.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-4">
                <img src={img2} alt="Front view of Johnnie Walker standee." className="w-full rounded-lg object-cover h-40 sm:h-56 lg:h-72" />
                <img src={img3} alt="Side view — slim profile." className="w-full rounded-lg object-cover h-40 sm:h-56 lg:h-72" />
                <img src={img4} alt="In-store placement." className="w-full rounded-lg object-cover h-40 sm:h-56 lg:h-72 col-span-2 sm:col-span-1" />
              </div>

              <p className="text-[11px] sm:text-xs lg:text-[13px] text-muted-foreground leading-relaxed mt-2">
                Image instructions: front view should be shot on a neutral studio background with even lighting.
              </p>
            </div>

            <section className="mt-5">
              <h2 className="text-base sm:text-lg lg:text-[18px] font-heading mb-3 md:mb-6">Why It Works</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5">
                {[
                  { title: "Strategic Visual Hierarchy", desc: "Logo anchors attention, headline pulls interest, shelves guide the eye to product." },
                  { title: "Premium Materials", desc: "Matte vinyl, acrylic logo with gold foil, warm white LEDs for authentic whisky tones." },
                  { title: "Modular Assembly", desc: "Flat-pack friendly, T-nut repeat assembly and hidden cable channels make it retail-ready." },
                ].map((card) => (
                  <div key={card.title} className="bg-amber-50 p-3 sm:p-4 rounded-lg border border-amber-100">
                    <h3 className="text-sm sm:text-base lg:text-[18px] font-heading mb-2">{card.title}</h3>
                    <p className="text-[11px] sm:text-xs lg:text-[13px] leading-relaxed text-muted-foreground">{card.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="bg-card rounded-xl p-4 sm:p-7 shadow-lg border border-border">
            <h2 className="text-base sm:text-lg lg:text-[18px] font-heading mb-3 md:mb-6">Bring Johnnie's World to Your Venue</h2>
            <p className="text-xs sm:text-sm lg:text-[13px] leading-relaxed mt-2">
              Your brand deserves more than a display — it deserves a conversation starter.
            </p>

            <ul className="pl-4 mt-3 text-foreground space-y-1 text-xs sm:text-sm">
              <li><strong>Production-ready specs</strong> and shop drawings</li>
              <li><strong>CNC-ready files</strong> & print-ready artwork</li>
              <li><strong>On-site assembly</strong> or local fabrication support</li>
            </ul>

            <div className="mt-4">
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold rounded-full text-xs sm:text-sm"
              >
                Contact Studio →
              </Button>
            </div>
            <p className="text-[11px] sm:text-xs lg:text-[13px] leading-relaxed mt-3 text-muted-foreground">
              Prefer email? Send specs to{' '}
              <a href="mailto:studio@opulent.com" className="text-primary hover:underline">
                studio@opulent.com
              </a>
            </p>
          </aside>
        </div>
      </main>

      {/* Sticky CTA */}
      <div className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-50">
        <Button 
          onClick={() => setIsModalOpen(true)}
          className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all text-xs sm:text-sm"
        >
          Contact Studio →
        </Button>
      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-background rounded-lg max-w-2xl w-full p-4 sm:p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h2 className="text-base sm:text-lg font-heading mb-1">Contact the Studio</h2>
                <p className="text-[11px] sm:text-xs text-muted-foreground">
                  Quick 2-step enquiry — we'll get back within one business day.
                </p>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsModalOpen(false)} className="text-muted-foreground hover:text-foreground flex-shrink-0">
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <Label htmlFor="name" className="text-xs text-muted-foreground">Name</Label>
                  <Input id="name" required placeholder="Your full name" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} className="text-sm" />
                </div>
                <div>
                  <Label htmlFor="company" className="text-xs text-muted-foreground">Company / Branch</Label>
                  <Input id="company" placeholder="Bank or company name" value={formData.company} onChange={(e) => handleInputChange('company', e.target.value)} className="text-sm" />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-xs text-muted-foreground">Email</Label>
                <Input id="email" type="email" required placeholder="you@company.com" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} className="text-sm" />
              </div>

              <div>
                <Label className="text-xs text-muted-foreground">Quick requirement</Label>
                <Select value={formData.need} onValueChange={(value) => handleInputChange('need', value)}>
                  <SelectTrigger className="text-sm"><SelectValue placeholder="Choose…" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Standee: single unit</SelectItem>
                    <SelectItem value="rollout">Standee: 10 units (rollout)</SelectItem>
                    <SelectItem value="posm">Custom POSM / POS displays</SelectItem>
                    <SelectItem value="banking">Banking Stationery + Display</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="details" className="text-xs text-muted-foreground">Details / Timeline</Label>
                <Textarea id="details" placeholder="Quantities, desired finish, timeline…" value={formData.details} onChange={(e) => handleInputChange('details', e.target.value)} className="min-h-[80px] sm:min-h-[120px] text-sm" />
              </div>

              <div className="flex gap-2 justify-end pt-1 sm:pt-2">
                <Button type="submit" disabled={isSubmitting} className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold text-xs sm:text-sm">
                  {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                </Button>
                <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)} className="text-xs sm:text-sm">
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}
