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
        { id: '1',  image: '/src/assets/BannerResults.png', alt: 'Results Comunicação' },
        { id: '2',  image: '/src/assets/BannerCeB.jpg', alt: 'CeB Consultoria' },
    ]


  return (
    <section className={styles.container}>
    <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        // autoplay={true}
    >
        {imagens.map( (item) => (
            <SwiperSlide key={item.id} >
                <img src={item.image} alt={item.alt}  className={styles.banner} />
            </SwiperSlide>
        ))}
    </Swiper>
    </section>
  );
};

export default Slider;