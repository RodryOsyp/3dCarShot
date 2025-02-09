import "./App.css";
import { Button, Header, Footer, Home, Corvette, Hero } from "./components";
import Bages from "./components/bages/Bages";

function App() {
  return (
    <div className="App">
      <Header>
        <Button title="Contact Us" />
      </Header>
      <Home />
      <Hero/>
      <Footer />
    </div>
  );
}

export default App;
