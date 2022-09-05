import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBackward,
  faBackwardFast,
  faForward,
  faForwardFast,
} from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';

type PaginationProps = {
  current: number;
  total: number;
};

const Pagination = ({ current, total }: PaginationProps) => {
  const buttonBase = 'px-3 py-2 border-neutral-300';
  const disabled = 'cursor-not-allowed text-contentLight hover:bg-transparent';
  const enabled = 'text-contentLink hover:bg-neutral-100';
  const prevDisabled = current === 1;
  const nextDisabled = current === total;
  const prevItem = (
    <li
      className={cn(buttonBase, 'border-y', {
        [disabled]: prevDisabled,
        [enabled]: !prevDisabled,
      })}
    >
      <FontAwesomeIcon icon={faBackward} />
    </li>
  );
  const nextItem = (
    <li
      className={cn(buttonBase, 'border-y', {
        [disabled]: nextDisabled,
        [enabled]: !nextDisabled,
      })}
    >
      <FontAwesomeIcon icon={faForward} />
    </li>
  );
  return (
    <div className="mt-10 mb-5 flex flex-row justify-center">
      <ul className="p-0 m-0 list-none flex flex-row">
        <Link href="/">
          <a>
            <li className={cn(buttonBase, enabled, 'border rounded-l')}>
              <FontAwesomeIcon icon={faBackwardFast} />
            </li>
          </a>
        </Link>
        {!prevDisabled ? (
          <Link href={`/page/${current - 1}`}>
            <a>{prevItem}</a>
          </Link>
        ) : (
          prevItem
        )}
        <li className="text-white bg-contentLink px-3 py-2 border-y border-neutral-300">
          {current}
        </li>

        {!nextDisabled ? (
          <Link href={`/page/${current + 1}`}>
            <a>{nextItem}</a>
          </Link>
        ) : (
          nextItem
        )}

        <Link href={`/page/${total}`}>
          <a>
            <li className={cn(buttonBase, enabled, 'border rounded-r')}>
              <FontAwesomeIcon icon={faForwardFast} />
            </li>
          </a>
        </Link>
      </ul>
    </div>
  );
};

export default Pagination;
