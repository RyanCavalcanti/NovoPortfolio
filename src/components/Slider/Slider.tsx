import { useState } from 'react';
import styles from './Slider.module.scss';
import { register } from 'swiper/element-bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

register();
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


const Slider = () => {

    const imagens = [
        { id: '1',  image: '/src/assets/BannerResults.png', alt: 'Results Comunicação', href: 'https://www.resultscomunicacao.com/' },
        { id: '2',  image: '/src/assets/BannerCeB.jpg', alt: 'CeB Consultoria', href: 'https://cebconsultoriadesegurancaocupacional.com/' },
    ]

    const [indiceAtual, setIndiceAtual] = useState(0);

    const handleSlideChange = (swiper: { realIndex: number }) => {
        setIndiceAtual(swiper.realIndex);
    };

  return (
    <section className={styles.container}>
    <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        //autoplay={true}
    >
        {imagens.map( (item) => (
            <SwiperSlide key={item.id} >
                <a href={item.href} target='_blank'><img src={item.image} alt={item.alt}  className={styles.banner} /></a>
            </SwiperSlide>
        ))}
    </Swiper>
    
    <div className={styles.indicadores}>
                {imagens.map((_, index) => (
                    <span key={index} className={index === indiceAtual ? styles.selecionado : styles.deselecionado}></span>
                ))}
            </div>
           
    </section>
  );
};

export default Slider;