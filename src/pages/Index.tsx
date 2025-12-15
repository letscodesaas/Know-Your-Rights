import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Phone, Shield, Scale, Users, FileText, CheckCircle, Lightbulb, HelpCircle, AlertTriangle, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RightsCategoryCard from "@/components/RightsCategoryCard";
import { rightsCategories, knowYourRightsQuickFacts } from "@/data/rightsData";
import { useState, useEffect } from "react";

const Index = () => {
  const featuredCategories = rightsCategories.slice(0, 6);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % knowYourRightsQuickFacts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const howItWorks = [
    {
      icon: Search,
      title: "Find Your Right",
      description: "Browse 26 categories or search for your specific situation"
    },
    {
      icon: BookOpen,
      title: "Understand",
      description: "Read simple explanations with real-life examples"
    },
    {
      icon: CheckCircle,
      title: "Take Action",
      description: "Follow step-by-step guidance on what to do"
    },
    {
      icon: Phone,
      title: "Get Help",
      description: "Access official contacts and helplines directly"
    }
  ];

  const targetAudience = [
    {
      title: "Students",
      description: "Learn about your educational rights and protections",
      icon: "🎓"
    },
    {
      title: "Working Professionals",
      description: "Know your workplace rights and remedies",
      icon: "💼"
    },
    {
      title: "Senior Citizens",
      description: "Understand your entitlements and care rights",
      icon: "👴"
    },
    {
      title: "Women",
      description: "Special protections and support systems available",
      icon: "👩"
    },
    {
      title: "Parents",
      description: "Rights related to family, children, and education",
      icon: "👨‍👩‍👧"
    },
    {
      title: "Every Citizen",
      description: "Fundamental rights that belong to all Indians",
      icon: "🇮🇳"
    }
  ];

  const commonSituations = [
    {
      situation: "Police asking for bribe",
      rightId: "corruption",
      category: "Report Corruption"
    },
    {
      situation: "Denied hospital treatment",
      rightId: "health",
      category: "Health Rights"
    },
    {
      situation: "Workplace harassment",
      rightId: "women-rights",
      category: "Women's Rights"
    },
    {
      situation: "Property dispute",
      rightId: "property",
      category: "Property Rights"
    },
    {
      situation: "Child labor case",
      rightId: "child-rights",
      category: "Child Rights"
    },
    {
      situation: "Online fraud",
      rightId: "digital-rights",
      category: "Digital Rights"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-16 sm:py-20 lg:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-trust-blue blur-3xl" />
        </div>
        <div className="container-custom relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground">
              <Shield className="h-4 w-4" />
              A Non-Political Public Awareness Initiative
            </div>
            <h1 className="mb-6 font-display text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Know Your Rights
              <span className="block text-accent">India</span>
            </h1>
            <p className="mb-8 text-lg text-primary-foreground/80 sm:text-xl">
              A simple guide for every Indian citizen to understand their rights, duties, and legal remedies. Based on the Constitution of India and official laws.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/rights">
                <Button variant="accent" size="xl" className="w-full gap-2 sm:w-auto">
                  <BookOpen className="h-5 w-5" />
                  Explore Citizen Rights
                </Button>
              </Link>
              <Link to="/emergency">
                <Button variant="hero-outline" size="xl" className="w-full gap-2 sm:w-auto">
                  <Phone className="h-5 w-5" />
                  Emergency Contacts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Fact Ticker */}
      <section className="border-b border-border bg-accent/10 py-4">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-3 text-center">
            <Lightbulb className="h-5 w-5 flex-shrink-0 text-accent" />
            <p className="text-sm sm:text-base text-foreground">
              <strong className="text-accent">Did you know?</strong>{" "}
              <span className="text-muted-foreground">{knowYourRightsQuickFacts[currentFactIndex]}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-1 font-display text-3xl font-bold text-foreground">26</h3>
              <p className="text-muted-foreground">Rights Categories</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                <Scale className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-1 font-display text-3xl font-bold text-foreground">100+</h3>
              <p className="text-muted-foreground">Legal Remedies</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-india/10">
                <Phone className="h-8 w-8 text-green-india" />
              </div>
              <h3 className="mb-1 font-display text-3xl font-bold text-foreground">14+</h3>
              <p className="text-muted-foreground">Emergency Helplines</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-trust-blue/10">
                <Users className="h-8 w-8 text-trust-blue" />
              </div>
              <h3 className="mb-1 font-display text-3xl font-bold text-foreground">1.4B+</h3>
              <p className="text-muted-foreground">Citizens Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
              How This Website Helps You
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Understanding your rights shouldn't be complicated. We've made it simple.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <step.icon className="h-7 w-7" />
                </div>
                <div className="absolute left-1/2 top-8 hidden h-0.5 w-full bg-primary/20 lg:block" style={{ display: index === 3 ? 'none' : undefined }} />
                <span className="mb-2 inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent">
                  Step {index + 1}
                </span>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rights */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Your Fundamental Rights
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Learn about your constitutional rights as an Indian citizen. Click on any category to understand your rights and what to do if they are violated.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCategories.map((category) => (
              <RightsCategoryCard key={category.id} category={category} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/rights">
              <Button variant="default" size="lg" className="gap-2">
                View All 26 Categories
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Common Situations */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-2 text-sm text-destructive">
              <AlertTriangle className="h-4 w-4" />
              Facing a Problem?
            </div>
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Common Situations & Solutions
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Quick access to information about frequently faced issues
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {commonSituations.map((item, index) => (
              <Link
                key={index}
                to={`/rights/${item.rightId}`}
                className="group flex items-center gap-4 rounded-xl border border-border bg-background p-5 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary">
                  <HelpCircle className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground group-hover:text-primary">
                    {item.situation}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    See: {item.category}
                  </p>
                </div>
                <ArrowRight className="ml-auto h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Who Is This For?
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              This website is designed to help every Indian citizen, regardless of background
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {targetAudience.map((audience, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="mb-4 text-4xl">{audience.icon}</div>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                  {audience.title}
                </h3>
                <p className="text-sm text-muted-foreground">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Constitutional Articles */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <h2 className="mb-4 font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
                Key Constitutional Articles
              </h2>
              <p className="text-primary-foreground/80">
                The foundation of your rights as an Indian citizen
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { article: "Article 14", title: "Equality Before Law", desc: "The State shall not deny to any person equality before the law" },
                { article: "Article 19", title: "Freedom of Speech", desc: "All citizens have the right to freedom of speech and expression" },
                { article: "Article 21", title: "Right to Life", desc: "No person shall be deprived of life or personal liberty except according to procedure established by law" },
                { article: "Article 32", title: "Right to Constitutional Remedies", desc: "The right to move the Supreme Court for enforcement of fundamental rights" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-5"
                >
                  <div className="mb-2 inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                    {item.article}
                  </div>
                  <h3 className="mb-2 font-display text-lg font-semibold text-primary-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground">
              Need Help Understanding Your Rights?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Use our search feature to find specific information about your rights, or browse through all categories to learn more.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/search">
                <Button variant="default" size="lg" className="w-full sm:w-auto">
                  Search for Rights
                </Button>
              </Link>
              <Link to="/glossary">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Legal Terms Glossary
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  About This Website
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Important Disclaimer */}
      <section className="border-t border-border bg-destructive/5 py-6">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Important Disclaimer:</strong> This website is for educational and awareness purposes only and does not constitute legal advice. For specific legal matters, please consult a qualified lawyer or approach the{" "}
              <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Legal Services Authority
              </a>{" "}
              for free legal aid.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
