
import './App.css';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import FlashSale from "./components/FlaseSale/FlashSale";

function App() {
  return (
    <div className="App">
      
      <Header></Header>
      <Services></Services>
        <FlashSale></FlashSale>

      {/* <h1 className='text-6xl'>this header</h1> */}

    </div>
  );
}

export default App;
