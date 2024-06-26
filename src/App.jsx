import { Header } from "./components/header/header.jsx";
import { About } from "./parts/about/about.jsx";
import { Contact } from "./parts/contact/contact.jsx";
import { Intro } from "./parts/intro/intro.jsx";
import { Message } from "./parts/message/message.jsx";
import { Portfolio } from "./parts/portfolio/portfolio.jsx";
import { Showcase } from "./parts/showcase/showcase.jsx";

/**----------------------------------------------------------------
 * TODO: Create navigation scrolling between parts
 *----------------------------------------------------------------*/

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <section id="intro">
          <Intro />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="message">
          <Message />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="showcase">
          <Showcase />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
