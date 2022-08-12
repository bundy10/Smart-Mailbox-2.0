import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ParticleBackground from './components/background/ParticleBackground';

function App() {
  return (
 <> 
    <Router>
      <ParticleBackground className= "particles"/>
      <div className='container'>
            <h1 className='glitch'> 
      <span aria-hidden="true">Smart Mail Box 2.0 <br/>  <br/>  <i className="fa-solid fa-robot fa-bounce"></i> </span>
      Smart Mail Box 2.0  <i className="fa-solid fa-robot fa-bounce"></i></h1>
      <span aria-hidden="true">Smart Mail Box 2.0 <br/>  <br/> </span> </div>
      <Routes>
        <Route></Route>
      </Routes>
    </Router>
     </>
  );
}

export default App;
