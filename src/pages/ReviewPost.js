import { getReviewDetail } from '../apis/ReviewAPICalls';
import { getRallyDetail } from '../apis/RallyAPICalls';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import style from './ReviewPost.module.css';
import ReviewSearchFilter from "../components/commons/ReviewSearchFilter";
import RallyList from "../components/lists/ReviewList";
import { async } from 'q';


function ReviewPost() {

    const { reviewCode} = useParams();

    console.log(reviewCode);

    const [review, setReview] = useState({});

    const [rally, setRally] = useState({});

    useEffect(
        () => {
            const temp = getReviewDetail(reviewCode);
            setReview(temp);
            
            setRally(getRallyDetail(temp.rallycode));

        }, []
    );


    const writedate = new Date(review.reviewwritedate);
    const rallystarttime = new Date(rally.rallystarttime);
    const rallyendtime = new Date(rally.rallyendtime);



    const postSet = () => {

        if (review.reviewcode === 8) {
            return <button className={style.edit}>수정</button>;

        } else if (review.reivewcode === 7 && rally.rallystatus === 'in_process') {

            return (
                <div className={style.postStatus}>
                    <button className={style.edit}>신고</button>
                </div>
            );
        } else {
            return (
                <div className={style.postStatus}>
                    <button className={style.edit}>신고</button>
                </div>
            );
        }
    }



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
                            <div className={style.mini1}>{review.reviewwritertype}</div>
                            <div className={style.mini2}>{review.rallytype}</div>
                            <h2>{rally.rallyname}</h2>
                        </div>
                        <div className={style.postStatus}>
                        <div className={style.report}>
                            {postSet()}
                        </div>
                        </div>
                    </div>

                    <div className={style.Context}>
                        <article className={style.containerTime}>
                            <div className={style.containerTime}>
                                <div className={style.picture}>사진</div>
                                <h2 style={{ marginLeft: '10px' }}>{review.reviewwriter}</h2>
                            </div>
                            <div className={style.container2}>
                                <h4>{writedate.toLocaleString()}</h4>
                            </div>

                        </article>
                        <div className={style.container3}>
                            <div className={style.mainPic}> 본 랠리 게시글 사진</div>
                            <div className={style.mainContext}>
                                <h1 className={style.Kmlabel}>{rally.rallydistance}Km</h1>
                                <h3 className={style.Placelabel}>{rally.rallystartlocation}</h3>
                                <div className={style.container}>
                                    <div className={style.startlabel}>출발 시각</div>
                                    <h3 style={{ marginTop: '160px', marginLeft: '10px' }}>{rallystarttime.toLocaleString()}</h3>
                                </div>
                                <div className={style.container}>
                                    <div className={style.endlabel}>예상 완주</div>
                                    <h3 style={{ marginTop: '10px', marginLeft: '10px' }}>{rallyendtime.toLocaleString()}</h3>
                                </div>
                            </div>
                        </div>
                        <div className={style.Review}>
                            <div className={style.mainPic}> 후기사진</div>
                            <h4 style={{ margin: '10px' }}>{review.reviewdetail}<br /><br />

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