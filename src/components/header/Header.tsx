import {FC, useCallback, useState} from "react"
import { useLocation } from "react-router-dom"
import UserDropdown from "./UserDropdown" 
import MainMenuItem from "./MainMenuItem"
import MobileMenuItem from "./MobileMenuItem"

import logo from '../../assets/svg/logo.svg'
import bellIcon from '../../assets/svg/bell-icon.svg'
import menuIcon from '../../assets/svg/burger-menu-icon.svg'

const css = {
  header:      `fixed w-full flex justify-between bg-header-bg shadow-3xl items-center
                xl:min-h-[136px] lg:min-h-[96px] md:min-h-[96px] sm:min-h-[72px]
                sm:px-2 px-1 xl:px-52`,
  logo:        'h-12 xl:w-[140px] lg:w-[140px] md:w-[100px] sm:w-[100px] ml-0 sm:ml-5',
  nav:         'flex',

  topMenu:            'xl:ml-24 lg:ml-20 items-center hidden md:flex',
  
  mobileMenu:          'w-full bg-header-bg sm:block absolute top-[72px] left-0 py-2 block md:hidden',
  mobileMenuBtn:       'block md:hidden', 

  account:            'flex items-center',
  languageBar:        'text-main-nav-color text-sm md:text-lg mr-2',
  accountIcon:        'bg-secondary-bg rounded-full p-2 text-base-gray-color font-medium mx-2',
  userIcon:           'hidden md:block'
}

const Header: FC = () => {
    const location = useLocation();

    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState<boolean>(false);
    const mobileMenuBtnClick = useCallback(() => { setIsMobileMenuVisible(!isMobileMenuVisible) }, 
      [isMobileMenuVisible]
    );
    
    return (
    <header className={css.header}>
      <button className={css.mobileMenuBtn} onClick={mobileMenuBtnClick}>
        <img src={menuIcon} alt="Menu Icon" />
      </button>
      <nav className={`${css.mobileMenu} ${isMobileMenuVisible ? 'animate-element-show':'animate-element-hide'}`}>
        <MobileMenuItem label="Home" to="/" pathname={location.pathname}  />
        <MobileMenuItem label="XEPPT Card" to="/card" pathname={location.pathname}  />
        <MobileMenuItem label="Statements" to="/statements" pathname={location.pathname}  />
      </nav>
      
      <div className={css.nav}>
        <img src={logo} alt="Logo" className={css.logo} />
        
        <nav className={css.topMenu}>
          <MainMenuItem label="Home" to="/" pathname={location.pathname}  />
          <MainMenuItem label="XEPPT Card" to="/card" pathname={location.pathname}  />
          <MainMenuItem label="Statements" to="/statements" pathname={location.pathname}  />
        </nav>
      </div>
      <div className={css.account}>
        <a href="/" className={css.languageBar}>FR</a>
        <img src={bellIcon} alt="Notifications" className={css.accountIcon}></img>
        <span className={`${css.accountIcon} ${css.userIcon}`}>PM</span>
        <UserDropdown label={"PETER MORGAN"} />
      </div>
    </header>
    );
}

export default Header;