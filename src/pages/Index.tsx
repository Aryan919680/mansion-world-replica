import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import {BrandStatement} from "@/components/BrandStatement";
const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BrandStatement />
      <FeaturedProperties />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
