import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Container from "./components/container";
import DisplayComp from "./components/DisplayComponent";
import ButtonControl from "./components/ButtonContrl";
import { useSelector } from "react-redux";
import PrivacyToggl from "./components/Privacy-Toggle-msg";

function App() {
  const privacy = useSelector((store) => store.privacy);

  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <Container>
          <Header />
          {privacy ? <PrivacyToggl /> : <DisplayComp />}
          <ButtonControl></ButtonControl>
        </Container>
      </div>
    </>
  );
}

export default App;
