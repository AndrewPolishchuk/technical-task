import {FC} from 'react';

const css = {
    notFound: 'text-center mt-16'
}

const NoMatch: FC = () => {
    return (
        <h1 className={css.notFound}>Page not found</h1>
    );
}

export default NoMatch;