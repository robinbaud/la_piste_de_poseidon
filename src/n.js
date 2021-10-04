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
            <h2 className="titre"> Le test final commence</h2>
            <p className="intro">Après avoir traversé le pont qui me permet de passer au-dessus le fleuve d’acide
             je me retrouve à la dernière étape de ma quête, mais pour que je vous dévoile le dernier indice 
             vous devrez battre ma propre énigme, vous devez prouver votre valeur et votre intelligence, c’est 
             la seule façon que j'ai de vous savoir digne sans même vous avoir connu.
            “Sur le navire, flottant sur le fleuve d’acide, proche de l’extrémité de sa proue, vous trouverez 
            deux fauves scrutant l’horizon et 4 paires de gardiens qui protègent le nom de leur propriétaire disparu”

                
                
            </p>
            <p className="message">
                decouvrer ce lieu et envoyer la photo a josephine pour commencer votre test 
            </p>
            <form action="">
                <input className="test" type="text" onChange={event => setValue(event.target.value)}/>  
                <button  onClick={compare}>valider</button>
            </form>
        </div> 
    );
}

export default N;