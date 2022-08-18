import { Component } from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './Component/Navbar'
import Home from './Component/Home';
import About from './Component/About';
import Footer from './Component/Footer';
import './App.css';


class App extends Component {
  render(){
    return (
      <div className="App">
        
        <Navbar/>
        <Routes>
          <Route path='/safetyapp' element = {<Home/>}/>
          <Route path='/About' element = {<About/>} />
        </Routes>
        <Footer/>
        
        
      </div>
    );
  }
}

export default App;
