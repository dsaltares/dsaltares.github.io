import Link from 'next/link';
import { categoryToHref } from '@lib/href';

type CategoriesProps = {
  categories: string[];
};

const Categories = ({ categories }: CategoriesProps) => (
  <div className="flex flex-row gap-1">
    {categories.map((category) => (
      <Link
        className="px-2 py-1 bg-slate-900 text-white rounded font-bold text-sm"
        key={category}
        href={categoryToHref(category)}
      >
        {category}
      </Link>
    ))}
  </div>
);

export default Categories;
