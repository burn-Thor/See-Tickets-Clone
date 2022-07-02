import './App.css';
import Navbar from './components/Navbar/Navbar';
import OpeningPics from './components/OpeningPics/OpeningPics';
import OpeningPicsSlider from './components/OpeningPics/OpeningPicsSlider';



function App() {


  return( 
  
  <div className="App">

    <div>
      <Navbar/>
    </div>


    <div class = "Carousel">
      <h2>Our amazing venues</h2>
      <OpeningPicsSlider slides={OpeningPics}/>       
    </div>
    
    
    

  </div>
  )
}

export default App;
