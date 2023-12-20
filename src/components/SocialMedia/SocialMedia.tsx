import ContainerMidia from './ContainerMidia';
import styles from './SocialMedia.module.scss';

const midias = [
    { id: '1', href: 'https://api.whatsapp.com/send?phone=5581985018491&text=', src: '/assets/icons/WhatsApp.png', alt: 'WhatsApp'},
    { id: '2', href: 'https://www.instagram.com/ryan.aws/', src: '/assets/icons/Instagram.png', alt: 'Instagram'},
    { id: '3', href: 'https://www.linkedin.com/in/ryancavalcanti-rocha/', src: '/assets/icons/Linkedin.png', alt: 'Linkedin'},
    { id: '4', href: 'https://github.com/RyanCavalcanti', src: '/assets/icons/Github.png', alt: 'Github'},
]

const SocialMedia = () => {

    return(
        <ContainerMidia >
        {midias.map( (item) => (
            <div key={item.id} id='contatos'>
            <a href={item.href} target='_blank'><img className={styles.icon} src={item.src} alt={item.alt} /></a>
        </div>
        ))}
        </ContainerMidia>
    )
    
}

export default SocialMedia;