import style from './QnAPost.module.css';

function QnAPost() {

    return (
        <main className={style.all}>

            <div>

                <div className={style.post}>
                    <div className={style.d1}>
                        <h6 className={style.member}>회원</h6>

                        <h6 className={style.postname}>제목</h6>
                    </div>

                    <div className={style.d2}>
                        <h6 className={style.writer}>멤버이름</h6>

                        <h6 className={style.date}>작성일</h6>
                    </div>
                </div>
                <hr/>
                <div className={style.contants}>
                    <div>
                        <div className={style.img}>이미지</div>
                        <br />
                        <h4>입력한 내용</h4>
                    </div>
                </div>
            </div>
            <hr />
            <div className={style.writer2}>
                <h3 className={style.nick}>닉네임</h3>
                <h4 className={style.date2}>등록일</h4>
            </div>
            <br />
            <div className={style.comment1}>
                <h2>댓글</h2>
            </div>
            <br />
            <div className={style.writer3}>
                <h3 className={style.nick2}>ㄴ 닉네임</h3>
                <h4 className={style.date3}>등록일</h4>
            </div>
            <br />
            <div className={style.comment2}>
                <h2>댓글</h2>
            </div>
            <hr />
            <br />
            <div className={style.container}>
                <textarea className={style.comment3} cols='10' rows='5' />
                <button className={style.btn} >등록</button>
            </div>
        </main>
    );
}

export default QnAPost;