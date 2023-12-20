import styles from './Technologies.module.scss';

const technologies = [
    { id: '1',  image: '/assets/icons/technologies/html.svg', alt: 'HTML', },
    { id: '2',  image: '/assets/icons/technologies/css.svg', alt: 'CSS', },
    { id: '3',  image: '/assets/icons/technologies/javascript.svg', alt: 'JAVASCRIPT', },
    { id: '4',  image: '/assets/icons/technologies/sass.svg', alt: 'SASS', },
    { id: '5',  image: '/assets/icons/technologies/react.svg', alt: 'REACT', },
    { id: '6',  image: '/assets/icons/technologies/typescript.svg', alt: 'TYPESCRIPT', },
]

const Technologies = () =>{ 
    return(
        <section className={styles.box}>
            {technologies.map( (item) => (
                <img key={item.id} src={item.image} alt={item.alt}  className={styles.technologies} />
        ))}
        </section>
    )
}

export default Technologies;