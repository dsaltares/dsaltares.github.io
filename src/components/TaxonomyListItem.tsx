import Link from 'next/link';
import formatDate from '@lib/formatDate';
import type { TaxonomyItem } from '@lib/types';

type TaxonomyListItemProps = {
  item: TaxonomyItem;
};

const TaxonomyListItem = ({
  item: { label, href, date },
}: TaxonomyListItemProps) => (
  <li className="text-content">
    <Link className="text-contentLink" href={href}>
      {label}
    </Link>
    <span>&nbsp;·&nbsp;</span>
    <span>{formatDate(date)}</span>
  </li>
);

export default TaxonomyListItem;
