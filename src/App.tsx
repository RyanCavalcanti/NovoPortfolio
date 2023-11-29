import styleContainer from './styles/Theme.module.scss';
import NavBar from './components/NavBar/menu';
import TextInfo from './components/TextInfo/TextInfo';
import Slider from './components/Slider/Slider';
import AboutMe from './components/AboutMe/AboutMe';
import Title from './components/Title/Title';

function App() {

  return (
    <body className={styleContainer.container}>
    <NavBar />
    <TextInfo />
    <Slider />
    <AboutMe/> 
    <Title Titulo='Serviços' />
    </body>
  )
}

export default App
