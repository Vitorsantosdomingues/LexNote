import { TodoCard } from "./TodoCard"
import styles from './style.module.scss'

export const TodoList = ({ noteList, removeNote }) => {
    return(
        <section className={styles.todoList}>
            <h1 className="title one">Listas de notas</h1>
            <div className={styles.todoList__informations}>
                <span>Notas: {noteList.length}</span>
                <span>Caracteres:</span>
            </div>
            <ul>
                {noteList.map(note => (
                    <TodoCard key={note.id} id={note.id} title={note.title} message={note.message} removeNote={removeNote} />
                ))}
            </ul>
        </section>
    )
}