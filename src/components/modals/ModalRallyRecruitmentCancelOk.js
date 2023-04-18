import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../modules/ModalsModule';
import styles from './Modal.module.css';

function ModalRallyRecruitmentCancelOk() {

    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.modalsReducer.cancelRecruitState2Ok);

    return (
        <Modal isOpen={isOpen} ariaHideApp={false} className={styles.modal} style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '98' } }}>
            <div className={styles.all}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h3>랠리모집취소</h3>
                    </div>
                    <div className={styles.info}>
                        <h3 style={{ fontSize: '20px' }}>랠리팀명</h3>
                        <br /><br />
                        <h4 className={styles.text}>랠리 모집이 취소되었습니다. </h4>
                        <div>
                            <input type='button' className={styles.close} onClick={() => dispatch(closeModal())} value='확인' />
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
export default ModalRallyRecruitmentCancelOk;