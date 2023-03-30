import { getRallyDetail } from "../apis/RallyAPICalls";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./RallyPost.module.css";
import SearchFilter from "../components/commons/SearchFilter";
import CurrentRecruitList from '../components/modals/CurrentRecruitList';

function RallyPost() {

    // :rallyCode
    const { rallyCode } = useParams();

    const [rally, setRally] = useState({});

    const [listIsOpen, setListIsOpen] = useState(false);

    useEffect(
        () => {
            setRally(getRallyDetail(rallyCode));
        }, []
    );

    /* 랠리 상태 */
    const rallystatus = () => {
        switch (rally.rallystatus) {
            case "ready":
                return <div className={style.label} style={{ background: '#FF7A00' }}>
                    모집마감
                </div>;
            case "done":
                return <div className={style.label} style={{ background: '#056DFA' }}>
                    완주!
                </div>;
            case "cancel":
                return <div className={style.label} style={{ background: '#D9D9D9', color: 'black' }}>
                    랠리취소
                </div>;
            default:
                return <div className={style.label} style={{ background: '#63AF73' }}>
                    모집중
                </div>;
        }
    };

    /* 랠리 타입 구분 */
    const rallytype = () => {

        const styleIpmun = {
            border: '1.5px solid #056DFA',
            color: '#056DFA'
        };

        switch (rally.rallytype) {
            default:
                return <div className={style.label} style={styleIpmun}>입문</div>;
            case "초보":
                return <div className={style.label} style={{ background: '#60A3FF' }}>초보</div>;
            case "중수":
                return <div className={style.label} style={{ background: '#056DFA' }}>중수</div>;
            case "고수":
                return <div className={style.label} style={{ background: '#0E4288' }}>고수</div>;
            case "전설":
                return <div className={style.label} style={{ background: '#303030' }}>전설</div>;
        }
    };

    const postSet = () => {

        if (rally.rallycode === 28) {
            return <button className={style.edit}>신고</button>;

        } else if (rally.rallycode === 29 && rally.rallystatus === 'in_process') {

            return (
                <div className={style.postStatus}>
                    <button className={style.report}>모집취소</button>
                    <button className={style.edit}>수정</button>
                </div>
            );
        } else {
            return (
                <div className={style.postStatus}>
                    <button className={style.edit}>수정</button>
                </div>
            );
        }
    }

    const rallybutton = () => {

        if (rally.rallycode === 29) { /* 작성자일때 */
            if (rally.rallystatus === 'ready') {

                return (
                    <>
                        <button>신청 현황</button>
                        <button style={{ background: '#056DFA' }}>모집 마감</button>
                    </>
                );

            } else if (rally.rallystatus === 'in_process') {

                return (
                    <>
                        <button className={style.done}>랠리 완주!</button>
                    </>
                );
            }
        } else { /* 다른회원일때 */
            if (rally.rallystatus === 'in_process') {
                return (
                    <>
                        <button onClick={ () => { setListIsOpen(true) } }>신청 현황</button>
                        {listIsOpen && <CurrentRecruitList/>}
                        
                        <button style={{ background: '#056DFA' }}>랠리 신청</button>
                    </>
                );
            } else if (rally.rallystatus) {

                return (
                    <>
                        <button onClick={ () => { setListIsOpen(true) } }>신청 현황</button>
                        <button style={{ background: '#056DFA' }}>신청 취소</button>
                    </>
                );
            }
        }

    }

    const writedate = new Date(rally.rallywritedate);
    const rallystarttime = new Date(rally.rallystarttime);
    const rallyendtime = new Date(rally.rallyendtime);

    return (
        <main className={style.container}>
            <SearchFilter />
            <section className={style.board}>
                <article className={style.title}>
                    <div>{rallystatus()}</div>
                    <div>{rallytype()}</div>
                    <div className={style.rallyname}>{rally.rallyname}</div>
                    <div className={style.postStatus}>{postSet()}</div>
                </article>
                <article className={style.writer}>
                    <div>
                        <div className={style.writerImg}></div>
                        <h4>{rally.rallymaster}</h4>
                    </div>
                    <p>{writedate.toLocaleString()}</p>
                </article>
                <article className={style.rallyinfo}>
                    <div className={style.map}>맵</div>
                    <div className={style.info}>
                        <div className={style.location}>
                            <h2>{rally.rallydistance}km</h2>
                            <h3>{rally.rallystartlocation}</h3>
                            <h4>상세지역</h4>
                        </div>
                        <div>
                            <div className={style.time}>
                                <div className={style.datelabel}>출발 시각</div>
                                <p>{rallystarttime.toLocaleString()}</p>
                            </div>
                            <div className={style.time}>
                                <div className={style.datelabel}>예상 완주</div>
                                <p>{rallyendtime.toLocaleString()}</p>
                            </div>
                        </div>
                        <div className={style.rallyStatus}>{rallybutton()}</div>
                    </div>
                </article>
                <article className={style.rallydetail}>
                    {rally.rallydetail}
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