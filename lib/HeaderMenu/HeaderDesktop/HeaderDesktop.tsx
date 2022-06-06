import Link from 'next/link';
import { MENU_ITEMS } from '../../../interfaces/menu.interface';
import Logo from '../../Logo/Logo';
import classes from './HeaderDesktop.module.css';

interface props {
    readonly menu: Array<MENU_ITEMS>;
  }

export default function HeaderDesktop({menu}:props){

    return <div className={classes.container}>
        <Logo/>
        <nav className={classes.menu}>
        {menu
            .sort((a, b) => b.menu_order - a.menu_order)
            .map((item) => (
              <div
                className={classes.link}
                key={item.ID}
              >
                <Link href={`/category/${item.slug}`} passHref>
                  <a>{item.title}</a>
                </Link>
              </div>
            ))}
        </nav>
    </div>
}