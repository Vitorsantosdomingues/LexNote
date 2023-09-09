import styles from './style.module.scss';

export const Button__1 = ({type, content}) => {
    return(
        <button type={type}>
            {content}
        </button>
    )
}