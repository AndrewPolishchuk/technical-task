import {FC} from 'react';
import plusIcon from '../../assets/svg/plus-icon.svg'
import BankCard from './BankCard';

const css = {
    container:          'max-w-[360px]',
    addMoneyBtn:        `whitespace-nowrap py-1 text-lg w-full rounded-full border border-black bg-base-gray-color text-main-nav-color mr-0
                         hover:bg-opacity-90 transition-all duration-200`,
    addMoneyBtnRegular: 'hidden lg:block',
    addMoneyBtnMobile:  'block lg:hidden mt-14 md:mt-3 max-w-[360px]',
    addMoneyContainer:  'flex w-full justify-center',
    title:              'text-base-text-color text-base md:text-2xl lg:text-lg font-bold block lg:mt-7 mb-3',
    bankAccountCard:    'border border-item-border bg-bank-account-bg rounded-md text-base-text-color px-2 py-1.5 mb-3.5',
    linkIcon:           `rounded-full bg-base-gray-color w-[40px] h-[40px] mr-3 p-[8px]
                        hover:bg-opacity-90 transition-all duration-200`,
    addBankCard:        `flex items-center font-bold text-base-text-color text-xl md:text-lg underline`
}

const BankAccount: FC = () => {
    return (
    <> 
        <div className={css.container}>
            <button className={`${css.addMoneyBtn} ${css.addMoneyBtnRegular}`}>Add money</button>
            <span className={css.title}>Bank Account and Cards</span>

            <BankCard cardName='Signature RBC visa' cardNumber='3234' />
            <BankCard cardName='TD Bank Debit' cardNumber='0024' />

            <a href="/" className={css.addBankCard}>
                <img src={plusIcon} className={css.linkIcon} alt="Add"/>
                Link a card or bank
            </a>
        </div>
        <div className={css.addMoneyContainer}>
            <button className={`${css.addMoneyBtn} ${css.addMoneyBtnMobile}`}>Add money</button>
        </div>
    </>)
}

export default BankAccount;