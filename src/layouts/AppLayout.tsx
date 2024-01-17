import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const css = {
    container: 'flex h-full flex-col'
}

export const AppLayout = () => {

    return(
        <div className={css.container}>
            <Header/>
            <Outlet/>
        </div>
    );
}
