import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AlertTriangle, Clock, BarChart3, Layers } from "lucide-react";

const problems = [
  {
    icon: Layers,
    title: "Employees in one system. Contractors in another.",
    description:
      "You're managing W2 employees in payroll software and 1099 contractors in spreadsheets. Nobody has a complete picture of your workforce.",
    iconBg: "bg-error-light",
    iconColor: "text-error",
  },
  {
    icon: AlertTriangle,
    title: "Insurance expires. Licenses lapse. You find out too late.",
    description:
      "Manual tracking of contractor insurance, licenses, and certifications means compliance gaps until something goes wrong.",
    iconBg: "bg-warning-light",
    iconColor: "text-warning",
  },
  {
    icon: Clock,
    title: "Timesheets on paper. Invoices delayed by weeks.",
    description:
      "By the time field hours get to the office, verified, and billed, you're waiting 45-60 days to get paid.",
    iconBg: "bg-accent-100",
    iconColor: "text-accent",
  },
  {
    icon: BarChart3,
    title: "You finished the job. Did you make money?",
    description:
      "Without real-time labor cost visibility, you learn which jobs were profitable months after the fact—if ever.",
    iconBg: "bg-primary-100",
    iconColor: "text-primary",
  },
];

export function ProblemStatement() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <SectionHeader
          eyebrow="The Challenge"
          title="The Hidden Cost of Fragmented Operations"
          subtitle="Every specialty contractor faces these problems. Most just accept them as part of doing business."
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {problems.map((problem) => (
            <Card
              key={problem.title}
              variant="bordered"
              className="hover:border-neutral-300 transition-colors"
            >
              <div
                className={`w-12 h-12 rounded-xl ${problem.iconBg} flex items-center justify-center mb-4`}
              >
                <problem.icon className={`w-6 h-6 ${problem.iconColor}`} />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3 leading-snug">
                {problem.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {problem.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
