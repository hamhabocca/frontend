import { useEffect, useState } from 'react';
import RallyCardMyPage from '../items/RallyCardMyPage';
import style from './MyPageList.module.css';

function MyPageList({typeOfList, membercode}) {

    const [currentRecruit, setCurrentRecruit] = useState([]);

    useEffect(
        () => {
        },
        []
    )

    if(typeOfList == '모집') {

        return (
            <section className={style.Container}>
                <h3>랠리 모집 내역</h3>
                <h4>현재 진행 중인 랠리</h4>
                <div className={style.RallyContainer}>
                    {currentRecruit.map(rally => <RallyCardMyPage key={rally.rallycode} rally={rally} typeOfList={'currentRecruit'}/>)}
                </div>
                <h4>과거 랠리</h4>
                <div className={style.RallyContainer}>
                    {/* <RallyCardMyPage /> */}
                </div>
            </section>
        )
    }
}

export default MyPageList;

// { rallyPosts.map(rally => <RallyCardBoard key={ rally.rallycode } rally={ rally }/>) }