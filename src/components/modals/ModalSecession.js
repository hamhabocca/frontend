import styles from './ModalSecession.module.css';
import { useState } from 'react';
// import SecessionOkModal from '../components/modals/SecessionOkModal';


function ModalSecession({setModalOpen}) {

    const [modalOpen1, setModalOpen1] = useState(false);


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
                    <h3>회원 탈퇴</h3>
                </div>
                <div className={styles.info}>
                    <h2 style={{fontSize : '20px'}}>정말로 탈퇴하시겠습니까?</h2>
                    <br/>
                    <h5 className={styles.text}>회원님의 정보는 30일간 저장되며, 그 이후 삭제됩니다. </h5>
                    {/* <div>
                    <input type='button' className={styles.ok} onClick = {SecessionOkModal} value='확인'/>
                    {modalOpen1 && <SecessionOkModal setModalOpen1 = {setModalOpen1}/>}
                    </div> */}
                    <input type='button' className={styles.close} onClick={closeModal} value='취소'/>
                </div>
            </div>
        </div>
    );
}
export default ModalSecession;