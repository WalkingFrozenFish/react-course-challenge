import React from 'react';
import styles from "./Modal.module.css";

const Modal = (props) => {
    return (
        // При клике на обертке модального окна, модальное окно должно закрываться
        // Для того что бы это событие не распространялось на остальное содержимое, потреовалось использовать event.stopPropagation(), но оно не сработало, при клике на контенте модальное окно закрывалось
        <div className={styles.modalWrapper} onClick={props.closeModal}>
            {/* Установка event.stopPropagation() на контенте модального окна решило проблему */}
            <div className={styles.modalWindow} onClick={event => event.stopPropagation()}>
                <div className={styles.modalTitle}>
                    <h2>Некорректный ввод</h2>
                </div>
                <div className={styles.errorMessage}>
                    <p>{props.data.errorText}</p>
                </div>
                <div className={styles.closeButton}>
                    <button onClick={props.closeModal}>Закрыть</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
