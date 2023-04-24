import style from './Home.module.css';
import RallCardMain from '../components/items/RallyCardMain';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { callRallyListAPI } from '../apis/RallyAPICalls';

function Home() {

    const dispatch = useDispatch();
    const rallies = useSelector((state) => state.rallyReducer);
    const rallyList = rallies?.rallyList?.content?.filter(rally => rally.rallyStatus != '취소됨').slice(0, 6);
    const pageInfo = rallies?.paging;

    const [currentPage, setCurrentPage] = useState(1);

    console.log(rallyList);

    function toNotice() {
        window.location.replace("/notice");
    }

    useEffect(
        () => {
            dispatch(callRallyListAPI({currentPage : currentPage}));
        },
        []
    );

    return (
        <>
            <main>
                <div className={style.Notice} onClick={toNotice}></div>
                <div className={style.NewestRallyAndMore}>
                    <h4>&gt; 최신 랠리 모집</h4>
                    <button><Link to='/rally'>더보기&nbsp;&nbsp; &gt;</Link></button>
                </div>
                <div className={style.Rallycards}>
                    {Array.isArray(rallyList) && rallyList.map(rally => <RallCardMain key={rally.rallyId} rally={rally} />)}
                </div>
            </main>
        </>
    )
}

export default Home;