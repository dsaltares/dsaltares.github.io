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
    <Link href={href}>
      <a className="text-contentLink">{label}</a>
    </Link>
    <span>&nbsp;·&nbsp;</span>
    <span>{formatDate(date)}</span>
  </li>
);

export default TaxonomyListItem;
