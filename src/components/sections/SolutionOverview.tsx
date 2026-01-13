import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import {
  Users,
  ShieldCheck,
  Smartphone,
  FileText,
  CreditCard,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const solutions = [
  {
    icon: Users,
    title: "Mixed Workforce",
    description: "W2 employees and 1099 contractors, unified",
    color: "primary",
  },
  {
    icon: ShieldCheck,
    title: "Compliance",
    description: "Insurance, licenses, and documents tracked automatically",
    color: "success",
  },
  {
    icon: Smartphone,
    title: "Time Tracking",
    description: "GPS-verified clock-in from the field",
    color: "accent",
  },
  {
    icon: FileText,
    title: "Customer Invoicing",
    description: "Job-based billing that flows from timesheets",
    color: "primary",
  },
  {
    icon: CreditCard,
    title: "Vendor Payments",
    description: "Pay contractors accurately and on time",
    color: "accent",
  },
  {
    icon: Briefcase,
    title: "Job Costing",
    description: "Real-time visibility into project profitability",
    color: "success",
  },
];

export function SolutionOverview() {
  return (
    <section className="py-20 lg:py-28 bg-neutral-50">
      <Container>
        <SectionHeader
          eyebrow="The Solution"
          title="One Platform. Complete Control."
          subtitle="class-E replaces the patchwork of spreadsheets, paper timesheets, and disconnected software with a single, purpose-built platform for specialty contractors."
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {solutions.map((solution) => (
            <Card key={solution.title} className="group">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}
                style={{
                  backgroundColor:
                    solution.color === "primary"
                      ? "#E8EDF3"
                      : solution.color === "accent"
                      ? "#FDF3EC"
                      : "#DCFCE7",
                }}
              >
                <solution.icon
                  className="w-6 h-6"
                  style={{
                    color:
                      solution.color === "primary"
                        ? "#1E3A5F"
                        : solution.color === "accent"
                        ? "#E87722"
                        : "#22C55E",
                  }}
                />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                {solution.title}
              </h3>
              <p className="text-neutral-600">{solution.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="secondary" size="lg">
            Explore All Features
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
