import { Phone, ExternalLink, AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { emergencyContacts } from "@/data/rightsData";

const EmergencyPage = () => {
  const importantPortals = [
    { name: "Cyber Crime Portal", link: "https://cybercrime.gov.in", description: "Report online crimes" },
    { name: "Consumer Helpline", link: "https://consumerhelpline.gov.in", description: "Consumer complaints" },
    { name: "RTI Online", link: "https://rtionline.gov.in", description: "File RTI applications" },
    { name: "NHRC", link: "https://nhrc.nic.in", description: "Human rights complaints" },
    { name: "NCW", link: "https://ncw.nic.in", description: "Women's issues" },
    { name: "NCPCR", link: "https://ncpcr.gov.in", description: "Child rights" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-destructive py-12 sm:py-16">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-destructive-foreground/10">
              <AlertTriangle className="h-8 w-8 text-destructive-foreground" />
            </div>
            <h1 className="mb-4 font-display text-3xl font-bold text-destructive-foreground sm:text-4xl lg:text-5xl">
              Emergency Contacts
            </h1>
            <p className="text-lg text-destructive-foreground/80">
              Keep these numbers saved. Call immediately in case of emergency.
            </p>
          </div>
        </div>
      </section>

      {/* Main Emergency Number */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl rounded-2xl border-2 border-destructive/30 bg-destructive/5 p-8 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-destructive">
              National Emergency Number
            </p>
            <a
              href="tel:112"
              className="mb-4 block font-display text-6xl font-bold text-destructive sm:text-7xl"
            >
              112
            </a>
            <p className="text-muted-foreground">
              For Police, Fire, Ambulance, and all emergencies
            </p>
          </div>
        </div>
      </section>

      {/* All Helplines */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="mb-8 text-center font-display text-2xl font-bold text-foreground sm:text-3xl">
            All Emergency Helplines
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {emergencyContacts.map((contact, index) => (
              <a
                key={index}
                href={`tel:${contact.number}`}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary">
                  <Phone className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-primary">{contact.number}</p>
                  <p className="font-medium text-foreground">{contact.name}</p>
                  <p className="text-sm text-muted-foreground">{contact.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Important Portals */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <h2 className="mb-8 text-center font-display text-2xl font-bold text-foreground sm:text-3xl">
            Important Government Portals
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {importantPortals.map((portal, index) => (
              <a
                key={index}
                href={portal.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div>
                  <p className="font-medium text-foreground group-hover:text-primary">
                    {portal.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{portal.description}</p>
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl rounded-xl border border-border bg-muted/50 p-8">
            <h2 className="mb-4 font-display text-xl font-bold text-foreground">
              Tips for Emergency Situations
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                Stay calm and provide clear information about your location
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                Keep these numbers saved in your phone for quick access
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                Share your location with trusted contacts in emergencies
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                Document important details (time, location, descriptions) if safe to do so
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                Teach these numbers to children and elderly family members
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EmergencyPage;
