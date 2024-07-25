import ExperienceSection from "@/components/ExperienceSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <FeaturedProducts />
      <ExperienceSection />
      <WhySection />
    </div>
  );
}
