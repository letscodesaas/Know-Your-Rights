import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const faqs: FAQItem[] = [
    // General
    {
      category: "General",
      question: "What is this website about?",
      answer: "This website is a public awareness initiative to help Indian citizens understand their legal rights, duties, and what to do if those rights are violated. It covers 26 categories of rights from birth to death, with simple explanations and official contact information."
    },
    {
      category: "General",
      question: "Is the information on this website legally valid?",
      answer: "The information is based on the Constitution of India, Indian laws, and official government sources. However, this is for awareness purposes only and not a substitute for legal advice. Laws may change, so always verify with official sources for specific cases."
    },
    {
      category: "General",
      question: "Who can use this website?",
      answer: "This website is designed for all Indian citizens - students, working professionals, senior citizens, women, children's guardians, and anyone who wants to understand their rights. The content is written in simple language for easy understanding."
    },
    // Legal Aid
    {
      category: "Legal Aid",
      question: "How can I get free legal help?",
      answer: "You can get free legal aid from the Legal Services Authority. Visit your District Legal Services Authority (DLSA) at the district court complex. You're eligible if your annual income is below the limit set by your state, or if you're a woman, child, SC/ST member, disaster victim, or other specified categories."
    },
    {
      category: "Legal Aid",
      question: "What is a Lok Adalat?",
      answer: "Lok Adalat (People's Court) is a forum where disputes are settled through compromise. It's free, fast, and the decision is final with no appeal. It handles cases like motor accident claims, matrimonial disputes, bank recovery cases, and compoundable criminal cases."
    },
    {
      category: "Legal Aid",
      question: "Can I fight my own case without a lawyer?",
      answer: "Yes, you have the right to represent yourself in court (called 'party-in-person'). However, legal procedures can be complex, so it's advisable to at least consult a lawyer. Free legal aid is available if you cannot afford one."
    },
    // Police & Arrest
    {
      category: "Police & Arrest",
      question: "Can police arrest me without a warrant?",
      answer: "Yes, for cognizable offenses (serious crimes like murder, theft, assault). But even then, police must follow procedure - inform you of the grounds of arrest, allow you to inform family, produce you before magistrate within 24 hours. For non-cognizable offenses, warrant is required."
    },
    {
      category: "Police & Arrest",
      question: "What are my rights if arrested?",
      answer: "Key rights include: 1) Know the grounds of arrest, 2) Inform family/friend immediately, 3) Meet your lawyer, 4) Medical examination, 5) Not be tortured or coerced, 6) Be produced before magistrate within 24 hours, 7) Apply for bail. Women have additional protections."
    },
    {
      category: "Police & Arrest",
      question: "Can police enter my house without warrant?",
      answer: "Generally, police need a warrant to search your house. Exceptions include: hot pursuit, preventing destruction of evidence, or when delay could cause harm. Even during search, you can demand to see the warrant, have a witness present, and receive a copy of items seized."
    },
    // Documents
    {
      category: "Documents",
      question: "How do I get a birth certificate if not registered at birth?",
      answer: "For delayed registration, apply to the local registrar (Municipal Corporation/Gram Panchayat) with supporting documents like hospital records, school certificates, and an affidavit. If more than a year has passed, you'll need a magistrate's order."
    },
    {
      category: "Documents",
      question: "Is Aadhaar mandatory for everything?",
      answer: "No. The Supreme Court has ruled that Aadhaar cannot be made mandatory for all services. It's required for government subsidies and tax filing, but not for bank accounts, mobile SIMs, or school admissions. Your rights cannot be denied for lack of Aadhaar."
    },
    {
      category: "Documents",
      question: "How do I file an RTI application?",
      answer: "Online: Visit rtionline.gov.in, register, pay ₹10 fee, submit application. Offline: Write application on plain paper to the PIO of the concerned department with ₹10 fee. Be specific in your questions. Response must come within 30 days."
    },
    // Consumer Rights
    {
      category: "Consumer Rights",
      question: "How do I file a consumer complaint?",
      answer: "You can file online at edaakhil.nic.in or visit the Consumer Forum. District Forum handles complaints up to ₹1 crore, State Commission up to ₹10 crores, National Commission above that. Include bills, correspondence, and proof of deficiency/defect."
    },
    {
      category: "Consumer Rights",
      question: "Can I return a product I bought?",
      answer: "There's no general right to return products you simply don't like. However, you can seek remedy for defective products, products not matching description, or unfair trade practices. E-commerce platforms have return policies you can use."
    },
    // Women & Children
    {
      category: "Women & Children",
      question: "What is the POSH Act?",
      answer: "Prevention of Sexual Harassment at Workplace Act, 2013 protects women from sexual harassment at work. Every organization with 10+ employees must have an Internal Complaints Committee. Complaints must be resolved within 90 days."
    },
    {
      category: "Women & Children",
      question: "What constitutes child abuse?",
      answer: "Child abuse includes physical abuse, emotional abuse, sexual abuse (under POCSO Act), neglect, and exploitation including child labor. Any adult can report child abuse to Child Helpline 1098, Child Welfare Committee, or police."
    },
    // Property
    {
      category: "Property",
      question: "Do daughters have equal property rights?",
      answer: "Yes, since the 2005 amendment to Hindu Succession Act, daughters have equal rights as sons in ancestral property. This applies to Hindu, Buddhist, Jain, and Sikh families. The right is by birth, same as sons."
    },
    {
      category: "Property",
      question: "What is RERA and how does it help homebuyers?",
      answer: "Real Estate (Regulation and Development) Act protects homebuyers. Builders must register projects, provide clear title documents, use escrow accounts, complete projects on time. Buyers can file complaints with state RERA authority for violations."
    },
    // Digital
    {
      category: "Digital Rights",
      question: "What should I do if I'm a victim of online fraud?",
      answer: "Act immediately: 1) Call your bank to block card/freeze account, 2) Report on cybercrime.gov.in or call 1930, 3) File FIR with cyber crime cell, 4) Preserve evidence (screenshots, messages). Report within 24 hours for better recovery chances."
    },
    {
      category: "Digital Rights",
      question: "Can someone post my photos online without consent?",
      answer: "No, posting someone's photos without consent, especially intimate images, is illegal. You can file complaint under IT Act and IPC. For intimate images, punishment can be up to 2 years imprisonment. Report to police and the platform immediately."
    }
  ];

  const categories = ["all", ...Array.from(new Set(faqs.map(faq => faq.category)))];

  const filteredFaqs = activeCategory === "all" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-primary py-12 sm:py-16">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10">
              <HelpCircle className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="mb-4 font-display text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Common questions about rights, procedures, and legal matters
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-border bg-card py-4">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category === "all" ? "All Questions" : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border bg-card overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-muted/50"
                  >
                    <div className="flex items-start gap-3">
                      <MessageCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <span className="mb-1 block text-xs font-medium text-primary">
                          {faq.category}
                        </span>
                        <span className="font-medium text-foreground">
                          {faq.question}
                        </span>
                      </div>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="border-t border-border bg-muted/30 px-6 py-4">
                      <p className="pl-8 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
              Still Have Questions?
            </h2>
            <p className="mb-6 text-muted-foreground">
              If you couldn't find what you're looking for, explore our detailed rights categories or contact official helplines
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/rights">
                <Button variant="default" size="lg">
                  Explore All Rights
                </Button>
              </Link>
              <Link to="/emergency">
                <Button variant="outline" size="lg">
                  Emergency Contacts
                </Button>
              </Link>
              <Link to="/glossary">
                <Button variant="outline" size="lg">
                  Legal Glossary
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;
