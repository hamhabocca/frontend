import { open_CancelRecruitModal, open_CancelRecruitModal2, open_RecruitmentListModal, open_RecruitModal, open_ReportModal } from "../modules/ModalsModule";
import ModalCurrentRecruitList from "../components/modals/ModalCurrentRecruitList";
import ModalRallyPartcipate from "../components/modals/ModalRallyPartcipate";
import ModalRallyCancel from "../components/modals/ModalRallyCancel";
import ModalRallyRecruitmentCancel from "../components/modals/ModalRallyRecruitmentCancel";
import ModalReport from "../components/modals/ModalReport";

import style from "./RallyPost.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import SearchFilter from "../components/commons/SearchFilter";
import { callModifyRallyAPI, callRallyDetailAPI } from "../apis/RallyAPICalls";
import { callParticipateListAPI } from "../apis/ParticipateAPICalls";

function RallyPost() {

    const dispatch = useDispatch();
    const { rallyCode } = useParams(); // :rallyCode
    const rally = useSelector(state => state.rallyReducer);
    const mateList = useSelector(state => state.participateReducer);

    // 모달창...
    const recruitmentListState = useSelector(state => state.modalsReducer.recruitmentListState);
    const recruitState = useSelector(state => state.modalsReducer.recruitState);
    const cancelRecruitState = useSelector(state => state.modalsReducer.cancelRecruitState);
    const cancelRecruitState2 = useSelector(state => state.modalsReducer.cancelRecruitState2);
    const reportState = useSelector(state => state.modalsReducer.reportState);

    // 상태변경
    const onClickRallyStatusUpdateHandler = (status) => {

        console.log("상태변경핸들러 클릭함");

        const formData = new FormData();
        formData.append("rallyStatus", status);

        dispatch(callModifyRallyAPI({
            form: formData,
            rallyId: rallyCode
        }));

    }

    useEffect(
        () => {
            dispatch(callRallyDetailAPI({ rallyId: rallyCode }));
            dispatch(callParticipateListAPI({ rallyId: rallyCode }));
        }, []
    );

    /* 현재 사용자 */
    const MEMBER_ID = 44;   //임시...

    /* 랠리팀명 */
    const RALLY_NAME = rally.rallyName;

    /* 랠리마스터(작성자) 아이디 */
    const MASTER_ID = rally.masterId;

    /* 랠리 상태 */
    const RALLY_STATUS = rally.rallyStatus;

    /* 랠리 타입 */
    const RALLY_TYPE = rally.rallyType;

    /* 랠리 일정 */
    const RALLY_DATE = rally.rallyDate;

    /* 모집지역 */
    const RALLY_LOCATION = rally.rallyLocation;

    /* 도착지역 */
    const RALLY_END_LOCATION = rally.rallyEndLocation;

    /* 랠리 거리 */
    const RALLY_DISTANCE = rally.rallyDistance;

    /* 랠리 최소 인원 */
    const RALLY_MINIMUM = rally.rallyMinimum;

    /* 랠리 최대 인원 */
    const RALLY_MAXIMUM = rally.rallyMaximum;

    /* 랠리 상세 작성란 */
    const RALLY_DETAIL = rally.rallyDetail;

    /* 작성일 */
    const RALLY_WRITE_DATE = rally.rallyWriteDate;


    /* 랠리 상태 */
    function RallyStatus() {
        switch (RALLY_STATUS) {
            case "모집완료":
                return <div style={{ background: '#FF7A00' }}>모집완료</div>;
            case "완주!":
                return <div style={{ background: '#056DFA' }}>완주!</div>;
            case "취소됨":
                return <div style={{ background: '#D9D9D9', color: 'black' }}>랠리취소</div>;
            default:
                return <div style={{ background: '#63AF73' }}>모집중</div>;
        }
    }

    /* 랠리 타입 구분 */
    function RallyType() {
        switch (RALLY_TYPE) {
            case "초보":
                return <div style={{ background: '#60A3FF' }}>초보</div>;
            case "중수":
                return <div style={{ background: '#056DFA' }}>중수</div>;
            case "고수":
                return <div style={{ background: '#0E4288' }}>고수</div>;
            case "전설":
                return <div style={{ background: '#303030' }}>전설</div>;
            default:
                return <div style={{ border: '1.5px solid #056DFA', color: '#056DFA' }}>입문</div>;
        }
    };

    /* 게시글 상단 버튼 */
    function PostSet() {

        // 작성자일 때
        if (MEMBER_ID === MASTER_ID) {

            switch (RALLY_STATUS) {
                case "완주!":
                    return (<button className={style.edit}>수정</button>);

                case "취소됨":
                    return (<></>);
                default:
                    return (
                        <>
                            <button onClick={() => { dispatch(open_CancelRecruitModal2()); }} className={style.report}>랠리취소</button>
                            {cancelRecruitState2 && <ModalRallyRecruitmentCancel rallyId={rallyCode} />}
                            <button className={style.edit}>수정</button>
                        </>
                    );
            }
        }

        // 작성자가 아닐 때
        return (
            <>
                <button onClick={() => { dispatch(open_ReportModal()) }} className={style.edit}>신고</button>
                {reportState && <ModalReport />}
            </>
        );
    };

    /* 랠리 신청 이벤트 */
    const rallybutton = () => {

        /* 작성자일때 */
        if (MEMBER_ID === MASTER_ID) {

            switch (RALLY_STATUS) {
                case "모집중":
                    return (
                        <>
                            <button onClick={() => { dispatch(open_RecruitmentListModal()) }}>신청 현황</button>
                            {recruitmentListState && <ModalCurrentRecruitList rally={rally} />}
                            <button style={{ background: '#056DFA' }} onClick={() => { onClickRallyStatusUpdateHandler("모집완료") }}>모집 마감</button>
                        </>
                    );
                case "모집완료":
                    return (
                        <button className={style.done} onClick={() => { onClickRallyStatusUpdateHandler("완주!") }}>랠리 완주!</button>
                    );
                default:
                    return (
                        <>
                            <button onClick={() => { dispatch(open_RecruitmentListModal()) }}>신청 현황</button>
                            {recruitmentListState && <ModalCurrentRecruitList rally={rally} />}
                        </>
                    );
            }

        }

        /* 다른 회원일때 */
        if (RALLY_STATUS === '모집중' || RALLY_STATUS === '모집완료') {
            
            let result = mateList.filter(mate => mate.memberId == MEMBER_ID)[0]
            
            // 신청함
            if(result != undefined) {
                return (
                    <>
                        <button onClick={() => { dispatch(open_RecruitmentListModal()) }}>신청 현황</button>
                        {recruitmentListState && <ModalCurrentRecruitList rally={rally} />}
                        <button onClick={() => { dispatch(open_CancelRecruitModal()) }} style={{ background: '#056DFA' }}>신청 취소</button>
                        {cancelRecruitState && <ModalRallyCancel rallyId={rallyCode}/>}
                    </>
                );
            }

            // 미신청
            return (
                <>
                    <button onClick={() => { dispatch(open_RecruitmentListModal()) }}>신청 현황</button>
                    {recruitmentListState && <ModalCurrentRecruitList rally={rally} />}
                    <button onClick={() => { dispatch(open_RecruitModal()) }} style={{ background: '#056DFA' }}>랠리 신청</button>
                    {recruitState && <ModalRallyPartcipate rallyId={rallyCode}/>}

                </>
            );

        }

    }

    return (
        <main className={style.container}>
            <SearchFilter />
            <section className={style.board}>
                <article className={style.title}>
                    <div className={style.label}><RallyStatus /></div>
                    <div className={style.label}><RallyType /></div>
                    <div className={style.rallyname}>{RALLY_NAME}</div>
                    <div className={style.postStatus}><PostSet /></div>
                </article>
                <article className={style.writer}>
                    <div>
                        <div className={style.writerImg}>프사</div>
                        <h4>{MASTER_ID}번</h4>
                    </div>
                    <p>{RALLY_WRITE_DATE}</p>
                </article>
                <article className={style.rallyinfo}>
                    <div className={style.map}>맵</div>
                    <div className={style.info}>
                        <div className={style.location}>
                            <h2>{RALLY_DISTANCE}km</h2>
                            <h4>출발지</h4>
                            <h3>{RALLY_LOCATION}</h3>
                            <h4>도착지</h4>
                            <h3>{RALLY_END_LOCATION}</h3>
                        </div>
                        <div>
                            <div className={style.time}>
                                <div className={style.datelabel}>출발 시각</div>
                                <p>{RALLY_DATE}</p>
                            </div>
                            <div className={style.time}>
                                <div className={style.datelabel}>모집 인원</div>
                                <p>최소 {RALLY_MINIMUM || 0}명 ~ 최대 {RALLY_MAXIMUM || '4'}명</p>
                            </div>
                        </div>
                        <div className={style.rallyStatus}>{rallybutton()}</div>
                    </div>
                </article>
                <article className={style.rallydetail}>
                    {RALLY_DETAIL}
                </article>


                <article className={style.comments}>
                    <div className={style.commentList}></div>
                    <div className={style.mycomment}>
                        <h5>내 닉네임</h5>
                        <div className={style.mention}>
                            <textarea />
                            <button>등록</button>
                        </div>
                    </div>
                </article>

            </section>
        </main>
    );
}

export default RallyPost;