import styles from './Form.module.scss';

const Form = () => {
    return(
        <section className={styles.container}>
                <h3 className={styles.title}>Entre em contato</h3>
                <form className={styles.form} action='../../backend/form.php'>
                    
                    <input className={styles.inputName} type="text" name="name" placeholder="Seu nome" required/>
                    <div className={styles.box}>
                        <input className={styles.inputEmail} type="email" name="email" placeholder="Seu email" required/>
                        <input className={styles.inputNumber} type="text" name="number" placeholder="Seu WhatsApp" required/>
                    </div>
                    <button className={styles.btn}>Enviar</button>
                    <p className={styles.politic}>Clicando no botão, você estará concordando com nossos termos de privacidade.</p>
                </form>
        </section>
    )
}

export default Form;