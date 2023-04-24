import style from './Home.module.css';
import RallCardMain from '../components/items/RallyCardMain';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { callRallyListAPI } from '../apis/RallyAPICalls';
import { getCurrentMember } from '../apis/MemberAPICalls';
import ModalNickname from '../components/modals/ModalNickname';

function Home() {

    const dispatch = useDispatch();
    const rallies = useSelector((state) => state.rallyReducer);
    const rallyList = rallies?.rallyList?.content?.filter(rally => rally.rallyStatus != '취소됨').slice(0, 6);
    const pageInfo = rallies?.paging;

    const isOpen = useSelector(state => state.modalsReducer.nicknameState);

    const [currentPage, setCurrentPage] = useState(1);

    console.log(rallyList);

    function toNotice() {
        window.location.replace("/notice");
    }

    useEffect(
        () => {
            if(window.localStorage.getItem('jwtToken')) {
                dispatch(getCurrentMember());
            }
            dispatch(callRallyListAPI({currentPage : currentPage}));
        },
        []
    );

    return (
        <>
            <main>
                <label className={style.Notice} onClick={toNotice}>공지사항일듯</label>
                <div className={style.NewestRallyAndMore}>
                    <h4>&gt; 최신 랠리 모집</h4>
                    <button><Link to='/rally'>더보기&nbsp;&nbsp; &gt;</Link></button>
                </div>
                <div className={style.Rallycards}>
                    {Array.isArray(rallyList) && rallyList.map(rally => <RallCardMain key={rally.rallyId} rally={rally} />)}
                </div>
                {isOpen && <ModalNickname/>}
            </main>
        </>
    )
}

export default Home;