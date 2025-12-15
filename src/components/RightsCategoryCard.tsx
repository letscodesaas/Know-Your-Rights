import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { RightCategory } from "@/data/rightsData";
import { getCategoryIcon } from "@/lib/icons";

interface RightsCategoryCardProps {
  category: RightCategory;
}

const RightsCategoryCard = ({ category }: RightsCategoryCardProps) => {
  const Icon = getCategoryIcon(category.icon);

  return (
    <Link
      to={`/rights/${category.id}`}
      className="group block rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <div className="mb-1 flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-xs font-bold text-accent">
              {category.letter}
            </span>
            <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary">
              {category.title}
            </h3>
          </div>
          <p className="mb-3 text-sm text-muted-foreground">
            {category.shortDescription}
          </p>
          <div className="flex items-center text-sm font-medium text-primary">
            Learn more
            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RightsCategoryCard;
