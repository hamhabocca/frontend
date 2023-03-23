import { Outlet } from 'react-router-dom';
import Manuber from '../components/commons/Menubar';

function BoardLayout() {

    return (
        <>  
            <Manuber/>
            <Outlet/>
        </>
    );
}

export default BoardLayout;