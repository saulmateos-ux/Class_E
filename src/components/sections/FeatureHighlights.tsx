import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Employees and Contractors in One View",
    description:
      "Finally see your entire workforce in a single system. Track availability, skills, certifications, and assignments for both W2 employees and 1099 contractors.",
    points: [
      "Unified worker profiles with skills and rate cards",
      "Contractor onboarding with compliance workflows",
      "Batch import for existing contractor databases",
      "Scale to 2,000+ workers without complexity",
    ],
    visual: "workforce",
  },
  {
    title: "Never Get Caught with Expired Credentials",
    description:
      "Track insurance certificates, licenses, OSHA certifications, and tax documents with automatic expiration alerts. Know your compliance status at a glance.",
    points: [
      "Insurance certificate tracking with renewal alerts",
      "License and certification management",
      "W-9 and tax document storage",
      "Complete audit trail for every contractor",
    ],
    visual: "compliance",
  },
  {
    title: "Field-Verified Hours, Zero Time Theft",
    description:
      "Workers clock in and out from their phones with GPS verification. Supervisors approve from the field. Hours flow directly to billing.",
    points: [
      "Mobile-first time logging",
      "GPS geofence verification at job sites",
      "Job-based time entry (not just hourly buckets)",
      "Automatic overtime calculation for W2 employees",
    ],
    visual: "timetracking",
  },
  {
    title: "Bill Faster, Get Paid Sooner",
    description:
      "Create customer invoices directly from approved timesheets. Track payments, manage retainage, and export to your accounting system.",
    points: [
      "Job-based invoicing tied to verified hours",
      "Multiple billing types (T&M, Lump Sum, Fixed, Cost Plus)",
      "Retainage tracking and release management",
      "PDF export for customers",
    ],
    visual: "invoicing",
  },
  {
    title: "Pay Contractors Accurately, Every Time",
    description:
      "Manage vendor invoices, track contractor payments, and export to QuickBooks. No more spreadsheet reconciliation.",
    points: [
      "Contractor payment processing",
      "Vendor invoice tracking",
      "QuickBooks export integration",
      "Payment history and reporting",
    ],
    visual: "payments",
  },
  {
    title: "Know Which Jobs Make Money—Before It's Too Late",
    description:
      "Track every job from planning through completion. See labor costs, materials, and margins in real-time.",
    points: [
      "Customer → Jobsite → Job hierarchy",
      "Real-time job cost tracking",
      "Billing configuration per job",
      "Profitability analysis",
    ],
    visual: "jobcosting",
  },
];

