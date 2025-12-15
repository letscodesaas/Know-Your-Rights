import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RightsCategoryCard from "@/components/RightsCategoryCard";
import { rightsCategories } from "@/data/rightsData";

const RightsListPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-primary py-12 sm:py-16">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 font-display text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
              All Citizen Rights
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Browse through 26 categories covering all major rights of Indian citizens. Click on any category to learn more about your rights and remedies.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rightsCategories.map((category) => (
              <RightsCategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RightsListPage;
