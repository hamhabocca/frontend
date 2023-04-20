import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { OPEN_DELETE_POST } from "../modules/ModalsModule";
import ModalDelete from "../components/modals/ModalDelete";
import style from './QnAPost.module.css';
import { callQnaDetailAPI } from "../apis/QnAAPICalls";

function QnAPost() {

    const dispatch = useDispatch();

    const deletePostState = useSelector(state => state.modalsReducer.deletePostState);

    const { qnaId } = useParams();

    const qna = useSelector(state => state.qnaReducer)

        /* QNA 아이디 */
        const QNA_ID = qnaId;
    
        /* QNA 카테고리 */
        const QNA_CATEGORY = qna.qnaCategory;
        
        /* QNA 제목 */
        const QNA_TITLE = qna.qnaTitle;
        
         /* QNA 내용 */
         const QNA_DETAIL = qna.qnaDetail;    
    
        /* QNA 작성자 */
        const QNA_WRITER = qna.qnaWriter;
        
        /* 작성일 */    
        const qnawritedate = new Date(qna.qnaWriteDate);  
    useEffect(
        () => {
            dispatch(callQnaDetailAPI({ qnaId: qnaId }));
        }, [] 
    );   

    return (
        <main className={style.all}>

            <div>

                <div className={style.post}>
                    <div className={style.d1}>
                        <h6 className={style.member}>회원</h6>

                        <h6 className={style.postname}>{QNA_TITLE}</h6>
                    </div>

                    <div className={style.d2}>
                        <h6 className={style.writer}>{QNA_WRITER}</h6>

                        <h6 className={style.date}>{qnawritedate.toLocaleDateString().slice(0, -1)}</h6>
                    </div>
                </div>
                <hr/>
                <div className={style.button}>
                    <Link to='/qna/edit'> <button className={style.editbtn}>수정</button> </Link> 
                    <button onClick={() => { dispatch({type: OPEN_DELETE_POST})}} className={style.deletebtn}>삭제</button>
                    {deletePostState && <ModalDelete/>}
                </div>
                <div className={style.contants}>
                    <div>
                        <div className={style.img}>이미지</div>
                        <br />
                        <h4>{QNA_DETAIL}</h4>
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