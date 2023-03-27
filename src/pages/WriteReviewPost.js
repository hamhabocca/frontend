import ReviewSearchFilter from "../components/commons/ReviewSearchFilter";
import RallyList from "../components/lists/RallyList";
import style from "./WriteReviewPost.module.css";

function WriteReviewPost() {

    return (
        <main className={style.container}>
            <section className={style.filter}>
                <ReviewSearchFilter />
            </section>

            <section className={style.board}>

                <article className={style.title}>
                    <div>
                        <h1>랠리 후기 작성</h1>
                    </div>
                    <div className={style.report}>
                        <button>등록</button>
                    </div>
                </article>
                <div className={style.MainContainer}>
                    <article className={style.rallydate2}>
                        <h4>랠리 일정</h4>
                        <br />
                        <input type="date" min="2023-01" max="2023-12" name='rallydate' />
                    </article>
                    <br />
                    <div className={style.textBoard}>
                        <div className={style.imageGo}>
                            <button>이미지 등록</button>
                        </div>
                        <br />
                        <br />
                        <hr />
                    </div>
                </div>
            </section>
        </main>
    );
}
export default WriteReviewPost;