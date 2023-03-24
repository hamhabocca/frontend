import style from "./QnABoard.module.css"

function QnABoard() {

    return (

        <main className={style.all}>

            <div className={style.search}>
                <select className={style.dropdownbox}>
                    <option>카테고리</option>
                </select>
                <form className={style.input}>
                    <input className={style.searchfield} type="text" size="50" name="search" />
                    <input className={style.searchbtn} type="submit" value="검색" />
                </form>
            </div>

            <div className={style.board}>
                <h1>건의 게시판</h1>
                <br />
                <hr />
                <div className={style.cg}>
                    <div className={style.d1}>
                        <select className={style.cgselect}>
                            <option>카테고리</option>
                        </select>

                        <h6 className={style.postname}>제목</h6>
                    </div>

                    <div className={style.d2}>
                        <h6 className={style.writer}>작성자</h6>

                        <h6 className={style.date}>작성일</h6>
                    </div>
                </div>

                <div className={style.list}>

                </div>
            </div>

            <article className={style.btn}>
                <button>작성</button>
            </article>

            <div className={style.pageNumber}>

                <h3> 페이지 넘버</h3>

            </div>
            <br />
            <hr />

        </main>

    );
}

export default QnABoard;

