import './App.css';
import './components/Intro'
import Intro from './components/Intro';
import About from './components/About';
import Tech from './components/Tech';
import data from './components/data';


function App() {
  const Techer = data.map(item =>{
    return(
      <Tech
         img={item.img}
         stack={item.techstackname}
         percentage={item.percentage}
      />
    )
  })

  
  return (
    <>
      <Intro/>
      <About/> 
      {/* <Tech/> */}
      <div id="tech" className="container">
            <div id="technology">
                <text id="tech-intro">&lt;Technology&gt;</text>
            </div>
            <div id="tech-stack" className='container'>
              <div className='row'>
                <div className='col-lg-11 offset-lg-1 puthusu'>
                     {Techer}
                </div>
                  
              </div>
              
            </div>
            <div id="technology2">
                <text id="tech-intro2">&lt;/Technology&gt; </text>
            </div>
      </div>
    </>
    
  );
}

export default App;
