import styles from './style.module.scss';

export const TodoCard = ({title, id, message, removeNote}) => {
    return(
        <li className={styles.todoCard}>
            <h2 className="title two">{title}</h2>
            <p className="paragraph">{message}</p>
            <button className={styles.button} onClick={() => removeNote(id) }>Excluir</button>
        </li>
    )
}