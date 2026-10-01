import { useCallback, useState } from "react";
import About from "./components/About/About";
import DrawingModal from "./components/DrawingModal/DrawingModal";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { drawings } from "./data/drawings";

export default function App() {
  const [selected, setSelected] = useState(null);
  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Gallery drawings={drawings} onSelect={setSelected} />
        <About />
      </main>
      <Footer />
      {selected && <DrawingModal drawing={selected} onClose={closeModal} />}
    </>
  );
}
