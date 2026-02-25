import './App.css'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
import { ModalOpenerButton } from './Components/ModalHandler'
import { StyledAppContainer } from './style'

function App() {

  return (
    <StyledAppContainer>
      <Header />
      <ModalOpenerButton />
      <Footer>
        <em>Copyright <a href="#">jguerreiro</a></em>
      </Footer>
    </StyledAppContainer>
  )
}

export default App
