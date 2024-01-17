import {FC} from 'react';
import accountBalanceIcon from '../../assets/svg/account-balance.svg'

const css = {
    container: 'w-[200px] h-[130px] bg-account-balance-color bg-opacity-15 border border-account-balance-color border-r rounded-md p-4',
    balance:   'text-lg md:text-xl font-semibold base-text-color',
    icon:      'mb-2'
}

const AccountBalnce: FC = () => {
    return ( 
    <div className={css.container}>
        <img src={accountBalanceIcon} className={css.icon} alt="Account Balance" />
        <span className={css.balance}>$191.00</span>
    </div>)
}

export default AccountBalnce;