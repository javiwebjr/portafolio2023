import "./app.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Technologys from "./components/technologys/Technologys";

function App() {

  return (
    <>
      <div>
        <section id="Homepage">
          <Navbar/>
          <Hero/>
        </section>
        <section id="Technologys">
          <Parallax type="technologys" />
        </section>

        <section><Technologys/></section>

        <section id="Portfolio">
          <Parallax type="portfolio"/>
        </section>
        <Portfolio/>
        <section id="Contact">
          <Contact/>
        </section>
      </div>
    </>
  )
}

export default App
