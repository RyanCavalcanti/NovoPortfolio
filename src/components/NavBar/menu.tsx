import styles from './menu.module.scss';
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';

const NavBar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
      setMenuOpen(!isMenuOpen);
    };


    return(
        <>
        <header className={styles.cabecalho}>
            <h1 className={styles.name}>Ryan Cavalcanti</h1>

        <nav>
            <div className={styles.box}>
                <IoMenu size={40} onClick={handleMenuToggle} className= {`${styles.responsiveMenu} ${isMenuOpen ? styles.menuIconOpen : ''}`}/>
            </div>

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

        <div className={`${styles.ToggleMenu} ${isMenuOpen ? styles.open : ''}`}>
        <a href="#sobremim">Sobre Mim</a>
        <a href="#servicos">Serviços</a>
        <a href="#projetos">Projetos</a>
        </div>
</>
    )
}

export default NavBar;