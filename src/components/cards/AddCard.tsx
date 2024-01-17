import {FC} from 'react';
import plusIcon from '../../assets/svg/plus-icon.svg'

const css = {
    container: `min-w-[256px] h-[160px] md:min-w-[280px] md:h-[176px] xl:min-w-[312px] xl:h-[196px]
                border border-add-card-border bg-add-card-bg border-r rounded-xl pt-5 pl-4`,
    addBtn:    `rounded-full bg-base-gray-color w-[40px] h-[40px] mb-6 p-[8px] block
                hover:bg-opacity-90 transition-all duration-200`,
    label:     'text-xl font-bold',
}

const AddCard: FC = () => ( 
    <div className={css.container}>
        <button className={css.addBtn}><img src={plusIcon} alt="Add"/></button>
        <span className={css.label}>Order a new card</span>
    </div>    
)
        

export default AddCard;