import style from './HomeLogin.module.css';
import RallCardMain from '../components/items/RallyCardMain';
import { useEffect, useState } from 'react';
import { getRallyList } from '../apis/RallyAPICalls';
import { NavLink, json } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Home() {

    const [rallyList, setRallyList] = useState([]);

    const loginStatus = useSelector(state => state.memberReducer)

    if(loginStatus) {
        
    }
    
    useEffect(
        async () => {
            setRallyList(getRallyList().slice(0, 6));
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