import { MENU_ITEMS } from "../../../interfaces/menu.interface";
import classes from "./HeaderMobile.module.css";
import { useState } from "react";
import Link from "next/link";
import Logo from '../../Logo/Logo';

interface props {
  readonly menu: Array<MENU_ITEMS>;
}
export default function HeaderMobile({ menu }: props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.hamburger} onClick={() => setIsOpen(!isOpen)}>
        {Array(1, 2, 3)
          .fill(1, 3)
          .map((bar: number) => (
            <div className={classes.bar} key={bar} />
          ))}
      </div>
      <div className={classes.menu} data-isopen={isOpen}>
        <Logo/>
        <div className={classes.links}>
          {menu
            .sort((a, b) => b.menu_order - a.menu_order)
            .map((item) => (
              <div
                className={classes.link}
                key={item.ID}
                onClick={() => setIsOpen(false)}
              >
                <Link href={`/category/${item.slug}`} passHref>
                  <a>{item.title}</a>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
