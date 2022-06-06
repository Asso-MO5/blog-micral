import { ReactChild, useEffect } from 'react';
import wpMenu from '../../datasources/wpMenu';
import HeaderMenu from '../HeaderMenu/HeaderMenu';

interface props {
  readonly children: ReactChild;
  readonly OgBalise: ReactChild;
}
export default function Layout({children, OgBalise }: props) {


  return (
    <>
      {OgBalise}
      <header>
        <HeaderMenu/>
      </header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
}

