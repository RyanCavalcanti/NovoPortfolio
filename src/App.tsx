import NavBar from './components/NavBar/menu';
import Title from './components/Title/Title';
import styleContainer from './styles/Theme.module.scss';

function App() {

  return (
    <body className={styleContainer.container}>
    <NavBar />
    <Title />
    </body>
  )
}

export default App
