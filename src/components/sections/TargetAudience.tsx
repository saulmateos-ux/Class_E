import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Zap, Building, Store, Wrench } from "lucide-react";

const audiences = [
  {
    icon: Zap,
    title: "Trade Contractors",
    industries: "Electrical • HVAC • Plumbing • Insulation",
    description:
      "Managing field crews across multiple job sites with a mix of employees and subcontractors",
    color: "accent",
  },
  {
    icon: Building,
    title: "Facilities & Maintenance",
    industries: "Facilities Maintenance • Commercial Services",
    description:
      "Keeping facilities running with distributed teams and contractors on-call",
    color: "primary",
  },
  {
    icon: Store,
    title: "Retail Rollout",
    industries: "Retail Construction • Rollout Services",
    description:
      "Executing multi-location rollouts with tight timelines and contractor networks",
    color: "success",
  },
  {
    icon: Wrench,
    title: "Specialty Subcontractors",
    industries: "Scaffolding • Fire Protection • Roofing • Drywall",
    description:
      "Running lean operations where every hour and every dollar counts",
    color: "accent",
  },
];

export function TargetAudience() {
  return (
    <section id="who-its-for" className="py-20 lg:py-28 bg-neutral-50">
      <Container>
        <SectionHeader
          eyebrow="Who We Serve"
          title="Built for Specialty Contractors Like You"
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {audiences.map((audience) => (
            <Card key={audience.title} className="text-center group">
              <div
                className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-transform group-hover:scale-110"
                style={{
                  backgroundColor:
                    audience.color === "primary"
                      ? "#E8EDF3"
                      : audience.color === "accent"
                      ? "#FDF3EC"
                      : "#DCFCE7",
                }}
              >
                <audience.icon
                  className="w-8 h-8"
                  style={{
                    color:
                      audience.color === "primary"
                        ? "#1E3A5F"
                        : audience.color === "accent"
                        ? "#E87722"
                        : "#22C55E",
                  }}
                />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                {audience.title}
              </h3>
              <p className="text-xs font-medium text-accent mb-3">
                {audience.industries}
              </p>
              <p className="text-neutral-600 text-sm">{audience.description}</p>
            </Card>
          ))}
        </div>

        {/* Sizing Context */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl p-8 shadow-[var(--shadow-card)] max-w-2xl">
            <p className="text-lg text-neutral-700 leading-relaxed">
              If you have{" "}
              <span className="font-bold text-primary">20-500 workers</span>,{" "}
              <span className="font-bold text-accent">$2M-$50M in revenue</span>
              , and you&apos;re still managing operations in Excel and
              QuickBooks—
              <span className="font-bold text-primary">
                class-E was built for you.
              </span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
