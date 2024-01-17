import { makeMenuItem } from "./makeMenuItem";

const css = {
    topMenuItem:        `whitespace-nowrap mx-1.5 text-main-nav-color px-6 py-1 text-lg 
                         bg-opacity-0 hover:bg-base-text-color rounded-full transition-all duration-200 font-bold`,
    topMenuItemActive:  'bg-base-text-color bg-opacity-100 rounded-full transition-all duration-200',
}


const MainMenuItem = makeMenuItem(css.topMenuItem, css.topMenuItemActive)

export default MainMenuItem;
