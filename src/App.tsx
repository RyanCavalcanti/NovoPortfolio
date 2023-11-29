import NavBar from './components/NavBar/menu';
import Slider from './components/Slider/Slider';
// import SobreMim from './components/SobreMim/SobreMim';
import Title from './components/Title/Title';
import styleContainer from './styles/Theme.module.scss';

function App() {

  return (
    <body className={styleContainer.container}>
    <NavBar />
    <Title />
    <Slider />
    {/* <SobreMim /> */}
    </body>
  )
}

export default App
