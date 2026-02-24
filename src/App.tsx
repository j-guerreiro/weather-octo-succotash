import './App.css'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
import { ModalOpenerButton } from './Components/ModalHandler'

function App() {

  return (
    <>
      <Header />
      <ModalOpenerButton />
      <Footer>
        <em>Copyright <a href="#">jguerreiro</a></em>
      </Footer>
    </>
  )
}

export default App
