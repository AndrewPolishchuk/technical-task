import {FC} from 'react';

interface Props {
    cardName: string,
    cardNumber: string,
}

const css = {
    bankAccountCard: 'border border-item-border bg-bank-account-bg rounded-md text-base-text-color px-2 py-1.5 mb-3.5',
}

const BankCard: FC<Props> = ({cardName, cardNumber}) => ( 
    <div className={css.bankAccountCard}>{cardName} ( ****{cardNumber})</div>
)
        

export default BankCard;