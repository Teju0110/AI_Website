import './App.css';
import Brand from './Components/Brand';
import Explore from './Components/Explore';
import Navbar from './Components/Navbar';
import About from './Container/About';
import Blog from './Container/Blog';
import Features from './Container/Features';
import Footer from './Container/Footer';
import Header from './Container/Header';
import Possibilities from './Container/Possibilities';

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
      <Navbar/>
      <Header/>
      </div>
      <Brand/>
      <About/>
      <Features/>
      <Possibilities/>
      <Explore/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
