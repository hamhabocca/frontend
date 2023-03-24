import style from './ReviewPost.module.css';
import ReviewSearchFilter from "../components/commons/ReviewSearchFilter";
import RallyList from "../components/lists/ReviewList";


function ReviewPost() {

    return (
        <>
            <main className={style.containerMain}>

                <section className={style.filter}>
                    <ReviewSearchFilter />
                </section>
                <hr />

                <div className={style.Main}>
                    <div className={style.title} >
                        <div className={style.labellabel}>
                            <div className={style.mini1}>랠리장</div>
                            <div className={style.mini2}>전설</div>
                            <h2>랠리팀명글자수제한</h2>
                        </div>
                        <div className={style.report}>
                            <button>신고</button>
                        </div>
                    </div>

                    <div className={style.Context}>
                        <article className={style.containerTime}>
                            <div className={style.containerTime}>
                                <div className={style.picture}>사진</div>
                                <h2 style={{ marginLeft: '10px' }}>작성자</h2>
                            </div>
                            <div className={style.container2}>
                                <h4>2023.03.22</h4>
                            </div>

                        </article>
                        <div className={style.container3}>
                            <div className={style.mainPic}> 본 랠리 게시글 사진</div>
                            <div className={style.mainContext}>
                                <h1 className={style.Kmlabel}>23Km</h1>
                                <h1 className={style.Placelabel}>광진구 우리집</h1>
                                <div className={style.container}>
                                    <div className={style.startlabel}>출발 시각</div>
                                    <h3 style={{ marginTop: '160px', marginLeft: '10px' }}>2023.03.02 AM 10:00</h3>
                                </div>
                                <div className={style.container}>
                                    <div className={style.endlabel}>예상 완주</div>
                                    <h3 style={{ marginTop: '10px', marginLeft: '10px' }}>2023.03.02 PM 14:00</h3>
                                </div>
                            </div>
                        </div>
                        <div className={style.Review}>
                            <div className={style.mainPic}> 후기사진</div>
                            <h4 style={{ margin: '10px' }}>오늘 랠리를 함 달려보았어여^^<br /><br />
                                김밥도 먹었네요 허허<br /><br />
                                @)))))))))))))))<br /><br />
                                총총,,, @/-------<br /><br />
                                사진은... 우리 랠리팀원들과 함께~~~~~~~~~~~~~<br /><br /><br />
                                <br />
                            </h4>
                        </div>
                        <br />
                        <br />
                        <hr />
                        <h2>여기에 댓글</h2>
                        <br />
                        <br />
                        <hr />
                        <br />
                        <h3>내 닉네임</h3>
                        <div className={style.container}>

                            <textarea className={style.Comment} cols = '30' rows='5' />
                            <div>
                                <button className={style.GoReview} >작성</button>
                            </div>


                        </div>




                    </div>

                </div>





            </main>
        </>
    );
}

export default ReviewPost;