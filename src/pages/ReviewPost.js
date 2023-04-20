import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ReviewSearchFilter from "../components/commons/ReviewSearchFilter";
import style from './ReviewPost.module.css';

import { OPEN_REPORT } from '../modules/ModalsModule';
import { callReviewDetailAPI } from "../apis/ReviewAPICalls";
import { useDispatch, useSelector } from "react-redux";
import ModalReport from "../components/modals/ModalReport";
import { Link } from 'react-router-dom';


function ReviewPost() {

    const dispatch = useDispatch();
    const { reviewId } = useParams();
    const review = useSelector(state => state.reviewReducer);
    const testDetail = review.testDetail;

    // const [review, setReview] = useState({});
    // const [rally, setRally] = useState({});

    /*모달*/ 
    const reportState = useSelector(state => state.modalsReducer.reportState);

    useEffect(
        () => {
            console.log('[testDetail] reviewId :', testDetail);
            console.log("리뷰 디테일");
            // const temp = getReviewDetail(review); 
            // setReview(temp);
    
            dispatch(callReviewDetailAPI({reviewId: reviewId}));

            // setRally(getRallyDetail(temp.rallyId));
        }
        ,[]
    );


    const REVIEW_ID = review.reviewId;

    const REVIEW_TITLE = review.reviewTitle;

    /* 리뷰 작성 일자 */
    const REVIEW_WRITE_DATE = new Date(review.reviewWriteDate);

    /* 리뷰 작성자 */
    const REVIEW_WRITER = review.reviewWriter;

    /* 리뷰 상세 내용 */
    const REVIEW_DETAIL = review.reviewDetail;

    // const writedate = new Date(review.reviewWriteDate);
    // const rallystarttime = new Date(rally.rallystarttime);
    // const rallyendtime = new Date(rally.rallyendtime);


    /* 작성자일 때 */
    const postSet = () => {

        if (review.reviewId === 1) {
            return <Link to = {`/review/${review.reviewId}/edit`}>
            <button className={style.edit}>수정</button>
            </Link>

        // } else if (review.reivewId === 2 && rally.rallystatus === 'in_process') {
        
    /* 작성자가 아닐 때 */
    } else if(!(review.reviewId === 1)){

            return (
                <div className={style.postStatus}>
                    <button className={style.edit} onClick={() => { dispatch({type: OPEN_REPORT }) }}>신고</button>
                    {reportState && <ModalReport/>}
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
                            {/* <div className={style.mini1}>{review.reviewWriterType}</div> */}
                            {/* <div className={style.mini2}>{review.rallytype}</div> */}
                            {/* <h2>{rally.rallyname}</h2> */}
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
                                <h2 style={{ marginLeft: '10px' }}>{REVIEW_WRITER}</h2>
                            </div>
                            <div className={style.container2}>
                                <h4>{REVIEW_WRITE_DATE.toLocaleString()}</h4>
                            </div>

                        </article>
                        <div className={style.container3}>
                            <div className={style.mainPic}> 본 랠리 게시글 사진</div>
                            <div className={style.mainContext}>
                                {/* <h1 className={style.Kmlabel}>{rally.rallydistance}Km</h1> */}
                                {/* <h3 className={style.Placelabel}>{rally.rallystartlocation}</h3> */}
                                <div className={style.container}>
                                    <div className={style.startlabel}>출발 시각</div>
                                    {/* <h3 style={{ marginTop: '160px', marginLeft: '10px' }}>{rallystarttime.toLocaleString()}</h3> */}
                                </div>
                                <div className={style.container}>
                                    <div className={style.endlabel}>예상 완주</div>
                                    {/* <h3 style={{ marginTop: '10px', marginLeft: '10px' }}>{rallyendtime.toLocaleString()}</h3> */}
                                </div>
                            </div>
                        </div>
                        <div className={style.Review}>
                            <div className={style.mainPic}> 후기사진</div>
                            <h4 style={{ margin: '10px' }}>{REVIEW_DETAIL}<br /><br /></h4>
                        </div>
                        <br />
                        <br />
                        <hr />
                        <h2>여기에 댓글</h2>
                        <br />
                        <br />
                        <hr />
                        <br />
                        <h3>{REVIEW_WRITER}</h3>
                        <div className={style.container}>

                            <textarea className={style.Comment} cols='30' rows='5' />
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