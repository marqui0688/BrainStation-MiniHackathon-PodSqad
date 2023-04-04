import "./App.scss";
import Footer from "../src/components/Footer";
import PodcastList from "./components/PodcastList";
import Header from "../src/components/Header";
import Body from "../src/components/Body";

function App() {
  return (
    <>
      <Header />
      {/* <Body /> */}
      <PodcastList />
      <Footer />
    </>
  );
}

export default App;
