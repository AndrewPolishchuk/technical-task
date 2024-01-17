import {FC} from "react"
import Transactions from "./transactions/Transactions";
import AccountBalnce from "./accountBalance/AccountBalance";
import BankAccount from "./bankAccount/BankAccount";
import Cards from "./cards/Cards";

const css = {
    container: `xl:pt-[136px] lg:pt-[96px] md:pt-[96px] sm:pt-[72px]
                flex justify-center xl:px-52 flex-col lg:flex-row 
                xl:bg-[url('./assets/images/sidebar-bg-lg.png')] bg-no-repeat bg-right-bottom`,
    mainArea:  'md:basis-2/3 px-5 bg-main-area-bg pb-0 lg:pb-10',
    sideBar:   `md:basis-1/3 bg-none lg:bg-[url('./assets/images/sidebar-bg.png')] xl:bg-none bg-no-repeat bg-right-bottom p-5 pb-10`,
    
    sectionContainer: 'mt-7 xl:mt-20', 
    sectionTitle:     'font-base md:text-2xl font-bold block mb-3 xl:mb-6 text-base-text-color',

}

const Home: FC = () => {
    return (
        <div className={css.container}>
            <div className={css.mainArea}>
                <div className={css.sectionContainer}>
                    <span className={css.sectionTitle}>XEPPT Account Balance</span>
                    <AccountBalnce />
                </div>

                <div className={css.sectionContainer}>
                    <span className={css.sectionTitle}>XEPPT Prepaid Card</span>
                    <Cards />
                </div>

                <div className={css.sectionContainer}>
                    <span className={css.sectionTitle}>Transactions</span>
                    <Transactions />
                </div>

            </div>

            <div className={css.sideBar}>
                <BankAccount />
            </div>
        </div>
    );
}

export default Home;