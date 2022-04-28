import './Comment.css';
import {useState} from 'react';
const Comment=()=>{
    const[state,setState]=useState({
        rating: "",
        name: "",
        description: ""
    })

    const btnHandler=()=>{
        alert("Submitted");
        console.log(state);
    }

    const changeHandler=(event)=>{
     setState({...state,[event.target.name]:event.target.value})
    }
    return(
        <div className='box'>
            <form className="feedback">
            <label>Rating</label><br/>
            <select name="rating" onChange={changeHandler}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select><br/><br/>
            <label>Your Name</label><br/>
            <input type="text" name="name" onChange={changeHandler}/><br/><br/>
            {/* <label>Comment</label><br/> */}
            {/* <input
            name="description"
            onChange={changeHandler} 
            className="description
            " type="text"/><br/><br/> */}
            <div className="input-group">
             <span className="input-group-text">Description</span>
             <textarea className="form-control" name="description" onChange={changeHandler} aria-label="With textarea"></textarea>
             </div>
            <button onClick={btnHandler} type="button" className="btn btn-primary">Submit</button>
            </form>
        </div>

    )
}
export default Comment;