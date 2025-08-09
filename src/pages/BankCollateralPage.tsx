import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { BankCollateral } from "@/components/BankCollateral";
export function BankCollateralPage() {
  return (
     <div className="min-h-screen">
   <Header />
   <BankCollateral />
   <Footer />
    </div>
  );
}