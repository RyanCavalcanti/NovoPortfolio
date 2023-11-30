import styles from './ProjetcsClient.module.scss';

const ProjectsClient = () => {

    const projects = [
        { id: '1', src: 'assets/results.png', alt: 'Results Comunicação', href:'https://www.resultscomunicacao.com/', backgroundColor: '#ED740D' },
        { id: '2', src: 'assets/ceb.png', alt: 'C&B Consultoria', href:'https://cebconsultoriadesegurancaocupacional.com/', backgroundColor: '#395E3C' }
    ]

    return(
        <section className={styles.box}>
            {projects.map( (item) => (
            <div className={styles.div} key={item.id} >
                <img className={styles.img} src={item.src} alt={item.alt} />
                <a className={styles.btn} href={item.href} target='_blank' style={{ backgroundColor: item.backgroundColor }}>Acessar site</a>
            </div>
        ))}
        </section>
    )
};

export default ProjectsClient;