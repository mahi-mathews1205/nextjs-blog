import Link from "next/link";
import Logo from "./logo";

import classes from "./main-navigation.module.css";

const MainNavigation = (props) => {
  const navigationList = [
    { label: "Posts", url: "/posts" },
    { label: "Contact", url: "/contact" },
  ];
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          {navigationList?.map((navItem) => (
            <li key={navItem?.label}>
              <Link href={navItem?.url}>{navItem?.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
