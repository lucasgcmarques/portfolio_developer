import { Header } from './components/header/header.jsx'
import { About } from './parts/about/about.jsx'
import { Contact } from './parts/contact/contact.jsx'
import { Intro } from './parts/intro/intro.jsx'
import { Message } from './parts/message/message.jsx'
import { Portfolio } from './parts/portfolio/portfolio.jsx'
import { Showcase } from './parts/showcase/showcase.jsx'

function App() {

  return (
    <>
      <Header/>
      <div className="main">
        <Intro/>
        <About/>
        <Message/>
        <Portfolio/>
        <Showcase/>
        <Contact/>
      </div>

    </>
  )
}

export default App
