import { Link } from "react-router-dom";
import { BookOpen, Shield, Scale, Heart, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-primary py-12 sm:py-16">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 font-display text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
              About This Website
            </h1>
            <p className="text-lg text-primary-foreground/80">
              A non-political public awareness initiative for Indian citizens
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            {/* Purpose */}
            <div className="mb-12 rounded-xl border border-border bg-card p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">Our Purpose</h2>
              </div>
              <p className="mb-4 text-muted-foreground">
                This website is created to help every Indian citizen understand their fundamental rights, duties, and the legal remedies available to them. Our goal is to make legal awareness simple and accessible for everyone—students, working professionals, senior citizens, and common people.
              </p>
              <p className="text-muted-foreground">
                We believe that an informed citizen is an empowered citizen. By knowing your rights, you can protect yourself and your loved ones from injustice and exploitation.
              </p>
            </div>

            {/* Sources */}
            <div className="mb-12 rounded-xl border border-border bg-card p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Scale className="h-6 w-6 text-accent" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">Our Sources</h2>
              </div>
              <p className="mb-4 text-muted-foreground">
                All information on this website is based on:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  The Constitution of India
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Indian Penal Code and other statutory laws
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Official government websites and publications
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  National and State Human Rights Commission guidelines
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Legal Services Authority resources
                </li>
              </ul>
            </div>

            {/* Values */}
            <div className="mb-12 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">Non-Political</h3>
                <p className="text-sm text-muted-foreground">
                  This website is strictly non-political and does not support or oppose any political party or ideology.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Heart className="h-5 w-5 text-accent" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">For Everyone</h3>
                <p className="text-sm text-muted-foreground">
                  Written in simple language that everyone can understand, regardless of educational background.
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="rounded-xl border-2 border-destructive/30 bg-destructive/5 p-8">
              <div className="mb-4 flex items-center gap-3">
                <AlertCircle className="h-6 w-6 text-destructive" />
                <h2 className="font-display text-xl font-bold text-foreground">Important Disclaimer</h2>
              </div>
              <p className="mb-4 text-muted-foreground">
                <strong className="text-foreground">This website is for educational and awareness purposes only.</strong> The information provided here does not constitute legal advice and should not be treated as such.
              </p>
              <p className="mb-4 text-muted-foreground">
                For specific legal matters, disputes, or litigation, please consult a qualified lawyer or approach the Legal Services Authority for free legal aid.
              </p>
              <p className="text-muted-foreground">
                Laws and procedures may change over time. While we strive to keep information accurate and up-to-date, please verify current laws from official sources before taking any action.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <p className="mb-4 text-muted-foreground">Ready to learn about your rights?</p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link to="/rights">
                  <Button size="lg">Explore All Rights</Button>
                </Link>
                <Link to="/emergency">
                  <Button variant="outline" size="lg">Emergency Contacts</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
