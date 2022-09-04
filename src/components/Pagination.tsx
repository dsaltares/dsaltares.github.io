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
  const prevIcon = <FontAwesomeIcon icon={faBackward} />;
  const nextIcon = <FontAwesomeIcon icon={faForward} />;
  const prevDisabled = current === 1;
  const nextDisabled = current === total;
  return (
    <div className="mt-10 mb-5 flex flex-row justify-center">
      <ul className="p-0 m-0 list-none flex flex-row">
        <li className={cn(buttonBase, enabled, 'border rounded-l')}>
          <Link href="/">
            <a>
              <FontAwesomeIcon icon={faBackwardFast} />
            </a>
          </Link>
        </li>
        <li
          className={cn(buttonBase, 'border-y', {
            [disabled]: prevDisabled,
            [enabled]: !prevDisabled,
          })}
        >
          {!prevDisabled ? (
            <Link href={`/page/${current - 1}`}>
              <a>{prevIcon}</a>
            </Link>
          ) : (
            prevIcon
          )}
        </li>
        <li className="text-white bg-contentLink px-3 py-2 border-y border-neutral-300">
          {current}
        </li>
        <li
          className={cn(buttonBase, 'border-y', {
            [disabled]: nextDisabled,
            [enabled]: !nextDisabled,
          })}
        >
          {!nextDisabled ? (
            <Link href={`/page/${current + 1}`}>
              <a>{nextIcon}</a>
            </Link>
          ) : (
            nextIcon
          )}
        </li>
        <li className={cn(buttonBase, enabled, 'border rounded-r')}>
          <Link href={`/page/${total}`}>
            <a>
              <FontAwesomeIcon icon={faForwardFast} />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
