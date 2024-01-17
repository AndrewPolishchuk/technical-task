import {FC, PropsWithChildren, useCallback, useState} from "react";

import arrowIcon from '../../assets/svg/arrow-down-icon.svg'

interface Props extends PropsWithChildren<any> {
    label: string,
} 

const css = {
    dropdown:     'relative inline-block text-left',
    dropdownBtn:  `bg-transparent border-0 outline-none items-center  
                   w-full justify-center gap-x-1.5 rounded-md px-3 py-2 
                   text-main-nav-color text-lg hidden md:inline-flex`,
    dropdownLabel: `hidden lg:block`,
    dropdownIcon:  'h-[7px] w-[12px] text-gray-400',
    dropdownMenu:  `absolute right-0 z-10 mt-2 w-56 origin-top-right 
                    rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`,
    dropdownMenuItem: 'text-gray-700 block px-4 py-2 text-sm' 
      
}

const UserDropdown: FC<Props> = ({label}) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const dropDownClick = useCallback(() => {
        setIsOpened(!isOpened);
    }, [isOpened]);

    return (
        <div className={css.dropdown}>
            <div onClick={dropDownClick}>
                <button className={css.dropdownBtn} 
                    id="menu-button" aria-expanded="true" aria-haspopup="true">
                    <span className={css.dropdownLabel}>{label}</span>
                    <img className={css.dropdownIcon} src={arrowIcon} alt="Arrow Down" />
                </button>
            </div>

           
            <div className={`${css.dropdownMenu} ${isOpened ? 'animate-element-show':'animate-element-hide'}`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                <div className="py-1" role="none">
                    <a href="/" className={css.dropdownMenuItem} role="menuitem" tabIndex={-1} id="menu-item-0">Account settings</a>
                    <a href="/" className={css.dropdownMenuItem} role="menuitem" tabIndex={-1} id="menu-item-1">Support</a>
                    <a href="/" className={css.dropdownMenuItem} role="menuitem" tabIndex={-1} id="menu-item-2">License</a>
                </div>
            </div> 
        </div>
    );
}

export default UserDropdown;