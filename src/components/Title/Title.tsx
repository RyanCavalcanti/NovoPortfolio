import styles from './Title.module.scss';

const Title = () => {
    return(
        <section className={styles.section__one}>
        <h2 className={styles.title}>Ajudando empresas a construírem sites de
forma moderna e de alta qualidade.</h2>
        <p className={styles.subtitle}>Fique apenas 1 click do seu cliente.</p>
        <p className={styles.text}>Uma combinação de desenvolvimento Frontend, interfaces intuitivas e
atraentes que aprimorem a experiência do usuário e habilidade profissional
que vão destacar seu produto no mercado.</p>
        </section>
    )
}

export default Title;