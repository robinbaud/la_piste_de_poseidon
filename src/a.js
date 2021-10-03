import { useState } from "react";
import { useHistory } from "react-router";

const A = () =>{
    const history = useHistory();
    const motdepasse = "neil";
    const [value, setValue] = useState('');
    console.log(value);
    const compare = (e) =>{
        e.preventDefault()
                if(motdepasse === value){
                    console.log('bravo!!!');
                    let path = `/h/a/va`; 
                    history.push(path);
                }else{
                    console.log('essaie encore')
                }
            }
    
    return(
        <div className="page">
            <h2 className="enigme">Prenez la photo de l'enfant dont le sourcier parle et envoyez la à 
            Josephine pour qu'elle vous donne son nom.</h2>
            <form action="">
                <input className="test" type="text" onChange={event => setValue(event.target.value)}/>  
                <button  onClick={compare}>valider</button>
            </form>
        </div>
    );
}

export default A;