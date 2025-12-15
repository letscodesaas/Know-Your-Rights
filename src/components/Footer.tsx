import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container-custom py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold">Know Your Rights India</h3>
            <p className="text-sm text-primary-foreground/80">
              A public awareness initiative to help Indian citizens understand their rights, duties, and legal remedies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/rights" className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                  All Rights Categories
                </Link>
              </li>
              <li>
                <Link to="/emergency" className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                  Emergency Contacts
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                  Search
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                  About This Website
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="mb-4 font-semibold">Official Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  Legal Services Authority
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://nhrc.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  Human Rights Commission
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://india.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  Government of India
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Emergency */}
          <div>
            <h4 className="mb-4 font-semibold">Emergency Numbers</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">
                <span className="font-medium text-primary-foreground">112</span> - Police / All Emergencies
              </li>
              <li className="text-primary-foreground/80">
                <span className="font-medium text-primary-foreground">181</span> - Women Helpline
              </li>
              <li className="text-primary-foreground/80">
                <span className="font-medium text-primary-foreground">1098</span> - Child Helpline
              </li>
              <li className="text-primary-foreground/80">
                <span className="font-medium text-primary-foreground">1930</span> - Cyber Crime
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p className="mb-2">
            <strong>Disclaimer:</strong> This website is for educational and awareness purposes only. It does not constitute legal advice.
          </p>
          <p>
            Content based on the Constitution of India, Indian laws, and official government sources.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
