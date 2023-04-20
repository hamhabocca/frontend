import { useEffect, useState } from 'react';
import RallyCardMyPage from '../items/RallyCardMyPage';
import style from './MyPageList.module.css';
import { useDispatch, useSelector } from 'react-redux';

function MyPageList({typeOfList, rallyList}) {

    const dispatch = useDispatch();

    useEffect(
        () => {
        },
        []
    )

    if(typeOfList == '모집') {

        const currentList = Array.isArray(rallyList)&&rallyList.filter(rally => rally.rallyStatus == '모집중');
        const pastList = Array.isArray(rallyList)&&rallyList.filter(rally => rally.rallyStatus != '모집중');

        return (
            <section className={style.Container}>
                <h3>랠리 모집 내역</h3>
                <h4>현재 진행 중인 랠리</h4>
                <div className={style.RallyContainer}>
                    {Array.isArray(rallyList) && currentList.map(rally => <RallyCardMyPage key={rally.rallyId} rally={rally} />)}
                </div>
                <h4>과거 랠리</h4>
                <div className={style.RallyContainer}>
                    {Array.isArray(rallyList) && pastList.map(rally => <RallyCardMyPage key={rally.rallyId} rally={rally} />)}
                </div>
            </section>
        )
    }
}

export default MyPageList;

// { rallyPosts.map(rally => <RallyCardBoard key={ rally.rallycode } rally={ rally }/>) }