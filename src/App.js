import { Fragment } from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import images from "./data/images";

function App() {
  return (
    <Fragment>
      <Header />
      <Gallery images={images} />
    </Fragment>
  );
}

export default App;