import "./App.scss";
import Footer from "../src/components/Footer";
import PodcastList from "./components/PodcastList";
import Header from "../src/components/Header";
import Body from "../src/components/Body";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Header />
      <Body setModal={setModal} />
      {modal && <PodcastList setModal={setModal} />}
      <Footer />
    </>
  );
}

export default App;
