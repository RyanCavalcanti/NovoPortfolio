import styleContainer from './styles/Theme.module.scss';
import NavBar from './components/NavBar/menu';
import TextInfo from './components/TextInfo/TextInfo';
import Slider from './components/Slider/Slider';
import AboutMe from './components/AboutMe/AboutMe';
import Title from './components/Title/Title';
import ServicesProvided from './components/ServicesProvided/ServicesProvided';
import ProjectsClient from './components/ProjetcsClient/ProjetcsClient';
import Cards from './components/Cards/Cards';
import ContainerCard from './components/ContainerCard/ContainerCard';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import SocialMedia from './components/SocialMedia/SocialMedia';

function App() {

  return (
    <>
    <main className={styleContainer.container}>
    <NavBar />
    <TextInfo />
    <Slider />
    <AboutMe/> 
    <Title Titulo='Serviços' />
    <ServicesProvided />
    <Title Titulo='Projetos de Clientes' />
    <ProjectsClient />
    <Title Titulo='Desenvolva seu Website com quem entende' />

    <ContainerCard>
      <Cards title='Design' subtitle='UI' text='A Interface do Usuário (UI) é a conexão visual e interativa entre o usuário e um sistema digital, buscando criar experiências intuitivas e eficientes. Com elementos como layout, cores e interações, prioriza usabilidade, acessibilidade e clareza na transmissão de informações, contribuindo para uma experiência positiva no mundo digital.' twoSubtitle='UX' twoText='A Experiência do Usuário (UX) refere-se à interação global entre um usuário e um produto ou serviço, visando proporcionar uma jornada eficaz e agradável. Envolve o entendimento das necessidades do usuário, a facilidade de uso e a satisfação geral, contribuindo para a criação de experiências significativas e memoráveis.'/>

      <Cards title='Front-end' subtitle='Layout' text='O Layout Web é a organização visual e estrutural de elementos em uma página da web. Essencial para a experiência do usuário, um layout bem elaborado considera a hierarquia de informações, a navegabilidade intuitiva e a estética, garantindo uma apresentação eficiente e atraente do conteúdo online.' twoSubtitle='Front-end' twoText='O Front-end refere-se à parte visual e interativa de um site ou aplicativo, com a qual os usuários interagem diretamente. Desenvolvedores Front-end utilizam linguagens como HTML, CSS e JavaScript e a biblioteca React para criar interfaces responsivas, garantindo uma experiência de usuário fluida e atraente.'/>

      <Cards title='Back-end' subtitle='Back-end' text='O Back-end é a espinha dorsal de muitos sites dinâmicos, lidando com o processamento e armazenamento de dados. Desenvolvendo servidores robustos possibilita-se interações dinâmicas, manipulação de bancos de dados e a entrega de conteúdo personalizado aos usuários.' twoSubtitle='API e Insfraestrutura' twoText='As APIs desempenham um papel crucial na comunicação entre diferentes sistemas, permitindo a troca eficiente de dados. A infraestrutura fornece o suporte técnico necessário para garantir a estabilidade, escalabilidade e segurança dessas interações, formando a base essencial para o funcionamento harmonioso de serviços digitais.'/>
    </ContainerCard>

    <Form/>
    <SocialMedia/>
    </main>
    <Footer />
    </>
  )
}

export default App
