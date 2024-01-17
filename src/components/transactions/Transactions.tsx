import {FC} from "react"
import Transaction from "./Transaction";

const css = {
    container:    '',

    transactionBtsContainer: 'flex justify-between my-3',
    button:       `whitespace-nowrap px-6 py-1 text-sm md:text-base rounded-full
                   hover:bg-opacity-90 transition-all duration-200`,
    allBtn:       'border border-transactions-color bg-transactions-color text-white mr-3',
    xepptCardBtn: 'border border-transactions-color text-transactions-color',
    showMoreBtn:  'border border-black bg-base-gray-color text-main-nav-color mr-0',
    
    showModeBtnConaiterBase:   'hidden md:block',
    showModeBtnConaiterMobile: 'flex md:hidden justify-center'
}

const Transactions: FC = () => {
    return (
    <div className={css.container}>
        <div className={css.transactionBtsContainer}>
            <div>
                <button className={`${css.button} ${css.allBtn}`}>All</button> 
                <button className={`${css.button} ${css.xepptCardBtn}`}>XEPPT Card</button>
            </div>
            <div className={css.showModeBtnConaiterBase}>
                <button className={`${css.button} ${css.showMoreBtn}`}>Show more</button>
            </div>
        </div>
        <div>
            <Transaction amount={42.50} name="Cineplex Inc." date="Sept 24" type={"payment"} />
            <Transaction amount={500.00} name="RBC Royal Bank" date="Aug 19" type={"transfer"} />
            <Transaction amount={110.45} name="Skyline Restaurant" date="Aug 1" type={"payment"} />
            <div className={css.showModeBtnConaiterMobile}>
                <button className={`${css.button} ${css.showMoreBtn}`}>Show more</button>
            </div>
        </div>

    </div>)
}

export default Transactions;
