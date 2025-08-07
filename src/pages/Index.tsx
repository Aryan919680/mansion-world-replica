import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import {BrandStatement} from "@/components/BrandStatement";
import { Banner } from "@/components/Banner";
import { ModernGiving } from "@/components/ModernGiving";
import { GiftCollections } from "@/components/GiftCollections";
import { CustomGiftDesign } from "@/components/CustomGiftDesign";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BrandStatement />
      <Banner />
      <ModernGiving />
    {/*  <Services />
      <About />
      <Contact /> */}
      <GiftCollections />
      <CustomGiftDesign />
      <Footer />
    </div>
  );
};

export default Index;
