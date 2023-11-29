import foto from '../../assets/fotografia.webp';
import styles from './_sobremim.module.scss';

const SobreMim = () => {
  return (
    <section className={styles.secao}>
      <div className={styles.organizacao}>
        <img src={foto} className={styles.imagem} alt="Ryan Cavalcanti" />
        <div className={styles.textos}>
          <h1 className={styles.h2}>Olá! Eu sou Ryan Cavalcanti!</h1>
          <p className={styles.p}>
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

export default SobreMim;
