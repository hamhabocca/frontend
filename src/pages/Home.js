import style from './Home.module.css';
import RallCardMain from '../components/items/RallyCardMain';
import { useEffect, useState } from 'react';
import { getRallyForMain } from '../apis/RallyCalls';
import { NavLink } from 'react-router-dom';

function Home() {

    const [rallyList, setRallyList] = useState([]);

    useEffect(
        () => {
            let rallyList = [];
            rallyList = getRallyForMain();
            var sortingField = "rallycode";
            rallyList.sort(function (a, b) { // 내림차순
                return b[sortingField] - a[sortingField];
            });
            rallyList.splice(6);
            console.log(rallyList);
            setRallyList(rallyList);
        },
        []
    );

    return (
        <>
            <main>
                <label className={style.Notice}>공지사항일듯</label>
                <div className={style.NewestRallyAndMore}>
                    <h4>&gt; 최신 랠리 모집</h4>
                    <button><NavLink to='/rally'>더보기&nbsp;&nbsp; &gt;</NavLink></button>
                </div>
                <div className={style.Rallycards}>
                    {rallyList.map(rally => <RallCardMain key={'rallycode'} item={rally} />)}
                </div>
            </main>
        </>
    )
}

export default Home;