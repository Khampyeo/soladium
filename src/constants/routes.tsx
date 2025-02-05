import HomeIcon from "@/../public/icons/icon_home.svg";
import { IMenuItem } from "@/types/sidebar";

export const HOMEPAGE: IMenuItem = {
  key: "/",
  label: "Dashboard",
  icon: <HomeIcon />,
};

export const routes = [HOMEPAGE];

export const findRouteByPath = (pathName: string): IMenuItem | null => {
  function search(menuItems: IMenuItem[]): IMenuItem | null {
    for (let item of menuItems) {
      if (item.key === pathName) {
        return item;
      }
      if (item.children && item.children.length > 0) {
        const found = search(item.children);
        if (found) {
          return found;
        }
      }
    }
    return null;
  }

  return search(routes);
};
