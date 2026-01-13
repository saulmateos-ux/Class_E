import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TrendingUp, Settings, FileText, MapPin } from "lucide-react";

const personas = [
  {
    icon: TrendingUp,
    role: "Owner / Principal",
    sees: "Financial dashboards, job profitability, compliance overview",
    gets: "Real-time visibility into what's making money and what's at risk",
    color: "primary",
  },
  {
    icon: Settings,
    role: "Operations Manager",
    sees: "Workforce assignments, schedules, timesheet approvals",
    gets: "Complete control over daily operations without spreadsheet chaos",
    color: "accent",
  },
  {
    icon: FileText,
    role: "Office Manager",
    sees: "Invoicing, contractor onboarding, document management",
    gets: "Automated workflows that save hours every week",
    color: "success",
  },
  {
    icon: MapPin,
    role: "Field Supervisor",
    sees: "Crew assignments, mobile time approvals, job status",
    gets: "Manage crews from the field, not from a desk",
    color: "primary",
  },
];

export function UserPersonas() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <SectionHeader
          eyebrow="For Your Entire Team"
          title="Everyone Gets What They Need"
          subtitle="Different roles, different needs—one unified platform that works for everyone."
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {personas.map((persona) => (
            <Card
              key={persona.role}
              className="group hover:shadow-[var(--shadow-elevated)] transition-shadow"
            >
              <div
                className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
                style={{
                  backgroundColor:
                    persona.color === "primary"
                      ? "#E8EDF3"
                      : persona.color === "accent"
                      ? "#FDF3EC"
                      : "#DCFCE7",
                }}
              >
                <persona.icon
                  className="w-6 h-6"
                  style={{
                    color:
                      persona.color === "primary"
                        ? "#1E3A5F"
                        : persona.color === "accent"
                        ? "#E87722"
                        : "#22C55E",
                  }}
                />
              </div>

              <h3 className="text-lg font-semibold text-primary mb-4">
                {persona.role}
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-1">
                    What they see
                  </p>
                  <p className="text-sm text-neutral-600">{persona.sees}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-1">
                    What they get
                  </p>
                  <p className="text-sm text-neutral-700 font-medium">
                    {persona.gets}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
