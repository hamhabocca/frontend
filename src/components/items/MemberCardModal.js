import { useDispatch } from 'react-redux';
import style from './MemberCardModal.module.css';
import { callAllowParticipateByMasterAPI } from '../../apis/ParticipateAPICalls';

function MemberCardModal({ mate, masterId }) {

    const dispatch = useDispatch();

    /* 현재 사용자 */
    const token = window.localStorage.getItem("jwtToken");
    const MEMBER_ID = JSON.parse(token)?.memberId;

    const NICKNAME = mate.memberId;
    const DATE = mate.participationDate;
    const RALLY_ID = mate.rallyId;
    const MATE_ID = mate.memberId;
    const ACCEPT = mate.isAccepted;

    if(MEMBER_ID === masterId) {
        return (
            <div className={style.member}>
                <div>
                    <article>프사</article>
                </div>
                <p>{NICKNAME}번째회원(닉네임)</p>
                <p>{DATE}</p>
                <p>{ ACCEPT === 'Y'? '승인됨':<button onClick={() => dispatch(callAllowParticipateByMasterAPI({rallyId : RALLY_ID, mateId: MATE_ID}))}>승인</button>}</p>
            </div>
        );
    }

    return (
        <div className={style.member}>
            <div>
                <article>프사</article>
            </div>
            <p>{NICKNAME}번째회원(닉네임)</p>
            <p>{DATE}</p>
            <p>{ ACCEPT === 'Y'? '승인': '미승인'}</p>
        </div>
    );

};

export default MemberCardModal;