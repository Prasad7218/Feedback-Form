import './App.css';
import Comment from './components/Comment';
import {useState} from 'react';
import img1 from './Images/mobile.jpg'

function App() {
  const [render,setRender]=useState(false);

  const giveHandler=()=>{
    setRender((value)=> !value)
  }
  return (
    <div className="App">
      <img src={img1} alt="mobo"/>
    <button className="btn3" onClick={giveHandler}><b>Give feedback</b></button>
   { render &&<div>
     <Comment/>
     </div>
  }
  </div>
  );
}

export default App;
