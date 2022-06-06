import Image from "next/image";
import Link from "next/link";
import classes from "./Logo.module.css";

export default function Logo() {
  return (
    <Link href={"/"} passHref>
      <Image
        src="/logo.webp"
        alt="logo"
        width={40}
        height={40}
        className={classes.logo}
      />
    </Link>
  );
}
