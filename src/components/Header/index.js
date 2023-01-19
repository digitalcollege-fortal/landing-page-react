import appleButton from "./img/apple.png" 
import playButton from "./img/play.png"
import smartphone from "./img/smartphone.png";

import "./styles.css";

export default function Header() {
    return (
        <header className="header">
            <div>
                <h1>Titulo chamando atenção</h1>
                <p>Qualquer coisa bla bla bla</p>

                <img src={appleButton}/>
                
                <img src={playButton}/>
            </div>

            <div>
                <img src={smartphone}/>
            </div>
        </header>
    )
}