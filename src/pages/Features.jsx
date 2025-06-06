import React from "react";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import UseCasesSection from "../components/UseCasesSection";
import CTASection from "../components/CTASection";

const Features = () => {
  return (
    <div className="pt-20">
      <FeaturesSection />
      <HowItWorksSection />
      <UseCasesSection />
      <CTASection />
    </div>
  );
};

export default Features;
