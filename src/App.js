import './App.css';
import './components/Intro'
import Intro from './components/Intro';
import About from './components/About';
import Tech from './components/Tech';
import data from './components/data';
import Github from './components/Github';
import GithubData from './components/GithubData';

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


  const githuber = GithubData.map(item=>{
    return(
      <Github
        id={item.id}
        name={item.name}
        details={item.details}
        photo={item.photo}
      />
    )
  })

  
  return (
    <div className='container'>
      <Intro/>
      <About/> 
      <div id="tech" className="container whole">
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
      <div id="Github" className='container'>
            <div id="github-box">
              <text id='github-name'>&lt;Github&gt;</text>
            </div>
            <div id='github-lists'>
                {githuber}
            </div>
            <div id="github-box2">
              <text id='github-name2'>&lt;Github&gt;</text>
            </div>
      </div>
    </div>
    
  );
}

export default App;
