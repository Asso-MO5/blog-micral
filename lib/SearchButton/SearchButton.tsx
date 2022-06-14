import classes from "./SearchButton.module.css";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import SearchWp from "../SearchWp/SearchWp";

export default function SearchButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={classes.container}
        title="search"
        onClick={() => setIsOpen(true)}
      >
        <div className={classes.round} />
        <div className={classes.line} />
      </div>
      <CSSTransition in={isOpen} timeout={200} classNames="fade" unmountOnExit>
        <SearchWp onClose={() => setIsOpen(false)} />
      </CSSTransition>
    </>
  );
}
