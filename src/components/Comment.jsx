import './Comment.css';
import {useState} from 'react';
const Comment=()=>{
    const[state,setState]=useState({
        rating: "",
        name: "",
        lname:"",
        description: ""
    })
    const[span,setSpan]=useState('');
    const[person,setPerson]=useState('');

    const btnHandler=()=>{
        alert("Submitted");
        console.log(state);
    }

    const changeHandler=(event)=>{
     setState({...state,[event.target.name]:event.target.value})
     
    }

    const handleChange=(event)=>{
        const item=event.target.value;
        setPerson(item);
        if(item.length<2 || item.length>15 ){
            setSpan('must be greater than 2')
        }
        else{
            setSpan('');
        }

    }
    return(
        <div>
            <div className="feedback">
            <form>
            <label>Rating</label><br/>
            <select name="rating" onChange={changeHandler}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select><br/><br/>
            <label>First Name</label><br/>
            <input type="text" minLength="2" name="name" onChange={changeHandler}/><br/>
            <label>Last Name</label><br/>
            <input type="text" value={person} onChange={handleChange}/><br/>
            <span className="error">{span}</span>
            <br/><br/>
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
        </div>

    )
}
export default Comment;