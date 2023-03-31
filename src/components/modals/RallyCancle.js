import styles from './RallyCancle.module.css';

function RallyCancle({ setRallyCancleModalOpen }) {
    // 모달 끄기 
    const closeModal = () => {
        setRallyCancleModalOpen(false);
    };

    return (
        <div className={styles.all}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h3>랠리 참가 취소</h3>
                </div>
                <div className={styles.info}>
                    <h2> 랠리팀</h2>
                    <br/>
                    <br/>
                    <h4> 랠리에 취소하시겠습니까?</h4>
                    <h5 className={styles.text}> 잦은 취소는 이용자의 서비스 활동이 제한될 수 있습니다.</h5>
                    <input type='button' className={styles.ok} value='확인'/>
                    <input type='button' className={styles.close} onClick={closeModal} value='취소'/>
                </div>
            </div>
        </div>
    );
}
export default RallyCancle;