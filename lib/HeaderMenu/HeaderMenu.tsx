import { useEffect, useState } from "react";
import wpMenu from "../../datasources/wpMenu";
import useIsMobile from "../../hooks/useIsMobile";
import { MENU_ITEMS } from "../../interfaces/menu.interface";
import HeaderMobile from "./HeaderMobile/HeaderMobile";
import HeaderDesktop from "./HeaderDesktop/HeaderDesktop";

export default function HeaderMenu() {
  const [menu, setMenu] = useState<Array<MENU_ITEMS>>([]),
    isMobile = useIsMobile();

  async function handleFetch() {
    try {
      const { data } = await wpMenu.get("/menu_haut_blog");
      setMenu(data?.items);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    handleFetch();
  }, []);

  return isMobile ? (
    <HeaderMobile menu={menu} />
  ) : (
    <HeaderDesktop menu={menu} />
  );
}
