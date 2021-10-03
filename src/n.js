import { useState } from "react";
import { useHistory } from "react-router";
const N = () =>{
    const history = useHistory();
    const motdepasse = "zedrager";
    const [value, setValue] = useState('');
    console.log(value);
   
    const compare = (e) =>{
        e.preventDefault()
                if(motdepasse === value){
                    console.log('bravo!!!');
                    let path = `/h/a/va/n/e`; 
                    history.push(path);
                }else{
                    console.log('essaie encore')
                }
            }

    return(
        <div className="page">
            <h2 className="titre"> Lorem ipsum dolor sit.</h2>
            <p className="intro">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Alias doloremque, consequuntur facere labore quidem delectus, obcaecati aperiam eius explicabo assumenda 
            odio numquam ipsa adipisci saepe in nihil dolorum cum dolore itaque quia? Architecto culpa perferendis, 
            similique 
                
                
            </p>
            <p className="message">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi!
            </p>
            <form action="">
                <input className="test" type="text" onChange={event => setValue(event.target.value)}/>  
                <button  onClick={compare}>valider</button>
            </form>
        </div> 
    );
}

export default N;