import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { X, Check } from "lucide-react";

const competitors = [
  {
    label: "Workforce tools",
    problem: "No AR/AP integration",
  },
  {
    label: "Field service software",
    problem: "Built for service calls, not subcontracting",
  },
  {
    label: "Accounting software",
    problem: "Can't manage contractor compliance",
  },
  {
    label: "Project management",
    problem: "No workforce or financial workflows",
  },
];

const srcgBenefits = [
  "Unified W2 and 1099 workforce management",
  "Automatic compliance tracking with alerts",
  "GPS-verified time tracking from the field",
  "Job-based invoicing tied to timesheets",
  "Vendor payments and QuickBooks export",
  "Real-time job profitability visibility",
];

export function KeyDifferentiator() {
  return (
    <section id="why-class-e" className="py-20 lg:py-28 bg-primary text-white">
      <Container>
        <SectionHeader
          title="The Gap Nobody Else Fills"
          subtitle="Other tools force you to choose: Workforce management OR Accounting. Compliance tracking OR Time tracking. Customer invoicing OR Vendor payments. class-E was built from day one for specialty contractors managing mixed workforces."
          centered
          light
        />

        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          {/* What Competitors Miss */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-semibold mb-6">
              What Competitors Miss
            </h3>
            <ul className="space-y-4">
              {competitors.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-error/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-error" />
                  </div>
                  <div>
                    <span className="font-medium">{item.label}</span>
                    <span className="text-primary-200"> → {item.problem}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* SRCG Solution */}
          <div className="bg-white rounded-2xl p-8 text-primary">
            <h3 className="text-xl font-semibold mb-6 text-accent">
              class-E Delivers Everything
            </h3>
            <ul className="space-y-4">
              {srcgBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-success-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-success" />
                  </div>
                  <span className="text-neutral-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom callout */}
        <div className="mt-12 text-center">
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">
            We don&apos;t make you adapt your operations to our software—we built
            the software around how you actually work.
          </p>
        </div>
      </Container>
    </section>
  );
}
