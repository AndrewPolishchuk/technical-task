import {FC} from 'react';

const css = {
    container: `flex flex-col items-start text-white space-y-6 
                min-w-[256px] h-[160px] md:min-w-[280px] md:h-[176px] xl:min-w-[312px] xl:h-[196px]
                bg-[url('./assets/images/card-bg.png')] bg-no-repeat bg-contain
                rounded-md pt-2 pl-4 cursor-pointer mr-6`,
    balance:          'text-xl font-bold',
    availableBalance: 'text-sm',
    cardNumber:       'text-base',
    inactiveBtn:      'flex font-medium text-[10px] text-card-text-color bg-secondary-bg rounded-full py-1 px-4 mt-2',
}

interface Props {
    balance: number,
    firstDigits: string,
    lastDigits: string
}

const Card: FC<Props>= ({balance, firstDigits, lastDigits}) => ( 
    <div className={css.container}>
        <button className={css.inactiveBtn}>Inactive</button>
        <div className='flex flex-col'>
            <span className={css.balance}>${balance}</span>
            <span className={css.availableBalance}>Available Balance</span>
        </div>
        <span className={css.cardNumber}>{firstDigits} •••• •••• {lastDigits}</span>
    </div>    
)
        

export default Card;