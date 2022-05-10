import {  ReactChild } from "react";

interface props {
  readonly children: ReactChild;
  readonly OgBalise: ReactChild;
}
export default function Layout({children, OgBalise }: props) {
  return (
    <>
      {OgBalise}
      <header>header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
}

