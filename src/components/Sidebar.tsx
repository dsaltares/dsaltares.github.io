import { faRssSquare } from '@fortawesome/free-solid-svg-icons';
import {
  faGithubSquare,
  faTwitterSquare,
  faLinkedin,
  faMastodon,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import Config from '@lib/config';

const SidebarWidth = 'md:max-w-[360px]';

const NavBarItems = [
  { text: 'Blog', href: '/' },
  { text: 'About', href: '/about-me' },
  { text: 'Apps & Tools', href: '/apps-tools' },
  { text: 'Game Jams', href: '/game-jams' },
  { text: 'Games', href: '/games' },
  {
    text: 'Libgdx Cookbook',
    href: '/libgdx-cross-platform-game-development-cookbook',
  },
];

const SocialLinks = [
  {
    icon: faGithubSquare,
    href: 'https://github.com/dsaltares',
    label: 'Github profile',
  },
  {
    icon: faLinkedin,
    href: 'https://www.linkedin.com/in/davidsaltares/',
    label: 'Linkedin profile',
  },
  {
    icon: faTwitterSquare,
    href: 'https://twitter.com/dsaltares',
    label: 'Twitter profile',
  },
  {
    icon: faRssSquare,
    href: 'https://saltares.com/index.xml',
    label: 'RSS feed',
  },
  {
    icon: faMastodon,
    href: 'https://fosstodon.org/@dsaltares',
    rel: 'me',
  },
];

const Sidebar = () => (
  <>
    <aside
      className={cn(
        SidebarWidth,
        'bg-primary px-10 py-10 text-white text-xl md:fixed md:top-0 md:left-0 md:h-full flex flex-col justify-end items-center md:items-start'
      )}
    >
      <div>
        <Link href="/">
          <div className="mb-5">
            <Image
              className="rounded-full"
              src="/img/profile.webp"
              width={200}
              height={200}
              alt="profile picture"
            />
          </div>
          <h1 className="text-white font-bold text-4xl leading-10">
            {Config.title}
          </h1>
        </Link>
      </div>
      <p className="text-contentLight text-2xl mb-5 leading-9 text-center md:text-left">
        {Config.description}
      </p>
      <div
        className="mb-5 font-base"
        dangerouslySetInnerHTML={{
          __html: `<button class="ml-onclick-form" onclick="ml('show', '646AL4', true)">✉️ Subscribe</button>`,
        }}
      />
      <nav>
        <ul className="mb-5 flex flex-col items-center md:items-start list-none pl-0">
          {NavBarItems.map((item) => (
            <li key={item.href} className="leading-7">
              <Link href={item.href}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <ul className="mb-5 list-none pl-0">
        {SocialLinks.map((item) => (
          <li key={item.href} className="inline">
            <Link aria-label={item.label} rel={item.rel} href={item.href}>
              <FontAwesomeIcon className="text-4xl mr-2" icon={item.icon} />
            </Link>
          </li>
        ))}
      </ul>
      <p className="text-contentLight text-lg">{`© ${new Date().getFullYear()} ${
        Config.author
      }.`}</p>
    </aside>
    <div
      className={cn(
        SidebarWidth,
        'w-full hidden md:block flex-grow-0 flex-shrink-0'
      )}
    ></div>
  </>
);

export default Sidebar;
