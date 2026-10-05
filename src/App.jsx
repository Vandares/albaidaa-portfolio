import Nav from "./components/Nav.jsx";
import Foot from "./components/Foot.jsx";
import Hero from "./sections/Hero.jsx";
import Ticker from "./sections/Ticker.jsx";
import About from "./sections/About.jsx";
import Services from "./sections/Services.jsx";
import Work from "./sections/Work.jsx";
import Showreel from "./sections/Showreel.jsx";
import Why from "./sections/Why.jsx";
import Process from "./sections/Process.jsx";
import Clients from "./sections/Clients.jsx";
import Contact from "./sections/Contact.jsx";
import { CONTACT } from "./data/site.js";
import { WhatsApp } from "./lib/icons.jsx";
import { useLang } from "./i18n/LangProvider.jsx";

export default function App() {
  const { t } = useLang();

  return (
    <>
      <div className="sky" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Services />
        <Work />
        <Showreel />
        <Why />
        <Process />
        <Clients />
        <Contact />
      </main>
      <Foot />

      <a
        className="wa-float"
        href={`https://wa.me/${CONTACT.wa1.number}`}
        target="_blank"
        rel="noreferrer"
        aria-label={t.aria.wa}
      >
        <WhatsApp width={25} height={25} />
      </a>
    </>
  );
}
