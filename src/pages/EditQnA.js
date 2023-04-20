import style from "./WriteQnA.module.css"
import { callQnaDetailAPI, callModifyRallyAPI } from "../apis/QnAAPICalls";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link, useParams } from "react-router-dom";


function EditQnA() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

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
    const [form, setForm] = useState({
        qnaCategory: '',
        qnaTitle: '',
        qnaDetail: ''
    });

    useEffect(
        () => {
            setForm({
                ...form,
            })
        }, []
    );

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

        console.log('form', form);
    }

    const onClickQnaPostHandler = () => {

        console.log('[QNA 등록] onClickQnaPostHandler');

        const formData = new FormData();

        formData.append("qnaCategory", form.qnaCategory);
        formData.append("qnaTitle", form.qnaTitle);
        formData.append("qnaDetail", form.qnaDetail);

        dispatch(callQnaDetailAPI({ form: formData }));
    
        alert('건의글 메인페이지로 이동합니다.');
        navigate('/qna', { replace : true });
        window.location.reload();
    };

    return (

        <main className={style.all}>

            <div className={style.title}>
                <h1>건의 게시글 수정</h1>
                <br />
                <hr />
            </div>
            <br />
            <div className={style.contents}>

                <div className={style.cg}>
                    <label>카테고리</label>
                    <select className={style.dropdownbox} onChange={onChangeHandler}>
                        <option>{QNA_CATEGORY}</option>
                        <option>건의</option>
                        <option>기타</option>
                    </select>
                </div>
                <br />
                <div className={style.tit}>
                    <label>제목</label>
                    <input className={style.titfield} type="text" size="50" name="title" onChange={onChangeHandler} defaultValue={QNA_TITLE}/>
                </div>
                <br />
                <div className={style.conTextarea}>
                    <label className={style.labelarea}>내용</label>

                    <textarea className={style.textfield} cols="700" rows="230" onChange={onChangeHandler}>{QNA_DETAIL}</textarea>

                </div>
                <div className={style.fileImg}>
                    <label>파일첨부</label>
                    
                    <input className={style.filearea} type="file" name="uploadFile" onChange={onChangeHandler}/>

                    
                </div>

            </div>
            <br />
            <hr />
            <article className={style.btn}>
                <button onClick={onClickQnaPostHandler}>완료</button>
            </article>

            <br />
           
        </main>
    );
}

export default EditQnA;