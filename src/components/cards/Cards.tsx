import {FC} from 'react';
import AddCard from './AddCard';
import Card from './Card';

//w-[340px] md:w-[720px] lg:w-[40%]
const css = {
    cardsContainer: 'flex md:w-[650px] overflow-x-auto snap-x',
    cardContainer:  'snap-center'
}

const Cards: FC = () => ( 
    <div className={css.cardsContainer}>
        <div className={css.cardContainer}>
            <Card balance={0.00} firstDigits='4588' lastDigits='0092' />
        </div>
        <div className={css.cardContainer}>
            <AddCard />
        </div>
    </div>
)
        

export default Cards;