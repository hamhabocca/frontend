import { Component } from 'react';
import styles from './CurrentRecruitList.module.css';

function CurrentRecruitList() {


    return (
        <div className={styles.all}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h3>신청 현황</h3>
                </div>
                <div className={styles.info}>
                    <h4> 테스트</h4>
                </div>
            </div>
        </div>
    );
}
export default CurrentRecruitList;