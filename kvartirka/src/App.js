import './App.css';
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app-wrapper">
        <Header/>
        <div className='app-wrapper-content'>
            <Cards/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
