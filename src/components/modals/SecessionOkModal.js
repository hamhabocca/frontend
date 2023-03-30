import styles from './SecessionOkModal.module.css';

function SecessionOkModal({ setModalOpen }) {

    const [modalOpen, setModalOpen] = useState(false);

    // 모달 끄기 
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className={styles.all}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h3>회원 탈퇴</h3>
                </div>
                <div className={styles.info}>
                    <h2 style={{fontSize : '20px'}}>탈퇴다 이자식아
                    </h2>
                    <br/>
                    <h5 className={styles.text}>회원님의 정보는 30일간 저장되며, 그 이후 삭제됩니다. </h5>
                    <div>
                    <input type='button' className={styles.ok} onClick = {closeModal} value='닫기'/>
                </div>
            </div>
        </div>
        </div>
    );
}
export default SecessionOkModal;