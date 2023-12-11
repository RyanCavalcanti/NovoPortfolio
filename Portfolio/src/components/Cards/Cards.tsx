import styles from './Cards.module.scss'

interface CardsProps {
    title: string;
    subtitle: string;
    text: string;
    twoSubtitle: string;
    twoText: string;
}

const Cards = ({ title, subtitle, text, twoSubtitle, twoText }: CardsProps) => {
    return(
        <div className={styles.box}>
            <h2 className={styles.title}>{ title }</h2>
            <div className={styles.texts}>
                <h3 className={styles.subtitle}>{ subtitle }</h3>
                <p className={styles.text}>{ text }</p>
            </div>
            <div className={styles.texts}>
                <h3 className={styles.subtitle}>{ twoSubtitle }</h3>
                <p className={styles.text}>{ twoText }</p>
            </div>
        </div>
    )
}

export default Cards;