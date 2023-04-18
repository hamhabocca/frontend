import style from './ReviewCardBoard.module.css';
import { Link } from 'react-router-dom';

function ReviewCardBoard({ review }) {

    /* 작성일 */
    const reviewWriteDate = new Date(review.reviewWriteDate);

    /* 랠리 상태 */
    const reviewstatus = () => {
        switch (review.reviewwritertype) {
            case "master":
                return <div className={style.label} style={{ background: '#FF7A00' }}>
                    랠리장
                </div>;
            default:
                return <div className={style.label} style={{ background: '#63AF73' }}>
                    랠리원
                </div>;
        }
    };

    /* 랠리 타입 구분 */
    const reviewtype = () => {

        const styleIpmun = {
            border: '1.5px solid #056DFA',
            color: '#056DFA'
        };

        switch (review.rallytype) {
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


    
    return (
         <Link to={`/review/${review.reviewId}`} style={{ textDecoration: 'none', color: '#202020' }}>
      
            <section className={`${style.category} ${style.flex_center}`}>
                <article className={`${style.status} ${style.flex_center}`}>
                    {/* {reviewstatus()} */}
                </article>
                <div>
                    {/* {reviewtype()} */}
                </div>
                <div>{review.reviewTitle}</div>
                <div>{review.reviewWriter}</div>
                <div>{reviewWriteDate.toLocaleDateString().slice(0, -1)}</div>
            </section>
            </Link>
    );
}

export default ReviewCardBoard;