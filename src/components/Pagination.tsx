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
    <div
      className={cn(buttonBase, 'border-y', {
        [disabled]: prevDisabled,
        [enabled]: !prevDisabled,
      })}
    >
      <FontAwesomeIcon icon={faBackward} />
    </div>
  );
  const nextItem = (
    <div
      className={cn(buttonBase, 'border-y', {
        [disabled]: nextDisabled,
        [enabled]: !nextDisabled,
      })}
    >
      <FontAwesomeIcon icon={faForward} />
    </div>
  );
  return (
    <div className="mt-10 mb-5 flex flex-row justify-center">
      <nav className="p-0 m-0 list-none flex flex-row">
        <Link href="/">
          <div className={cn(buttonBase, enabled, 'border rounded-l')}>
            <FontAwesomeIcon icon={faBackwardFast} />
          </div>
        </Link>
        {!prevDisabled ? (
          <Link href={`/page/${current - 1}`}>{prevItem}</Link>
        ) : (
          prevItem
        )}
        <div className="text-white bg-contentLink px-3 py-2 border-y border-neutral-300">
          {current}
        </div>

        {!nextDisabled ? (
          <Link href={`/page/${current + 1}`}>{nextItem}</Link>
        ) : (
          nextItem
        )}

        <Link href={`/page/${total}`}>
          <div className={cn(buttonBase, enabled, 'border rounded-r')}>
            <FontAwesomeIcon icon={faForwardFast} />
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Pagination;
