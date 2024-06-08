import SectionTitle from "../SectionTitle";
import { getAllCategories } from "@/database/queries/queries";
import CategoryCard from "./CategoryCard";

const Categories = async ({ dictionary }) => {
  const categories = await getAllCategories(6);
  return (
    <section className="container py-16">
      <SectionTitle title={dictionary.categorySectionTitle} />
      <div className="grid grid-cols-3 gap-3">
        {categories?.data.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
