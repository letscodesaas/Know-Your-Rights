import { useState, useMemo } from "react";
import { Search, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { legalGlossary } from "@/data/rightsData";

const GlossaryPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTerms = useMemo(() => {
    if (!searchQuery.trim()) {
      return legalGlossary;
    }

    const query = searchQuery.toLowerCase();
    return legalGlossary.filter(
      (item) =>
        item.term.toLowerCase().includes(query) ||
        item.fullForm.toLowerCase().includes(query) ||
        item.definition.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-primary py-12 sm:py-16">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10">
              <BookOpen className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="mb-4 font-display text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
              Legal Terms Glossary
            </h1>
            <p className="mb-8 text-lg text-primary-foreground/80">
              Understanding legal terminology in simple language
            </p>
            <div className="relative mx-auto max-w-xl">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for a legal term..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-14 pl-12 text-lg bg-card text-foreground placeholder:text-muted-foreground border-0 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Jump */}
      <section className="border-b border-border bg-card py-4">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2">
            {alphabet.map((letter) => {
              const hasTerms = legalGlossary.some((item) =>
                item.term.toUpperCase().startsWith(letter)
              );
              return (
                <button
                  key={letter}
                  disabled={!hasTerms}
                  className={`flex h-8 w-8 items-center justify-center rounded text-sm font-medium transition-colors ${
                    hasTerms
                      ? "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                      : "bg-muted text-muted-foreground/50 cursor-not-allowed"
                  }`}
                  onClick={() => {
                    if (hasTerms) {
                      const element = document.getElementById(`letter-${letter}`);
                      element?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Glossary List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            {searchQuery.trim() && (
              <p className="mb-6 text-muted-foreground">
                Found {filteredTerms.length} result{filteredTerms.length !== 1 ? "s" : ""} for "{searchQuery}"
              </p>
            )}

            {filteredTerms.length > 0 ? (
              <div className="space-y-4">
                {filteredTerms.map((item, index) => {
                  const firstLetter = item.term[0].toUpperCase();
                  const isFirstOfLetter =
                    index === 0 ||
                    filteredTerms[index - 1].term[0].toUpperCase() !== firstLetter;

                  return (
                    <div key={item.term}>
                      {isFirstOfLetter && !searchQuery.trim() && (
                        <div
                          id={`letter-${firstLetter}`}
                          className="mb-4 mt-8 first:mt-0"
                        >
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                            {firstLetter}
                          </span>
                        </div>
                      )}
                      <div className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <h3 className="font-display text-lg font-semibold text-foreground">
                              {item.term}
                            </h3>
                            {item.fullForm && (
                              <p className="text-sm text-primary">
                                {item.fullForm}
                              </p>
                            )}
                          </div>
                        </div>
                        <p className="mt-3 text-muted-foreground">
                          {item.definition}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="py-16 text-center">
                <p className="mb-2 text-lg font-medium text-foreground">
                  No terms found
                </p>
                <p className="text-muted-foreground">
                  Try searching with different keywords
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
              Need More Legal Information?
            </h2>
            <p className="mb-6 text-muted-foreground">
              For detailed legal information and assistance, visit these official resources:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="https://nalsa.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <h3 className="font-medium text-foreground">NALSA</h3>
                <p className="text-sm text-muted-foreground">
                  National Legal Services Authority
                </p>
              </a>
              <a
                href="https://indiacode.nic.in"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <h3 className="font-medium text-foreground">India Code</h3>
                <p className="text-sm text-muted-foreground">
                  Digital Repository of All Laws
                </p>
              </a>
              <a
                href="https://ecourts.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <h3 className="font-medium text-foreground">eCourts</h3>
                <p className="text-sm text-muted-foreground">
                  Case Status and Court Information
                </p>
              </a>
              <a
                href="https://legislative.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <h3 className="font-medium text-foreground">Legislative Department</h3>
                <p className="text-sm text-muted-foreground">
                  Latest Bills and Acts
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GlossaryPage;
