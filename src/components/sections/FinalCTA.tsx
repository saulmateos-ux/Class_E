import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FloatingShape } from "@/components/ui/FloatingShape";
import { ArrowRight, Phone, Mail } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary to-primary-700 text-white overflow-hidden">
      {/* Decorative shapes */}
      <FloatingShape
        variant="circle"
        color="accent"
        size="xl"
        className="-top-32 -right-32 opacity-20"
      />
      <FloatingShape
        variant="blob"
        color="accent"
        size="lg"
        className="bottom-0 -left-20 opacity-15"
        animate={false}
      />
      <FloatingShape
        variant="ring"
        color="neutral"
        size="md"
        className="top-1/4 right-1/4 opacity-10"
      />

      <Container>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Take Control of Your Operations?
          </h2>

          <p className="text-xl text-primary-100 mb-10 leading-relaxed">
            See how class-E can unify your workforce, streamline compliance,
            and accelerate your invoicing. Get a personalized demo in 30 minutes
            or less.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              variant="primary"
              size="lg"
              className="bg-accent hover:bg-accent-600 w-full sm:w-auto"
            >
              Schedule Your Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-200">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>(123) 456-7890</span>
            </a>
            <span className="hidden sm:block text-primary-400">•</span>
            <a
              href="mailto:sales@class-e.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>sales@class-e.com</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
