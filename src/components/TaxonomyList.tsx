import type { TaxonomyItem } from '@lib/types';
import TaxonomyListItem from './TaxonomyListItem';

type TaxonomyListProps = {
  items: TaxonomyItem[];
};

const TaxonomyList = ({ items }: TaxonomyListProps) => (
  <ul className="flex flex-col gap-3">
    {items.map((item) => (
      <TaxonomyListItem key={item.href} item={item} />
    ))}
  </ul>
);

export default TaxonomyList;
