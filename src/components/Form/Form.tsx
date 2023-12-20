import styles from './Form.module.scss';
import { useState, FormEvent } from 'react';


const Form = () => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')


    async function sendEmail(e: FormEvent){
        e.preventDefault();

        if(nome === '' || email === '' || whatsapp === ''){
            alert("Preencha todos os campos");
            return;
        }
        
        
    }


    return(
        <section className={styles.container}>
                <h3 className={styles.title}>Entre em contato</h3>
                <form className={styles.form} onSubmit={sendEmail} id='form' name='form'>
                    <input className={styles.inputName} type="text" name="name" id="name" placeholder="Seu nome" required onChange={(e) => setNome(e.target.value)} value={nome} autoComplete="off"/>
                    <div className={styles.box}>
                        <input className={styles.inputEmail} type="email" id="email" name="email" placeholder="Seu email" required onChange={(e) => setEmail(e.target.value)} value={email} autoComplete="off"/>
                        <input className={styles.inputNumber} type="text" id="whatsapp" name="number" placeholder="Seu WhatsApp" required onChange={(e) => setWhatsapp(e.target.value)} value={whatsapp} autoComplete="off"/>
                    </div>
                    <input className={styles.btn} type="submit" value="Enviar"/>

                    <p className={styles.politic}>Clicando no botão, você estará concordando com nossos termos de privacidade.</p>
                </form>
        </section>
    )
}

export default Form;