import {FC} from "react"
import paymentIcon from '../../assets/svg/paiment-icon.svg'
import transferIcon from '../../assets/svg/transfer-icon.svg'

const css = {
    container:          'flex justify-between items-center border bg-white border-item-border rounded-md p-3 mb-2',
    nameContainer:      'flex items-center text-base-text-color',
    transactionName:    'text-base md:text-xl font-semibold',
    labelsContainer:    'flex flex-col text-xs md:text-base',
    iconContainer:      'w-[50px] h-[50px] rounded-full mx-2 mr-5 overflow-hidden flex justify-center items-center',
    paymentContainer:   'bg-secondary-bg',
    transferContainer:  'bg-[#F5CC82]',
    ammount:            'text-base md:text-xl font-bold',
    payment:            'text-[#4E4C47]',
    transfer:           'text-[#0F9D58]'
}

interface Props {
    name: string,
    date: string,
    type: 'payment' | 'transfer',
    amount: number
}

const Transaction: FC<Props> = ({name, date, type, amount}) => {
    return (
    <div className={css.container}>
        <div className={css.nameContainer} >
            <div className={`${css.iconContainer} ${type === 'transfer' ? css.transferContainer : css.paymentContainer}`}>
                <img src={type === 'payment' ? paymentIcon : transferIcon} alt="Payment" />
            </div>
            <div className={css.labelsContainer}>
                <span className={css.transactionName}>{name}</span>
                <span>{date}, { type === 'payment' ? "Payment" : "Transfer from bank"}</span>
            </div>
        </div>
        <div className={`${css.ammount} ${type === 'transfer' ? css.transfer : css.payment}`}>
            {type === 'payment' ? '-' : '+'}
            ${amount}
        </div>
    </div>)
}

export default Transaction;
