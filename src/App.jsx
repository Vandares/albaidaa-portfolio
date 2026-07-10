import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import Services from "./sections/Services.jsx";
import Work from "./sections/Work.jsx";
import Showreel from "./sections/Showreel.jsx";
import About from "./sections/About.jsx";
import WhyUs from "./sections/WhyUs.jsx";
import Process from "./sections/Process.jsx";
import Stats from "./sections/Stats.jsx";
import Clients from "./sections/Clients.jsx";
import Contact from "./sections/Contact.jsx";
import { CONTACT } from "./data/content.jsx";
import { WhatsApp } from "./lib/icons.jsx";
import { useLang } from "./i18n/LangProvider.jsx";

export default function App() {
  const { t } = useLang();
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Showreel />
        <About />
        <Stats />
        <WhyUs />
        <Process />
        <Clients />
        <Contact />
      </main>
      <Footer />

      <a
        className="wa-float"
        href={`https://wa.me/${CONTACT.whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        aria-label={t.aria.whatsappFloat}
      >
        <WhatsApp width={28} height={28} />
      </a>
    </>
  );
}
