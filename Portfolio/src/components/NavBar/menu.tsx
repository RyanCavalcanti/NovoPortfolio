import styles from './menu.module.scss';

const NavBar = () => {
    return(
        <header className={styles.cabecalho}>
            <h1 className={styles.name}>Ryan Cavalcanti</h1>
        <nav>
        <div className={styles.itens}>
            <ul className={styles.list__ul}>
                <li ><a className={styles.item} href="#sobremim"><p>Sobre Mim</p></a></li>
                <li ><a className={styles.item} href="#servicos"><p>Serviços</p></a></li>
                <li ><a className={styles.item} href="#projetos"><p>Projetos</p></a></li>
            </ul> 
        </div>
        </nav>
        <div className={styles.btns}>
            <a href='#contatos' className={styles.btnCtt}>Contatos</a>
            <button className={styles.btnLang}>Português</button>
        </div>
        </header>
    )
}

export default NavBar;