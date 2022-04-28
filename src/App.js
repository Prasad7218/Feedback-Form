import './App.css';
import Comment from './components/Comment';
import {useState} from 'react';

function App() {
  const [render,setRender]=useState(false);

  const giveHandler=()=>{
    setRender((value)=> !value)
  }
  return (
    <div className="App">
    <button onClick={giveHandler}>Give feedback</button>
   { render &&<div>
     <Comment/>
     </div>
  }
  </div>
  );
}

export default App;
