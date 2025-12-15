import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RightsCategoryCard from "@/components/RightsCategoryCard";
import { rightsCategories } from "@/data/rightsData";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      return rightsCategories;
    }

    const query = searchQuery.toLowerCase();
    return rightsCategories.filter(
      (category) =>
        category.title.toLowerCase().includes(query) ||
        category.shortDescription.toLowerCase().includes(query) ||
        category.fullDescription.toLowerCase().includes(query) ||
        category.examples.some((example) => example.toLowerCase().includes(query)) ||
        category.whatToDo.some((action) => action.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Search Hero */}
      <section className="bg-primary py-12 sm:py-16">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-4 font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
              Search Your Rights
            </h1>
            <p className="mb-8 text-primary-foreground/80">
              Find information about specific rights, situations, or remedies
            </p>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for rights, situations, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-14 pl-12 text-lg bg-card text-foreground placeholder:text-muted-foreground border-0 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-muted-foreground">
              {searchQuery.trim()
                ? `Found ${filteredCategories.length} result${filteredCategories.length !== 1 ? "s" : ""} for "${searchQuery}"`
                : `Showing all ${rightsCategories.length} categories`}
            </p>
          </div>

          {filteredCategories.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCategories.map((category) => (
                <RightsCategoryCard key={category.id} category={category} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="mb-2 text-lg font-medium text-foreground">No results found</p>
              <p className="text-muted-foreground">
                Try searching with different keywords or browse all categories
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SearchPage;
