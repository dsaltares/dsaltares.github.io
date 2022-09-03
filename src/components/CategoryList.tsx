import CategoryListItem from './CategoryListItem';

type CategoryListProps = {
  categories: string[];
};

const CategoryList = ({ categories }: CategoryListProps) => (
  <ul className="flex flex-col gap-3">
    {categories.map((category) => (
      <CategoryListItem key={category} category={category} />
    ))}
  </ul>
);

export default CategoryList;
