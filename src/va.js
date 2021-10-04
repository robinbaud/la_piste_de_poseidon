import { useState } from "react";
import { useHistory } from "react-router";
const Va = () =>{
    const history = useHistory();
    const motdepasse = "el";
    const [value, setValue] = useState('');
    console.log(value);

     const compare = (e) =>{
        e.preventDefault()
                if(motdepasse === value){
                    console.log('bravo!!!');
                    let path = `/h/a/va/n`; 
                    history.push(path);
                }else{
                    console.log('essaie encore')
                }
            }

    return(
        <div className="page">
            <h2 className="titre"> Lorem ipsum dolor sit.</h2>
            <p className="intro">La prochaine étape de ma traversée ne se situe pas loin de la première
             en distance, mais loin en altitude, pour obtenir l’indice il faudra réarranger ce message 
             coder “es osipsson li nupiseson ecva sel lurvenso tafu etmret el vleufe iqu ne d’cedai” je n’ai 
             pas totalement réussi à décerner ce message, mais je suis quand même arriver à 
             restructurer sa phrase. 
                
                
            </p>
            <p className="message">
                Pour obtenir cette aide de ma part vous devrez prendre en photo une 
             des différentes poissonneries qui ont réussi à survivre à l’apocalypse et envoyez-la à Josephine 
             pour qu'elle vous donne l’indice
            </p>
            <form action="">
                <input className="test" type="text" onChange={event => setValue(event.target.value)}/>  
                <button  onClick={compare}>valider</button>
            </form>
        </div> 
    );
}

export default Va;