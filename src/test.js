import { useState } from "react";
import { Link } from "react-router-dom";


const Test = () =>{
    const [name, setName] = useState('ferdi')
    function changename() {
        setName('anto')
    }
    return(
        <div className="test">
            <p>{name}</p>
            <button onClick={changename}>click here</button>
            <Link to="/create">say hello</Link>
        </div>
    );
}

export default Test;