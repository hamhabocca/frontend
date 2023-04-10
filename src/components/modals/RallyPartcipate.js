import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import styles from './RallyPartcipate.module.css';
import { closeModal } from "../../modules/ModalsModule";

function RallyPartcipate() {
    
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.modalsReducer.recruitState);

    return (
        <Modal isOpen={isOpen} ariaHideApp={false} className={styles.modal} style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '98' } }}>

            <div>
                <div className={styles.header}>
                    <h3>랠리 참가</h3>
                </div>
                <div className={styles.info}>
                    <h2> 랠리팀</h2>
                    <br />
                    <br />
                    <h4> 랠리에 참가하시겠습니까?</h4>
                    <input type='button' className={styles.ok} value='확인' />
                    <input type='button' className={styles.close} onClick={() => dispatch(closeModal())} value='취소' />
                </div>
            </div>

        </Modal>
    );
}
export default RallyPartcipate;