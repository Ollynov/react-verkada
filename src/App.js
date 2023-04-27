import logo from "./logo.svg";
import "./App.css";
import Container from "./Layout/Container";
import Carousel from "./Components/Carousel";
import Hero from "./Components/Hero";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1 class="text-7xl font-bold underline">Hello world!</h1>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Container>
      <Hero />
      <Carousel />
    </Container>
  );
}

export default App;
