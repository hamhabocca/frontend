import styles from './ModalSecession.module.css';
import { useState } from 'react';
// import SecessionOkModal from '../components/modals/SecessionOkModal';


function ModalParticipateOk({setModalOpen}) {

    const [modalOpen, setModalOpen] = useState(false);

    // 모달 끄기 
    const closeModal = () => {
        setModalOpen(false);
    };

    // constkModal = () => {
    //     setModalOpen1(true);
    // };

    return (
        <div className={styles.all}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h3>랠리참가</h3>
                </div>
                <div className={styles.info}>
                    <h2 style={{fontSize : '20px'}}>랠리팀명</h2>
                    <br/>
                    <h5 className={styles.text}>랠리에 신청되었습니다.</h5>
                    {/* <div>
                    <input type='button' className={styles.ok} onClick = {SecessionOkModal} value='확인'/>
                    {modalOpen1 && <SecessionOkModal setModalOpen1 = {setModalOpen1}/>}
                    </div> */}
                    <input type='button' className={styles.close} onClick={closeModal} value='확인'/>
                </div>
            </div>
        </div>
    );
}
export default ModalParticipateOk;