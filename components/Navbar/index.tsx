import Link from 'next/link';
import { useScrollTrigger } from '@mui/material';
import classNames from 'classnames';
import styles from './Navbar.module.scss';
import { handleMoveToId } from 'utils';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const whatsappLink =
  'https://wa.me/918383099920?text=I%20am%20looking%20for%20properties%20to%20rent%20or%20buy.';

  type Menu = {
  text: string;
  path: string;
};
const menus: Menu[] = [
  {
    text: 'About us',
    path: '/?about-us=true',
  },
];

export type NavbarProps = {
  dark?: boolean;
  setOpen?: () => void;
  logoColor?: string;
  home?: boolean;
};

const Navbar: React.FC<NavbarProps> = ({
  dark = false,
  logoColor = 'black',
  setOpen,
  home = false,
}: NavbarProps) => {
  const router = useRouter();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 80,
  });
  

  const menus: Menu[] = [
    {
      text: 'About us',
      path: '/?about-us=true',
    },
    // {
    //   text: 'Contact Us',
    //   onClick: () => handleButtonClick(),
    // },
  ];

  const [activeLogoColor, setActiveLogoColor] = useState('');

  if (!activeLogoColor) setActiveLogoColor(logoColor);

  useEffect(() => {
    setActiveLogoColor(trigger ? 'white' : logoColor);
  }, [trigger]);

  return (
    <nav
      className={classNames(`${styles.navbar} padding-wrapper`, {
        [styles.active]: trigger || dark,
      })}>
      <div className={styles['navbar-content']}>
        <div className={styles['navbar-content-box']}>
          <Link href="/">
            <a>
              <img
                src={`/logo-${activeLogoColor}.png`}
                alt="Pillar Markets"
                width={120}
                height={60}
                className={styles.logo}
              />
            </a>
          </Link>
        </div>
        <div className={styles['sidebar-desktop']}>
          {menus.map((menu, idx) => {
  const linkClass = trigger || dark ? 'link-trigger' : 'link';
  const homeClass = home ? (trigger ? 'home-trigger' : 'home') : '';

  return (
    <div className={styles['navbar-content-box']} key={idx}>
      <Link href={menu.path} passHref>
        <a>
          <button className={`ui-button primary ${linkClass} ${homeClass}`}>
            {menu.text}
          </button>
        </a>
      </Link>
    </div>
  );
})}
{/* WhatsApp Contact Button */}
<div className={styles['navbar-content-box']}>
  <a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
  >
    <button
      className={`ui-button primary ${
        trigger || dark ? 'button-trigger' : 'button'
      } ${styles.whatsapp}`}
    >
      <WhatsAppIcon style={{ marginRight: 8 }} />
      Contact Us
    </button>
  </a>
</div>

        </div>
      </div>
      <div className={styles['sidebar-trigger']} onClick={setOpen}>
        <MenuIcon style={{ fontSize: 30 }} htmlColor={trigger ? 'white' : logoColor} />
      </div>
    </nav>
  );
};

export default Navbar;
