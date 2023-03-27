import { Link } from 'react-router-dom';
import style from './RallyCardBoard.module.css';

function RallyCardBoard({ rally }) {

    /* 랠리 일정 */
    const rallystarttime = new Date(rally.rallystarttime);

    /* 작성일 */
    const rallywritedate = new Date(rally.rallywritedate);

    /* 모집지역 */
    const rallylocation = rally.rallystartlocation.split(' ')[1];

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


    if (rally.rallystatus === 'cancel') {
        return (
            <Link to={`/rally/${rally.rallycode}`} style={{ textDecoration: 'none', color: '#202020' }}>
                <section className={`${style.category} ${style.flex_center}`}>
                    <article className={`${style.status} ${style.flex_center} ${style.cancel}`}>
                        {rallystatus()}
                    </article>
                    <div className={style.cancel}>
                        {rallytype()}
                    </div>
                    <div className={style.cancel}>{rally.rallyname}</div>
                    <div></div>
                    <div className={style.cancel}>{rallylocation}</div>
                    <div className={style.cancel}>{rallywritedate.toLocaleDateString().slice(0, -1)}</div>
                </section>
            </Link>
        );
    }

    return (
        <Link to={`/rally/${rally.rallycode}`} style={{ textDecoration: 'none', color: '#202020' }}>
            <section className={`${style.category} ${style.flex_center}`}>
                <article className={`${style.status} ${style.flex_center}`}>
                    {rallystatus()}
                </article>
                <div>
                    {rallytype()}
                </div>
                <div>{rally.rallyname}</div>
                <div>
                    <div className={style.label2}>
                        {rallystarttime.toLocaleDateString().slice(0, -1)}
                    </div>
                </div>
                <div>{rallylocation}</div>
                <div>{rallywritedate.toLocaleDateString().slice(0, -1)}</div>
            </section>
        </Link>
    );
}

export default RallyCardBoard;