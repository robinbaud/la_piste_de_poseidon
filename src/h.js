import { Link } from "react-router-dom";
const H = () =>{
    return(
        <div className="page">
            <h2 className="titre"> Bienvenue cher nouveaux année 1</h2>
            <p className="intro">Je m'appelle Maxou et dans ma réalité la terre n'est plus qu'un vatse desert radioactif et
                cette ville n'est plus qu'un vestige depourvu de vie.
                Cela fait des jour que je n'ai pas bu une goutte d'eau. Elle est devenue rare de nos jours et le fleuve est devenu acide.
                <br />
                Pourtant, au milieu de cette apocalypse reside une oasis que peu ont trouvé par le passé.
                Les rare chanceux qui y reside en ce moment sont surnommé les sourcier.
                par chance je possede un message cryptique laissez par l'un d'entre eux il y a des années.
                malheuresuement il est plein de trous
            </p>
            <p className="message">
                "J'ai trouver un petit garcon se balançant dans un ciel spatiale, 
                il se trouve à proximité des ruine de pierre pres de ............. au croisement 
                de .......... et de ............. du coté droit du fleuve acide. j'ignore son mais peut etre que 
                si vous retrouver mon message, vous pourrait lui demander"
            </p>
            <Link to="/h/a">Commencer l'énigme</Link>
        </div>   
    );
}
export default H;