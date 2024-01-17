import { makeMenuItem } from "./makeMenuItem";

const css = {
    menuItem:        'block whitespace-nowrap text-main-nav-color px-6 py-1 text-lg hover:bg-base-text-color w-full',
    menuItemActive:  'bg-base-text-color',
}

const MobileMenuItem = makeMenuItem(css.menuItem, css.menuItemActive);

export default MobileMenuItem;
