import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";

interface Props extends PropsWithChildren<any> {
    label: string,
    to: string,
    pathname: string,
}

export const makeMenuItem = (menuItem: string, menuItemActive: string) => {

    const getMenuItemStatus = (active: boolean) => 
        active ? `${menuItem} ${menuItemActive}` : menuItem;

    
    const MenuItemBase: FC<Props> = ({label, to, pathname}) => 
        (<Link to={to} className={getMenuItemStatus(to === pathname)}>{label}</Link>);

    return MenuItemBase;
}