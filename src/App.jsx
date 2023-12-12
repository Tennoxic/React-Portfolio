import "./style.css"
import { TripleUserName } from "./components/tripleUserName" 
import { Logo } from "./components/Logo"
import { Socials } from "./components/Socials"
import { BodyDiv } from "./components/bodyDiv"
import { Gallery } from "./components/Gallery"
import { Contact } from "./components/Contact"

function App() {

  return (
    <div>
      <div style={{width:"100%",borderRadius:"0px"}} className="jumbotron">
      <Logo/>
      <TripleUserName/>
      <Socials/>
      </div>
      <div className="container">
      <BodyDiv/>
      <Gallery/>
      <Contact/>
      </div>
    </div>
  )
}

export default App
