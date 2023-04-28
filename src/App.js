import "./App.css";
import Container from "./Layout/Container";
import Carousel from "./Components/Carousel";
import Hero from "./Components/Hero";

function App() {
  return (
    <Container>
      <Hero />
      <Carousel />
    </Container>
  );
}

export default App;