function FeatureVisual({ type }: { type: string }) {
  // Placeholder visual components that represent each feature
  const visuals: Record<string, React.ReactNode> = {
    workforce: (
      <div className="space-y-3">
        {["W2 Employee", "1099 Contractor", "W2 Employee"].map((type, i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-white/80 rounded-lg p-3 shadow-sm"
          >
            <div className="w-10 h-10 rounded-full bg-primary-100" />
            <div className="flex-1">
              <div className="h-3 bg-neutral-200 rounded w-24 mb-1" />
              <div className="h-2 bg-neutral-100 rounded w-16" />
            </div>
            <span
              className={cn(
                "text-xs px-2 py-1 rounded-full",
                type === "1099 Contractor"
                  ? "bg-accent-100 text-accent"
                  : "bg-primary-100 text-primary"
              )}
            >
              {type}
            </span>
          </div>
        ))}
      </div>
    ),
    compliance: (
      <div className="space-y-3">
        {[
          { name: "General Liability", status: "Active", days: 245 },
          { name: "Workers Comp", status: "Expiring", days: 15 },
          { name: "License", status: "Active", days: 180 },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between bg-white/80 rounded-lg p-3 shadow-sm"
          >
            <span className="font-medium text-sm text-neutral-700">
              {item.name}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral-500">{item.days} days</span>
              <span
                className={cn(
                  "text-xs px-2 py-1 rounded-full",
                  item.status === "Active"
                    ? "bg-success-light text-success"
                    : "bg-warning-light text-warning"
                )}
              >
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    ),
    timetracking: (
      <div className="bg-white/80 rounded-xl p-4 shadow-sm">
        <div className="text-center mb-4">
          <div className="text-3xl font-bold text-primary">08:32:15</div>
          <div className="text-sm text-neutral-500">Current Shift</div>
        </div>
        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="bg-success-light rounded-lg p-2">
            <div className="text-sm font-semibold text-success">Clock In</div>
            <div className="text-xs text-neutral-600">7:00 AM</div>
          </div>
          <div className="bg-neutral-100 rounded-lg p-2">
            <div className="text-sm font-semibold text-neutral-500">Clock Out</div>
            <div className="text-xs text-neutral-400">--:--</div>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-center gap-2 text-xs text-success">
          <div className="w-2 h-2 rounded-full bg-success" />
          GPS Verified
        </div>
      </div>
    ),
    invoicing: (
      <div className="space-y-3">
        <div className="bg-white/80 rounded-lg p-3 shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-sm text-neutral-700">INV-2024-0156</span>
            <span className="text-xs bg-success-light text-success px-2 py-1 rounded-full">
              Paid
            </span>
          </div>
          <div className="text-xl font-bold text-primary">$24,650.00</div>
        </div>
        <div className="bg-white/80 rounded-lg p-3 shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-sm text-neutral-700">INV-2024-0157</span>
            <span className="text-xs bg-warning-light text-warning px-2 py-1 rounded-full">
              Pending
            </span>
          </div>
          <div className="text-xl font-bold text-primary">$18,200.00</div>
        </div>
      </div>
    ),
    payments: (
      <div className="space-y-3">
        {[
          { vendor: "ABC Electric", amount: "$4,500", status: "Scheduled" },
          { vendor: "Johnson HVAC", amount: "$2,800", status: "Paid" },
          { vendor: "Pro Plumbing", amount: "$3,200", status: "Scheduled" },
        ].map((payment, i) => (
          <div
            key={i}
            className="flex items-center justify-between bg-white/80 rounded-lg p-3 shadow-sm"
          >
            <div>
              <div className="font-medium text-sm text-neutral-700">
                {payment.vendor}
              </div>
              <div className="text-lg font-semibold text-primary">
                {payment.amount}
              </div>
            </div>
            <span
              className={cn(
                "text-xs px-2 py-1 rounded-full",
                payment.status === "Paid"
                  ? "bg-success-light text-success"
                  : "bg-primary-100 text-primary"
              )}
            >
              {payment.status}
            </span>
          </div>
        ))}
      </div>
    ),
    jobcosting: (
      <div className="bg-white/80 rounded-xl p-4 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold text-neutral-700">Job #1024</span>
          <span className="text-xs bg-success-light text-success px-2 py-1 rounded-full">
            On Track
          </span>
        </div>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-neutral-600">Budget</span>
              <span className="font-medium">$45,000</span>
            </div>
            <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-3/4 rounded-full" />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-neutral-600">Spent</span>
              <span className="font-medium text-accent">$32,150</span>
            </div>
          </div>
          <div className="pt-2 border-t border-neutral-100">
            <div className="flex justify-between text-sm">
              <span className="text-neutral-600">Margin</span>
              <span className="font-bold text-success">28.5%</span>
            </div>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div className="bg-gradient-to-br from-neutral-100 to-neutral-50 rounded-2xl p-6 h-full flex items-center justify-center">
      {visuals[type] || <div className="w-full h-48 bg-neutral-200 rounded-xl" />}
    </div>
  );
}

export function FeatureHighlights() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <SectionHeader
          eyebrow="Features"
          title="Built for How Specialty Contractors Actually Work"
          centered
        />

        <div className="mt-16 space-y-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                "grid lg:grid-cols-2 gap-12 items-center",
                index % 2 === 1 && "lg:[&>*:first-child]:order-2"
              )}
            >
              {/* Text Content */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-primary">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 text-lg leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-success-light flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-success" />
                      </div>
                      <span className="text-neutral-700">{point}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="text-accent hover:text-accent-600">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>

              {/* Visual */}
              <FeatureVisual type={feature.visual} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
