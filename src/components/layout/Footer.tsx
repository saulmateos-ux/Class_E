import Link from "next/link";
import { Container } from "./Container";

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Integrations", href: "#integrations" },
      { name: "Security", href: "#security" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Contact", href: "#contact" },
      { name: "Careers", href: "#careers" },
      { name: "Partners", href: "#partners" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { name: "Blog", href: "#blog" },
      { name: "Case Studies", href: "#case-studies" },
      { name: "Help Center", href: "#help" },
      { name: "ROI Calculator", href: "#roi-calculator" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <Container>
        <div className="py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">E</span>
                </div>
                <span className="font-bold text-xl">class-E</span>
              </div>
              <p className="text-primary-200 text-sm leading-relaxed">
                Resource Management for Construction. Unify your workforce,
                compliance, and invoicing in one platform.
              </p>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key}>
                <h3 className="font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-primary-200 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-primary-400">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-primary-200 text-sm">
                &copy; {new Date().getFullYear()} class-E. All rights
                reserved.
              </p>
              <p className="text-primary-200 text-sm">
                Backed by Davis Family Office (DFO)
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
