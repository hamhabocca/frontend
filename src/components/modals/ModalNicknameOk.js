import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../modules/ModalsModule';
import styles from './ModalNickname.module.css';

function ModalNicknameOk() {

    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.modalsReducer.nicknameOkState);

    console.log("불러짐?", isOpen);

    return (
        <Modal isOpen={isOpen} ariaHideApp={false} className={styles.modal} style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '98' } }}>
            <div className={styles.all}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h3>ㅇㅅㅇ</h3>
                    </div>
                    <div className={styles.info}>
                        <h3 style={{ fontSize: '20px' }}>닉네임</h3>
                        <br /><br />
                        <h4 className={styles.text}>회원가입을 축하드립니다. 즐거운 시간 어저구</h4>
                        <div>
                            <input type='button' className={styles.close} onClick={() => dispatch(closeModal())} value='확인' />
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default ModalNicknameOk;