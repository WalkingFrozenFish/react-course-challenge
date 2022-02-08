import React from 'react';
import styles from "./UserList.module.css";

const UserList = (props) => {
    // Разметка которая будет отображаться при отсутствии данных
    let result = <h3 className={styles.notFound}>Пользователи не найдены</h3>

    // Проверка на наличие данных в props, если данные есть, то преобразуем данные из массива и возвращаем разметку
    if (props.userList.length > 0) {
        result = props.userList.map(item => {
            return <p className={styles.userCard} key={item.id}>{item.name} - {item.age} лет</p>
        })
    }

    return (
        <div className={styles.userList}>
            {result}
        </div>
    );
};

export default UserList;
