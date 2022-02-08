import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import styles from "./CreateUser.module.css";

const CreateUser = (props) => {
    // Состояния для данных из input
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);

    // Состояние для показа модального окна и сообщения об ошибке
    const [modal, setModal] = useState({
        errorText: "",
        showModal: false
    });

    // Добавление данных в коллбек функцию для передачи данных в компонент App 
    const submitHandler = (event) => {
        event.preventDefault();

        // Проверка на длину имени, при отсутствии имени в поле ввода передаем в состояние модального окна сообщение об ошибке и булево значение для показа окна
        if (name.trim().length === 0) {
            const errorName = {
                errorText: "Введите имя",
                showModal: true
            }
            setModal(errorName);
            return;
        }

        // Проверка на возраст, при отрицательном значении передаем в состояние модального окна сообщение об ошибке и булево значение для показа окна
        if (age < 0) {
            const errorName = {
                errorText: "Возраст должен быть больше 0",
                showModal: true
            }
            setModal(errorName);
            return;
        }

        // Если данные есть в полях ввода, то создаем объект с данными, которые потом передадим в коллбек функцию из компонента App
        let userData = {
            id: Math.random().toString(),
            name: name,
            age: age
        }

        // Передача данных в компонент App через коллбек функцию
        props.addUser(userData);

        // Очищаем поля после жобавления данных
        setName("");
        setAge(0);
    }

    // Добавление данных в состояние
    const nameDataHandler = (event) => {
        setName(event.target.value);
    }

    // Добавление данных в состояние
    const ageDataHandler = (event) => {
        setAge(event.target.value);
    }

    // Функция для закрытия модального окна, затираем сообщение об ошибке и передаем булево значение для закрытия окна
    const closeModalHandler = () => {
        const errorName = {
            errorText: "",
            showModal: false
        }
        setModal(errorName);
    }

    return (
        <form onSubmit={submitHandler}>
            {/* Если showModal будет true, то будет показано модальное окно */}
            {modal.showModal && <Modal data={modal} closeModal={closeModalHandler} />}
            <div>
                <label className={styles.formLabel}>Имя</label>
                {/* На события изменения текста в полях ввода, вызываем функцию обработчик */}
                <input className={styles.userDataInput} type="text" value={name} onChange={nameDataHandler} />
            </div>
            <div>
                <label className={styles.formLabel}>Возраст</label>
                {/* На события изменения текста в полях ввода, вызываем функцию обработчик */}
                <input className={styles.userDataInput} type="number" value={age} onChange={ageDataHandler} />
            </div>
            <button className={styles.addUserButton}>Добавить пользователя</button>
        </form>
    );
};

export default CreateUser;
