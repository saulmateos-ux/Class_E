import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProblemStatement } from "@/components/sections/ProblemStatement";
import { SolutionOverview } from "@/components/sections/SolutionOverview";
import { KeyDifferentiator } from "@/components/sections/KeyDifferentiator";
import { FeatureHighlights } from "@/components/sections/FeatureHighlights";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { UserPersonas } from "@/components/sections/UserPersonas";
import { Integrations } from "@/components/sections/Integrations";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemStatement />
        <SolutionOverview />
        <KeyDifferentiator />
        <FeatureHighlights />
        <TargetAudience />
        <UserPersonas />
        <Integrations />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
