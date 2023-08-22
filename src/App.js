import { Companies, Contact, Footer, GetStarted, Header, Hero, Residencies, Value } from "./Components/exports";
import "./App.css"
function App() {
  return (
    <div className="App">
      <div >
        <div className="white-gradient "  />
        <Header />
        <Hero />
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
