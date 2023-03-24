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

                <article className={style.list}>
                    <RallyList />
                </article>

            </section>
 
        </main>
    );
}

export default ReviewBoard;