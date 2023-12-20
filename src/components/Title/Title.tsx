import styles from './_Title.module.scss';
interface tituloProps {
    Titulo: string,
}

const Title = ({ Titulo }: tituloProps) => {
    return(
        <>
        <p className={styles.titulo}>{ Titulo }</p>
        </>
    )
}

export default Title;