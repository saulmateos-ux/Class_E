import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FloatingShape } from "@/components/ui/FloatingShape";
import { Play, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-50 pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Decorative Shapes */}
      <FloatingShape
        variant="circle"
        color="accent"
        size="xl"
        className="-top-20 -right-20 opacity-60"
      />
      <FloatingShape
        variant="blob"
        color="primary"
        size="lg"
        className="top-1/2 -left-24 opacity-40"
        animate={false}
      />
      <FloatingShape
        variant="ring"
        color="accent"
        size="md"
        className="bottom-20 right-1/4 opacity-50"
      />

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <div className="relative z-10 space-y-6">
            <Badge variant="accent">
              Construction Workforce Management
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Stop Juggling Spreadsheets, Paper, and Disconnected Systems
            </h1>

            <p className="text-xl text-neutral-600 max-w-xl leading-relaxed">
              The only platform that unifies your mixed W2/1099 workforce,
              contractor compliance, time tracking, and invoicing—built
              specifically for specialty contractors.
            </p>

            <p className="text-neutral-500">
              Managing electrical crews, HVAC technicians, plumbers, or
              facilities teams? class-E brings your entire operation into one
              system—so you can see job profitability, ensure compliance, and
              get paid faster.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="primary" size="lg">
                See class-E in Action
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                <Play className="w-5 h-5 mr-2" />
                Watch 2-Minute Overview
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-6 text-sm text-neutral-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span>Setup in 30 minutes</span>
              </div>
            </div>
          </div>

          {/* Image Column - Dashboard Mockup */}
          <div className="relative z-10">
            <div className="relative">
              {/* Main Dashboard Image Placeholder */}
              <div className="bg-white rounded-2xl shadow-[var(--shadow-elevated)] overflow-hidden border border-neutral-100">
                {/* Browser-like header */}
                <div className="bg-neutral-100 px-4 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-error" />
                  <div className="w-3 h-3 rounded-full bg-warning" />
                  <div className="w-3 h-3 rounded-full bg-success" />
                  <div className="ml-4 flex-1 bg-white rounded-md h-6" />
                </div>

                {/* Dashboard Content */}
                <div className="p-6 space-y-4">
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "Active Workers", value: "247", color: "primary" },
                      { label: "Jobs This Month", value: "34", color: "accent" },
                      { label: "Compliance Rate", value: "98%", color: "success" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-neutral-50 rounded-xl p-4 text-center"
                      >
                        <div
                          className={`text-2xl font-bold text-${stat.color}`}
                          style={{
                            color:
                              stat.color === "primary"
                                ? "#1E3A5F"
                                : stat.color === "accent"
                                ? "#E87722"
                                : "#22C55E",
                          }}
                        >
                          {stat.value}
                        </div>
                        <div className="text-xs text-neutral-500 mt-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Worker Cards Preview */}
                  <div className="space-y-3">
                    {[
                      { name: "John Smith", type: "W2 Employee", status: "Active" },
                      { name: "ABC Electric LLC", type: "1099 Contractor", status: "Active" },
                      { name: "Sarah Johnson", type: "W2 Employee", status: "On Job" },
                    ].map((worker, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between bg-white border border-neutral-100 rounded-lg p-3"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                            <span className="text-primary font-semibold text-sm">
                              {worker.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="font-medium text-sm text-neutral-800">
                              {worker.name}
                            </div>
                            <div className="text-xs text-neutral-500">
                              {worker.type}
                            </div>
                          </div>
                        </div>
                        <span className="text-xs font-medium text-success bg-success-light px-2 py-1 rounded-full">
                          {worker.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating notification card */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-[var(--shadow-elevated)] p-4 border border-neutral-100 max-w-[200px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-success-light flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-neutral-800">
                      Invoice Paid
                    </div>
                    <div className="text-xs text-neutral-500">$12,450.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
