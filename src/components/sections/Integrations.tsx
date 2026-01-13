import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import {
  Monitor,
  Smartphone,
  Tablet,
  Globe,
  FileSpreadsheet,
  FileText,
  Database,
} from "lucide-react";

const integrations = [
  {
    name: "QuickBooks",
    description: "Export for accounting sync",
    icon: Database,
    status: "available",
  },
  {
    name: "Excel",
    description: "Import/export for reporting",
    icon: FileSpreadsheet,
    status: "available",
  },
  {
    name: "PDF Export",
    description: "Invoice and report generation",
    icon: FileText,
    status: "available",
  },
  {
    name: "QuickBooks API",
    description: "Direct two-way sync",
    icon: Database,
    status: "coming",
  },
  {
    name: "Gusto",
    description: "Payroll integration",
    icon: Database,
    status: "coming",
  },
  {
    name: "ADP",
    description: "Enterprise payroll",
    icon: Database,
    status: "coming",
  },
];

const platforms = [
  { name: "Desktop", icon: Monitor, browsers: "Chrome, Safari, Firefox, Edge" },
  { name: "Mobile", icon: Smartphone, browsers: "Responsive web (native apps coming)" },
  { name: "Tablet", icon: Tablet, browsers: "Full tablet support" },
];

export function Integrations() {
  return (
    <section className="py-20 lg:py-28 bg-neutral-50">
      <Container>
        <SectionHeader
          eyebrow="Compatibility"
          title="Works With Your Existing Tools"
          subtitle="class-E integrates with the software you already use—and works on any device."
          centered
        />

        {/* Integrations Grid */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-primary mb-6 text-center">
            Integrations
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-[var(--shadow-card)]"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <integration.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-primary">
                      {integration.name}
                    </span>
                    {integration.status === "coming" && (
                      <Badge variant="default" className="text-xs">
                        Coming Soon
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-neutral-500">
                    {integration.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Compatibility */}
        <div className="mt-16">
          <h3 className="text-lg font-semibold text-primary mb-6 text-center">
            Platform Compatibility
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-[var(--shadow-card)] min-w-[250px]"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center flex-shrink-0">
                  <platform.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <span className="font-semibold text-primary block">
                    {platform.name}
                  </span>
                  <p className="text-sm text-neutral-500">{platform.browsers}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Web-first callout */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-[var(--shadow-card)]">
            <Globe className="w-5 h-5 text-success" />
            <span className="text-neutral-700">
              Access class-E from anywhere with an internet connection
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
