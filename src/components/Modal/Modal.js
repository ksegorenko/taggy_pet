import styles from "./Modal.module.css"

const Modal = ({isOpen, onClose, onDelete, children}) => {
    return (
        <>
            {isOpen && (
                <div className={styles.modal}>
                    <div className={styles.modal_wrapper}>
                        <div className={styles.modal_content}>
                            <div className={styles.close} id="pop-up-close" onClick={() => onClose()}>✕</div>
                            {children}
                            <div className={styles.buttons_container}>
                                <button className={styles.delete_button} onClick={() => onDelete()} >Удалить</button>
                                <button className={styles.close_button} onClick={() => onClose()}>Отменить</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>

    );
}

export default Modal;