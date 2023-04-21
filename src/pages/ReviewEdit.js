import ReviewSearchFilter from "../components/commons/ReviewSearchFilter";
import style from "./ReviewEdit.module.css";
import React, { useRef } from "react";
import { callReviewDetailAPI, callReviewUpdateAPI } from "../apis/ReviewAPICalls";
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";


function WriteReviewPost() {
    const imageInput = useRef();
    const onCickImageUpload = () => {
        imageInput.current.click();
    };
    const dispatch = useDispatch();

    const { reviewId } = useParams();

    const review = useSelector(state => state.reviewReducer);

    console.log("review : " + JSON.stringify(review));

    const testDetail = review.data;
    const [form, setForm] = useState({
        reviewId: review.reviewId,
        reviewTitle: review.reviewTitle,
        reviewDetail: review.reviewDetail
    });

    useEffect(
        () => {
            console.log('[testDetail] reviewId :', testDetail);
            console.log("리뷰 디테일");
            dispatch(callReviewDetailAPI({ reviewId: reviewId }));
        }
        , []
    );

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };


    const onClickReviewUpdateHandler = () => {

        const formData = new FormData();

        formData.append("reviewId", form.reviewId);
        formData.append("reviewTitle", form.reviewTitle);
        formData.append("reviewDetail", form.reviewDetail);

        dispatch(callReviewUpdateAPI({	// 리뷰 정보 업데이트
            form: formData,
            reviewId: form.reviewId
        }));
    }

    /* 리뷰 작성자 */
    const REVIEW_WRITER = review.reviewWriter;

    /* 리뷰 상세 내용 */
    const REVIEW_DETAIL = review.reviewDetail;

    /* 리뷰 제목 */
    const REVIEW_TITLE = review.reviewTitle;



    return (
        <main className={style.container}>
            <section className={style.filter}>
                <ReviewSearchFilter />
            </section>

            <section className={style.board}>

                <article className={style.title}>
                    <div>
                        <h1>랠리 후기 수정</h1>
                    </div>
                    <div className={style.report}>
                        <Link to={`/review/${review.reviewId}`} style={{ textDecoration: 'none', color: '#202020' }}>
                            <button
                                onClick={onClickReviewUpdateHandler}>수정완료</button>
                        </Link>
                    </div>
                </article>
                <div className={style.MainContainer}>
                    <article className={style.rallydate2}>
                        <div className={style.container}>
                            <h4>리뷰 제목</h4>
                            {/* {REVIEW_TITLE} */}
                            <input type="text" onChange={onChangeHandler} defaultValue={form.reviewTitle} style={{ marginLeft: '15px', backgroundColor: 'lightgray', width: '630px' }} name="reviewTitle"/>
                        </div>
                        <div className={style.container}>
                            <h4>랠리 완주 일시</h4>
                            <h4>2020-20202020</h4>
                        </div>
                        {/* <input type="date" min="2023-01" max="2023-12" name='rallydate' /> */}
                    </article>
                    <br />
                    <div className={style.textBoard}>
                        <div className={style.imageBoard}>
                            <input style={{ display: 'none' }} type="file" ref={imageInput} />
                            <button className={style.imageGo} onClick={onCickImageUpload}>이미지업로드</button>
                        </div>
                        <input
                            type="text"
                            onChange={onChangeHandler}
                            defaultValue={ form.reviewDetail}
                            style={{ margin: '10px', width: '96%', height: '520px', border: 'none' }}
                            name="reviewDetail" />
                    </div>
                </div>
            </section>
        </main>
    );
}
export default WriteReviewPost;