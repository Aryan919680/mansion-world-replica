import React, { useState } from "react";

export  function BankCollateral() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    e.target.reset();
  };

  return (
    <div className="bg-gradient-to-r from-pink-200 to-blue-200">
{/* 
 <header className="bg-gradient-to-r from-pink-200 to-blue-200 py-6 shadow-lg">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
              <svg className="w-8 h-8 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
              </svg>
            </div>
            <div>
              <h2 className="lg:text-[18px] md:text-[28px] font-heading mb-4 md:mb-6">
                Bank Collateral & Stationary
              </h2>
              <p className="lg:text-[13px] md:text-[22px] leading-relaxed mt-2 text-gray-600">
                Premium Financial Solutions
              </p>
            </div>
          </div>
        </div>
      </header> */}

      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="animate-bounce absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
          <div className="animate-bounce absolute top-32 right-20 w-16 h-16 bg-blue-300 rounded-full delay-1000"></div>
          <div className="animate-bounce absolute bottom-20 left-1/4 w-12 h-12 bg-blue-200 rounded-full delay-2000"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="lg:text-[18px] md:text-[28px] font-heading mb-4 md:mb-6 mt-20">
            Unlock Your Financial Potential
          </h2>
          <p className="lg:text-[13px] md:text-[22px] leading-relaxed mt-2 max-w-4xl mx-auto">
            Access premium bank collateral and stationary services trusted by Fortune 500 companies and
            high-net-worth individuals worldwide
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[
              { label: "$50B+", sub: "Assets Secured" },
              { label: "10,000+", sub: "Satisfied Clients" },
              { label: "99.9%", sub: "Success Rate" }
            ].map((stat, i) => (
              <div key={i} className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <h2 className="lg:text-[18px] md:text-[28px] font-heading mb-4 md:mb-6">{stat.label}</h2>
                <p className="lg:text-[13px] md:text-[22px] leading-relaxed mt-2">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20  relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="lg:text-[18px] md:text-[28px] font-heading mb-4 md:mb-6">
            Ready to Elevate Your Financial Strategy?
          </h2>
          <p className="lg:text-[13px] md:text-[22px] leading-relaxed mt-2 max-w-3xl mx-auto">
            Join thousands of successful clients who have transformed their business with our premium
            banking solutions. Our expert team is standing by to discuss your unique requirements.
          </p>

          <button
            onClick={openModal}
            className="animate-pulse bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-xl px-12 py-6 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 mt-10"
          >
            Submit Your Enquiry Now →
          </button>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          onClick={(e) => e.target.id === "modalBg" && closeModal()}
          id="modalBg"
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 text-white p-6 rounded-t-2xl flex justify-between items-center">
              <h2 className="lg:text-[18px] md:text-[28px] font-heading mb-4 md:mb-6">Submit Your Enquiry</h2>
              <button onClick={closeModal} className="text-white text-2xl">&times;</button>
            </div>
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input required type="text" placeholder="Full Name *" className="border p-3 rounded-lg w-full" />
                <input required type="text" placeholder="Company *" className="border p-3 rounded-lg w-full" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <input required type="email" placeholder="Email Address *" className="border p-3 rounded-lg w-full" />
                <input required type="tel" placeholder="Phone Number *" className="border p-3 rounded-lg w-full" />
              </div>
              <select required className="border p-3 rounded-lg w-full">
                <option value="">Select a service...</option>
                <option value="bank-guarantee">Bank Guarantee (BG/SBLC)</option>
                <option value="proof-of-funds">Proof of Funds</option>
                <option value="trade-finance">Trade Finance Solutions</option>
                <option value="consultation">General Consultation</option>
              </select>
              <textarea required rows="4" placeholder="Please describe your requirements..." className="border p-3 rounded-lg w-full"></textarea>
              <label className="flex items-center text-sm">
                <input type="checkbox" required className="mr-2" /> I agree to the terms and conditions
              </label>
              <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg">
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg z-50 flex items-center">
          <span className="text-xl mr-3">✓</span>
          <div>
            <h2 className="lg:text-[18px] md:text-[28px] font-heading mb-4 md:mb-6">Enquiry Submitted Successfully!</h2>
            <p className="lg:text-[13px] md:text-[22px] leading-relaxed mt-2">We'll contact you within 2 hours.</p>
          </div>
        </div>
      )}
    </div>
  );
}
