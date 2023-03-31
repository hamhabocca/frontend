import styles from './RallyPartcipate.module.css';

function RallyPartcipate({ setRallyPartcipateModalOpen }) {
    // 모달 끄기 
    const closeModal = () => {
        setRallyPartcipateModalOpen(false);
    };

    return (
        <div className={styles.all}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h3>랠리 참가</h3>
                </div>
                <div className={styles.info}>
                    <h2> 랠리팀</h2>
                    <br/>
                    <br/>
                    <h4> 랠리에 참가하시겠습니까?</h4>
                    <input type='button' className={styles.ok} value='확인'/>
                    <input type='button' className={styles.close} onClick={closeModal} value='취소'/>
                </div>
            </div>
        </div>
    );
}
export default RallyPartcipate;