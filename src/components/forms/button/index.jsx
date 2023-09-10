import styles from './style.module.scss';

export const Button__1 = ({type, content}) => {
    return(
        <button className={styles.button__1} type={type}>
            {content}
        </button>
    )
}