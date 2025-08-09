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
    name: '',
    company: '',
    email: '',
    need: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please enter name and email');
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call
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
      <section className="min-h-[56vh] flex items-center justify-center bg-gradient-to-b from-black to-amber-900/20 text-white px-5 py-12 relative overflow-hidden lg:mt-[10rem] md:mt-24">{/* Added top margin for fixed header */}
        <div className="max-w-7xl w-full flex gap-9 items-center">
          <div className="flex-1">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-yellow-600 mb-3">
              Energise the Pursuit of Your Richest Life
            </h1>
            <p className="text-yellow-50/90 mb-5 text-lg leading-relaxed">
              Our Johnnie Walker standee isn't just a display — it's an invitation. Designed to embody the iconic "Keep Walking" spirit, it draws the eye, sparks curiosity, and brings the brand to life.
            </p>
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold rounded-full px-6 py-3 shadow-2xl"
            >
              Contact Studio →
            </Button>
            <p className="mt-4 text-yellow-50/60 text-sm">
              Ideal for retail, tasting rooms, and experiential marketing.
            </p>
          </div>

          <div className="hidden lg:block w-96 flex-shrink-0">
            <img 
              className="w-full rounded-lg shadow-2xl border border-white/5 transform hover:translate-y-[-8px] hover:scale-105 transition-transform duration-500 ease-out"
              src={img1} 
              alt="Johnnie Walker Standee — hero mockup. Front view with gold logo and warm lighting."
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-5 py-9">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-7 items-start">
          <div>
            <div className="bg-card rounded-xl p-7 shadow-lg border border-border">
              <h2 className="font-serif text-foreground text-2xl lg:text-3xl mb-3">
                Johnnie Walker — Brand Experience Standee
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5 text-lg">
                This premium freestanding standee was engineered for impact. From the heritage-inspired typography to a rich black-and-gold palette, every element reinforces Johnnie Walker's timeless elegance and adventurous energy. Slim profile, high impact: perfect for point-of-purchase activation, tasting events and venues that demand presence without bulk.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                <img 
                  src={img2}
                  alt="Front view of Johnnie Walker standee — gold logo on matte black face with three product shelves."
                  className="w-full rounded-lg object-cover h-72"
                />
                <img 
                  src={img3}
                  alt="Side view — slim profile, shelf depths and base ballast shown."
                  className="w-full rounded-lg object-cover h-72"
                />
                <img 
                  src={img4} 
                  alt="In-store placement — standee beside premium product display, showing scale and presence."
                  className="w-full rounded-lg object-cover h-72"
                />
              </div>

              <p className="text-muted-foreground text-sm">
                Image instructions: front view should be shot on a neutral studio background with even lighting. Side profile to include a scale reference (human or shelving). In-store placement photo should show the display in a retail aisle with product interaction.
              </p>
            </div>

            <section className="mt-5">
              <h3 className="text-xl font-semibold mb-3">Why It Works</h3>
              <div className="flex flex-wrap gap-5">
                <div className="flex-1 min-w-[220px] bg-amber-50 p-4 rounded-lg border border-amber-100">
                  <h4 className="font-semibold text-foreground mb-2">Strategic Visual Hierarchy</h4>
                  <p className="text-muted-foreground text-sm m-0">
                    Logo anchors attention, headline pulls interest, shelves guide the eye to product.
                  </p>
                </div>
                <div className="flex-1 min-w-[220px] bg-amber-50 p-4 rounded-lg border border-amber-100">
                  <h4 className="font-semibold text-foreground mb-2">Premium Materials</h4>
                  <p className="text-muted-foreground text-sm m-0">
                    Matte vinyl, acrylic logo with gold foil, warm white LEDs for authentic whisky tones.
                  </p>
                </div>
                <div className="flex-1 min-w-[220px] bg-amber-50 p-4 rounded-lg border border-amber-100">
                  <h4 className="font-semibold text-foreground mb-2">Modular Assembly</h4>
                  <p className="text-muted-foreground text-sm m-0">
                    Flat-pack friendly, T-nut repeat assembly and hidden cable channels make it retail-ready.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <aside className="bg-card rounded-xl p-7 shadow-lg border border-border">
            <h3 className="text-xl font-semibold mb-3">Bring Johnnie's World to Your Venue</h3>
            <p className="text-muted-foreground mb-3">
              Your brand deserves more than a display — it deserves a conversation starter. Let our studio craft standees that sell a story as much as they sell a product.
            </p>

            <ul className="pl-5 mt-3 text-foreground space-y-1">
              <li><strong>Production-ready specs</strong> and shop drawings</li>
              <li><strong>CNC-ready files</strong> & print-ready artwork</li>
              <li><strong>On-site assembly</strong> or local fabrication support</li>
            </ul>

            <div className="mt-4">
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold rounded-full"
              >
                Contact Studio →
              </Button>
            </div>
            <p className="mt-3 text-muted-foreground text-sm">
              Prefer email? Send specs to{' '}
              <a href="mailto:studio@opulent.com" className="text-primary hover:underline">
                studio@opulent.com
              </a>
            </p>
          </aside>
        </div>

        <footer className="text-center text-muted-foreground mt-12 mb-20">
          Preview generated by Webiosis • Replace placeholders with final images & Pantone specs for production
        </footer>
      </main>

      {/* Sticky CTA */}
      <div className="fixed right-6 bottom-6 z-50">
        <Button 
          onClick={() => setIsModalOpen(true)}
          className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
        >
          Contact Studio →
        </Button>
      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg max-w-2xl w-full p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-3">
              <div>
                <h3 className="text-xl font-semibold m-0">Contact the Studio</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Quick 2-step enquiry — we'll get back within one business day.
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsModalOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-sm text-muted-foreground">Name</Label>
                  <Input
                    id="name"
                    required
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="company" className="text-sm text-muted-foreground">Company / Branch</Label>
                  <Input
                    id="company"
                    placeholder="Bank or company name"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-sm text-muted-foreground">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>

              <div>
                <Label className="text-sm text-muted-foreground">Quick requirement (select any)</Label>
                <Select value={formData.need} onValueChange={(value) => handleInputChange('need', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose…" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Standee: single unit</SelectItem>
                    <SelectItem value="rollout">Standee: 10 units (rollout)</SelectItem>
                    <SelectItem value="posm">Custom POSM / POS displays</SelectItem>
                    <SelectItem value="banking">Banking Stationery + Display</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="details" className="text-sm text-muted-foreground">Details / Timeline</Label>
                <Textarea
                  id="details"
                  placeholder="Quantities, desired finish, timeline, upload link (optional)"
                  value={formData.details}
                  onChange={(e) => handleInputChange('details', e.target.value)}
                  className="min-h-[120px]"
                />
              </div>

              <div className="flex gap-2 justify-end pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold"
                >
                  {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsModalOpen(false)}
                >
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