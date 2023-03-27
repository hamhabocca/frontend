import style from "./WriteQnA.module.css"

function WriteQnA() {

    return (

        <main className={style.all}>

            <div className={style.title}>
                <h1>건의 게시글 작성</h1>
                <br />
                <hr />
            </div>
            <br />
            <div className={style.contents}>

                <div className={style.cg}>
                    <label>카테고리</label>
                    <select className={style.dropdownbox}>
                        <option>선택</option>
                    </select>
                </div>
                <br />
                <div className={style.tit}>
                    <label>제목</label>
                    <input className={style.titfield} type="text" size="50" name="title" />
                </div>
                <br />
                <div className={style.conTextarea}>
                    <label className={style.labelarea}>내용</label>

                    <textarea className={style.textfield} cols="700" rows="230"></textarea>

                </div>
                <div className={style.fileImg}>
                    <label>파일첨부</label>
                    
                    <input className={style.filearea} type="file" name="uploadFile"/>

                    
                </div>

            </div>
            <br />
            <hr />
            <article className={style.btn}>
                <button>등록</button>
            </article>

            <br />
           
        </main>
    );
}

export default WriteQnA;