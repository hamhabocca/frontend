import { Link } from 'react-router-dom';
import style from './ReviewCardBoard.module.css';

function ReviewCardBoard({ review }) {

    /* 랠리 일정 */
    // const reviewstarttime = new Date(review.reviewstarttime);

    /* 작성일 */
    const reviewwritedate = new Date(review.reviewwritedate);

    /* 모집지역 */
    // const reviewlocation = review.reviewstartlocation.split(' ')[1];

    /* 랠리 상태 */
    const reviewstatus = () => {
        switch (review.reviewstatus) {
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
    const reviewtype = () => {

        const styleIpmun = {
            border: '1.5px solid #056DFA',
            color: '#056DFA'
        };

        switch (review.reviewtype) {
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


    if (review.reviewstatus === 'cancel') {
        return (
            <Link to={`/review/${review.reviewcode}`} style={{ textDecoration: 'none', color: '#202020' }}>
                <section className={`${style.category} ${style.flex_center}`}>
                    <article className={`${style.status} ${style.flex_center} ${style.cancel}`}>
                        {reviewstatus()}
                    </article>
                    <div className={style.cancel}>
                        {reviewtype()}
                    </div>
                    <div className={style.cancel}>{review.reviewname}</div>
                    <div></div>
                    {/* <div className={style.cancel}>{reviewlocation}</div> */}
                    <div className={style.cancel}>{reviewwritedate.toLocaleDateString().slice(0, -1)}</div>
                </section>
            </Link>
        );
    }

    return (
        <Link to={`/review/${review.reviewcode}`} style={{ textDecoration: 'none', color: '#202020' }}>
            <section className={`${style.category} ${style.flex_center}`}>
                <article className={`${style.status} ${style.flex_center}`}>
                    {reviewstatus()}
                </article>
                <div>
                    {reviewtype()}
                </div>
                <div>{review.reviewname}</div>
                <div>{review.reviewwriter}</div>
                <div>
                    {/* <div className={style.label2}>
                        {reviewstarttime.toLocaleDateString().slice(0, -1)}
                    </div> */}
                </div>
                {/* <div>{reviewlocation}</div> */}
                <div>{reviewwritedate.toLocaleDateString().slice(0, -1)}</div>
            </section>
        </Link>
    );
}

export default ReviewCardBoard;