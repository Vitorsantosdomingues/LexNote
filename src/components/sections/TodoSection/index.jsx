import { TodoForm } from "../../forms/TodoForm"
import { TodoList } from "./TodoList"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import styles from './style.module.scss'

export const TodoSection = () => {
    const [noteList, setNoteList] = useState([]);

    const addNote = (formData) => {
        //uuid é uma biblioteca e fornece uma função geradora de ids unicos
        //const newNote = { ...formData, id: uuidv4() };
        //crypto.ramdomUUID é um método nativo gerador de id único
        const newNote = {...formData, id: crypto.randomUUID() }
        setNoteList([...noteList, newNote]);
    }

    const removeNote = (removeId) => {
        const newNoteList = noteList.filter(note => note.id !== removeId);
        setNoteList(newNoteList);
    }

    return(
        <section className={styles.todoSection}>
            <TodoForm addNote={addNote} />
            <TodoList noteList={noteList} removeNote={removeNote} />
        </section>
    )
}