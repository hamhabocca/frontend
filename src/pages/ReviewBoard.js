import ReviewSearchFilter from "../components/commons/ReviewSearchFilter";
import RallyList from "../components/lists/ReviewList";
import style from "./ReviewBoard.module.css";

function ReviewBoard() {

    return (
        <main className={style.container}>
            <section className={style.filter}>
                <ReviewSearchFilter />
            </section>

            <section className={style.board}>
                <article className={style.title}>
                    <h1>랠리 후기</h1>
                </article>

                <article className={style.category}>
                    <select className={style.select}>
                        <option>전체</option>
                        <option>모집중</option>
                        <option>모집마감</option>
                        <option>취소됨</option>
                        <option>완주!</option>
                    </select>
                    <div>타입</div>
                    <div>랠리명</div>
                    <div>랠리일정</div>
                    <div>지역</div>
                    <div>작성일</div>
                </article>

                <article className={style.list}>
                    <RallyList />
                </article>
                
            </section>
        </main>
    );
}

export default ReviewBoard;