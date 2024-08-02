import ExperienceSection from "@/components/ExperienceSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import JoinListSection from "@/components/JoinListSection";
import WhySection from "@/components/WhySection";
import React, { useEffect } from "react";

export default function page() {
  // useEffect(() => {
  //   Aos.init();
  //   Aos.refresh();
  // }, []);
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <FeaturedProducts />
      <ExperienceSection />
      <WhySection />
      <JoinListSection />
    </div>
  );
}
