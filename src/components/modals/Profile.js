import styles from './Profile.module.css';

function Profile({ setProfileModalOpen }) {
    // 모달 끄기 
    const closeModal = () => {
        setProfileModalOpen(false);
    };

    // const onChangeHandler = (e) => {
    //     setSigList(searchSig(e.target.value));
    // }

    return (
        <div className={styles.all}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h3>프로필 수정</h3>
                </div>
                <div className={styles.info}>
                    <div className={styles.title}>
                        <h4>프로필사진</h4>
                        <h4>닉네임</h4>
                        <h4>선호지역</h4>
                        <h4>랠리타입</h4>
                    </div>
                    <div className={styles.info2}>
                        <div>
                            <div className={styles.img1}>
                                    <button className={styles.img2}> </button>
                            </div>
                            <div className={styles.button}>
                                <input type='button' className={styles.ok} value='변경' />
                                <input type='button' className={styles.close} onClick={closeModal} value='삭제' />
                            </div>
                        </div>
                        <div>
                            <div className={styles.text1}>
                                <h6>닉네임 사용 결과 테스트</h6>
                            </div>
                            <div>
                                <input type="text" size="20" name="search" />
                                <input type='button' className={styles.ok} value='변경' />
                            </div>
                        </div>
                        <div>
                            <div>
                                <select>
                                    <option>시/도</option>
                                </select>
                            </div>
                            <div>
                                <select>
                                    <option>시/군/구</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <select>
                                <option>랠리타입</option>
                            </select>
                        </div>
                    </div>
                </div>
                    <div className={styles.button}>
                        <input type='button' className={styles.ok} value='확인' />
                        <input type='button' className={styles.close} onClick={closeModal} value='취소' />
                    </div>
            </div>
        </div>

    );
}
export default Profile;