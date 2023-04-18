import { useEffect, useState } from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight, HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import Pagination from "react-js-pagination";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import QnAList from "../components/lists/QnAList";
import style from "./QnABoard.module.css";
import { getQnAList } from "../apis/QnAAPICalls";
import { callQnaListAPI } from "../apis/QnAAPICalls";
import { useDispatch, useSelector } from "react-redux";

function QnABoard() {

    const dispatch = useDispatch();

    const [page, setPage] = useState(1);

    // const [qnaPostList, setQnAPostList] = useState([]);
    // const [searchValue, setSearchValue] = useState('');

    // const navigate = useNavigate();

    const handlePageChange = (page) => { setPage(page) };

    const [qnaPostList, setQnAPostList] = useState([]);

    const test = useSelector(state => state.qnaReducer);

    useEffect(() => {

        console.log("QnA게시판");
        dispatch(callQnaListAPI({ currentPage: 1 }));

        // setQnAPostList(getQnAList().slice(10 * (page -1), 10 * (page - 1) + 10));
    }, [page]);

    console.log("Test", test);

    return (

        <main className={style.all}>

            <div className={style.search}>
                <select className={style.dropdownbox}>
                    <option>카테고리</option>
                </select>
                <form className={style.input}>
                    <input
                        className={style.searchfield}
                        type="text"
                        size="50"
                        name="search"
                    // value={searchValue}
                    // onChange={ e => setSearchValue(e.target.value) }    
                    />
                    {/* <input onClick={ onClickhandler } className={style.searchbtn} type="submit" value="검색" /> */}
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

                <article className={style.list}>
                    <QnAList qnaPosts={test} />
                </article>

            </div>

            <article className={style.btn}>
                <Link to='/qna/write'><button>작성</button></Link>
            </article>

            <div className={style.pageNumber}>

            </div>
            <br />
            <hr />

        </main>

    );
}

export default QnABoard;

