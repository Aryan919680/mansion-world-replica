import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import {BrandStatement} from "@/components/BrandStatement";
import { Banner } from "@/components/Banner";
import { ModernGiving } from "@/components/ModernGiving";
import { GiftCollections } from "@/components/GiftCollections";
import { CustomGiftDesign } from "@/components/CustomGiftDesign";
import { NotableClients } from "@/components/NotableClients";
import { CustomOpulentDesign } from "@/components/CustomOpulentDesign";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BrandStatement />
      <Banner />
      <ModernGiving />
      <GiftCollections />
      <CustomOpulentDesign />
      <CustomGiftDesign />
      <NotableClients />
      <Footer />
    </div>
  );
};

export default Index;
