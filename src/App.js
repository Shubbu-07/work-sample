import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import PriceCalc from './Components/PriceCalc';
import Footer from './Components/Footer';
import StartNow from './Components/StartNow';

function App() {
  return (
    <div className="App container">
      <NavbarComp/>
      <PriceCalc/>
      <StartNow/>
      <Footer/>
    </div>
  );
}

export default App;
