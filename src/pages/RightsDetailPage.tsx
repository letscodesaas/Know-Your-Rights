import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Phone, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { rightsCategories } from "@/data/rightsData";
import { getCategoryIcon } from "@/lib/icons";

const RightsDetailPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = rightsCategories.find((c) => c.id === categoryId);

  if (!category) {
    return <Navigate to="/rights" replace />;
  }

  const Icon = getCategoryIcon(category.icon);

  const currentIndex = rightsCategories.findIndex((c) => c.id === categoryId);
  const prevCategory = currentIndex > 0 ? rightsCategories[currentIndex - 1] : null;
  const nextCategory = currentIndex < rightsCategories.length - 1 ? rightsCategories[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="border-b border-border bg-card py-4">
        <div className="container-custom">
          <Link
            to="/rights"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Rights
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-primary py-12 sm:py-16">
        <div className="container-custom">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary-foreground/10">
              <Icon className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <div className="mb-1 flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                  {category.letter}
                </span>
                <h1 className="font-display text-2xl font-bold text-primary-foreground sm:text-3xl lg:text-4xl">
                  {category.title}
                </h1>
              </div>
              <p className="text-lg text-primary-foreground/80">{category.shortDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="mb-8 rounded-xl border border-border bg-card p-6 sm:p-8">
                <h2 className="mb-4 font-display text-xl font-semibold text-foreground">
                  Understanding This Right
                </h2>
                <p className="leading-relaxed text-muted-foreground">{category.fullDescription}</p>
              </div>

              {/* Examples */}
              <div className="mb-8 rounded-xl border border-border bg-card p-6 sm:p-8">
                <h2 className="mb-4 font-display text-xl font-semibold text-foreground">
                  Common Examples
                </h2>
                <ul className="space-y-3">
                  {category.examples.map((example, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-india" />
                      <span className="text-muted-foreground">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What To Do */}
              <div className="rounded-xl border-2 border-accent/30 bg-accent/5 p-6 sm:p-8">
                <div className="mb-4 flex items-center gap-2">
                  <AlertCircle className="h-6 w-6 text-accent" />
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    What To Do If Your Rights Are Violated
                  </h2>
                </div>
                <ul className="space-y-3">
                  {category.whatToDo.map((action, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent text-sm font-medium text-accent-foreground">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Contacts */}
              <div className="sticky top-24 rounded-xl border border-border bg-card p-6">
                <h2 className="mb-4 font-display text-lg font-semibold text-foreground">
                  Official Contacts
                </h2>
                <div className="space-y-4">
                  {category.contacts.map((contact, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-border bg-muted/50 p-4"
                    >
                      <h3 className="mb-2 font-medium text-foreground">{contact.name}</h3>
                      {contact.phone && (
                        <div className="mb-2 flex items-center gap-2 text-sm">
                          <Phone className="h-4 w-4 text-green-india" />
                          <span className="font-medium text-green-india">{contact.phone}</span>
                        </div>
                      )}
                      {contact.link && (
                        <a
                          href={contact.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                        >
                          Visit Official Website
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>

                {/* Emergency CTA */}
                <div className="mt-6 rounded-lg bg-destructive/10 p-4">
                  <p className="mb-3 text-sm font-medium text-destructive">
                    In case of emergency:
                  </p>
                  <Link to="/emergency">
                    <Button variant="emergency" size="sm" className="w-full">
                      View All Emergency Numbers
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-border pt-8 sm:flex-row">
            {prevCategory ? (
              <Link
                to={`/rights/${prevCategory.id}`}
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="text-sm">Previous: {prevCategory.title}</span>
              </Link>
            ) : (
              <div />
            )}
            {nextCategory && (
              <Link
                to={`/rights/${nextCategory.id}`}
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground sm:ml-auto"
              >
                <span className="text-sm">Next: {nextCategory.title}</span>
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </Link>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RightsDetailPage;
