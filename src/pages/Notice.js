import { Navigate } from 'react-router-dom';
import { checkLoginStatusAPICalls } from '../apis/CheckLoginStatusAPICalls';
import { getMembers } from '../apis/MemberAPICalls';
import style from './Notice.module.css';

function Notice() {

    if(checkLoginStatusAPICalls()) {

        alert("test");

        return <Navigate replace to={"/"}/>
    }

    return (
        <main className={style.main}>
            <div className={style.container}>
                <div className={style.header}>
                <h2>Notice</h2>
                </div>
                <article className={style.category}>
                    <h4>최초작성일</h4>
                    <div>최종수정일</div>
                </article>
            </div>
        </main>
    );
}

export default Notice;