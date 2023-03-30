import { Link } from 'react-router-dom';
import style from './QnACardBoard.module.css';

function QnACardBoard({ qna }) {

    /* 작성일 */
    const qnawritedate = new Date(qna.qnawritedate);

    /* 건의 상태 */
    const qnastatus = () => {
        switch (qna.qnastatus) {
            case "member":
                return <div className={style.label} style={{ background: '#7D7D7D' }}>
                    건의
                </div>;
            case "rally":
                return <div className={style.label} style={{ background: '#7D7D7D', color: 'black' }}>
                    랠리
                </div>;
            default:
                return <div className={style.label} style={{ background: '#7D7D7D' }}>
                    건의
                </div>;
        }
    };

    return (
        <Link to={`/qna/${qna.qnacode}`} style={{ textDecoration: 'none', color: '#202020' }}>


            <div className={style.cg}>

                <div className={style.cgselect}>
                    {qnastatus()}
                </div>
                <div>
                    <h6 className={style.postname}>{qna.qnatitle}</h6>
                </div>
                <div>
                    <h6 className={style.writer}>{qna.qnawriter}</h6>
                </div>
                <div className={style.date}>
                    <h6>{qnawritedate.toLocaleDateString().slice(0, -1)}</h6>
                </div>
            </div>
        </Link>
    );
}

export default QnACardBoard;