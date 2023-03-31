import styles from './RallyRecruitmentCancle.module.css';

function RallyRecruitmentCancle({ setRallyRecruitmentCancleModalOpen }) {
    // 모달 끄기 
    const closeModal = () => {
        setRallyRecruitmentCancleModalOpen(false);
    };

    return (
        <div className={styles.all}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h3>랠리 모집 취소</h3>
                </div>
                <div className={styles.info}>
                    <h4> 정말로 모집한 랠리를 취소하시겠습니까?</h4>
                    <br/>
                    <h6 className={styles.text}> * 취소 한 후에는 되돌릴 수 없습니다! <br/> * 잦은 취소는 이용자의 서비스 활동이 제한될 수 있습니다. </h6> 
                    
                    <input type='button' className={styles.ok} value='확인'/>
                    <input type='button' className={styles.close} onClick={closeModal} value='취소'/>
                </div>
            </div>
        </div>
    );
}
export default RallyRecruitmentCancle;