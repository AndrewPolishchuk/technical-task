import {FC, PropsWithChildren} from 'react';

interface Props extends PropsWithChildren<any> {
    condition: boolean,
} 

const If: FC<Props> = ({children, condition}) => {
    return (
        condition ? children : <></>
    );
}

export default If;