import type { IconLookup } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

const SidebarWidth = 'md:w-[360px]';

const NavBarItems = [
  { text: 'Blog', href: '/' },
  { text: 'About', href: '/about' },
  { text: 'Apps & Tools', href: '/apps-tools' },
  { text: 'Game Jams', href: '/game-jams' },
  { text: 'Games', href: '/games' },
  { text: 'Libgdx Cookbook', href: '/libgdx-cookbook' },
];

const SocialLinks = [
  {
    icon: { prefix: 'fab', iconName: 'github-square' } as IconLookup,
    href: 'https://github.com/dsaltares',
  },
  {
    icon: { prefix: 'fab', iconName: 'linkedin' } as IconLookup,
    href: 'https://www.linkedin.com/in/davidsaltares/',
  },
  {
    icon: { prefix: 'fab', iconName: 'twitter-square' } as IconLookup,
    href: 'https://twitter.com/dsaltares',
  },
  {
    icon: { prefix: 'fas', iconName: 'rss-square' } as IconLookup,
    href: 'https://saltares.com/index.xml',
  },
];

const Sidebar = () => (
  <>
    <aside
      className={cn(
        SidebarWidth,
        'bg-primary px-10 py-10 text-white text-xl md:fixed md:top-0 md:left-0 md:h-full flex flex-col justify-end'
      )}
    >
      <div>
        <Link href="/">
          <a>
            <div className="mb-5">
              <Image
                className="rounded-full"
                src="/img/profile.jpg"
                width={200}
                height={200}
                alt="profile picture"
              />
            </div>
            <h1 className="text-white font-bold text-4xl hover:underline leading-10">
              David Saltares
            </h1>
          </a>
        </Link>
      </div>
      <p className="text-contentLight text-2xl mb-5 leading-9">
        {'Engineering Leadership & Software Development'}
      </p>
      <Link href="https://tinyletter.com/dsaltares/">
        <a className="hover:underline">
          <p className="mb-5">✉️ Subscribe</p>
        </a>
      </Link>
      <nav className="mb-5">
        <ul>
          {NavBarItems.map((item) => (
            <li key={item.href} className="leading-7">
              <Link href={item.href}>
                <a className="hover:underline">{item.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <ul className="mb-5">
        {SocialLinks.map((item) => (
          <li key={item.href} className="inline">
            <Link href={item.href}>
              <a>
                <FontAwesomeIcon className="text-4xl mr-2" icon={item.icon} />
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <p className="text-contentLight text-lg">{`© ${new Date().getFullYear()} David Saltares.`}</p>
    </aside>
    <div className={cn(SidebarWidth, 'hidden md:flex')}></div>
  </>
);

export default Sidebar;
