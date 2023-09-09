import { useState } from "react";
import { Input } from "../input";
import { Textarea } from "../textarea";
import styles from "./style.module.scss";
import { Button__1 } from "../button";


export const TodoForm = () => {
    //Variavel que armazena o valor do input title
    const [title, setTitle] = useState("");

    //Função que pega o valor do input Title + o tamanho do mesmo
    const messageChange = (event) => {
        setMessage(event.target.value);
        setMessageLength(event.target.value.length)
    }

    //Valor dentro do input message armazenado dentro da const message
    const [message, setMessage] = useState("");

    //Função que pega o valor do input Message + o tamanho do mesmo
    const titleChange = (event) => {
        setTitle(event.target.value);
        setTitleLength(event.target.value.length);
    }
    
    //Função que reseta o formulário e preve evento default
    const submit = (event) => { 
        event.preventDefault();
        setTitle("");
        setTitleLength(0);
        setMessage("");
        setMessageLength(0);
        console.log({ title, message })
     }

    //Variavel que armazena o tamanho do input title
    const [titleLength, setTitleLength] = useState(0)

    //Variavel que armazena o tamanho do input message
    const [messageLength, setMessageLength] = useState(0)

    return(
        <form onSubmit={submit} className={styles.todoForm}>
            <div className={styles.create_note_title}>
                <h1 className="title one">Criar note</h1>
            </div>
            <Input label1={"Titulo:"} label2={`(Caracteres: ${titleLength}-75)`} id={"title"} type={"text"} placeholder={"Titulo da nota"} value={ title } functionChange={ titleChange } maxL={75} />
            <Textarea label1={"Mensagem:"} label2={`(Caracteres: ${messageLength}-2000)`} id={"message"} functionChange={ messageChange } placeholder={"Digite sua anotação aqui"} maxL={2000} value={message}/>
            <Button__1 type={"submit"} content={"Criar note"}/>
        </form>
    )
}