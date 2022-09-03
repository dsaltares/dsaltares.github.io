import Link from 'next/link';
import { categoryToHref } from '@lib/href';

type CategoryListItemProps = {
  category: string;
};

const CategoryListItem = ({ category }: CategoryListItemProps) => (
  <li>
    <Link href={categoryToHref(category)}>
      <a className="text-contentLink">{category}</a>
    </Link>
  </li>
);

export default CategoryListItem;
