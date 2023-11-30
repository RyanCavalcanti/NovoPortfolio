import styles from './_aboutme.module.scss';

const AboutMe = () => {
  return (
    <section className={styles.secao} id='sobremim'>
      <div className={styles.organizacao}>
        <img src='assets/Ryan.png' className={styles.imagem} alt="Ryan Cavalcanti" />
        <div className={styles.textos}>
          <h1 className={styles.titulo}>Olá! Eu sou Ryan Cavalcanti!</h1>
          <p className={styles.texto}>
            Minha principal missão é projetar interfaces web intuitivas e
            cativantes que elevem a experiência do usuário a um novo patamar.
            Busco constantemente inovações e tendências para garantir que meus
            designs estejam sempre atualizados e alinhados com as necessidades
            do público. Com uma abordagem centrada no usuário, meu trabalho visa
            simplificar a interação digital, tornando-a mais eficaz e
            envolvente. Acredito que uma boa interface pode transformar a forma
            como as pessoas interagem com a tecnologia, facilitando suas vidas e
            agregando valor aos produtos e serviços. Vamos criar algo incrível
            juntos!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
