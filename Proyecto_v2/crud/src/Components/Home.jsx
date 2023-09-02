import React from "react";
import Menu from "./Menu";
import fondo from './img/img-1.jpg'; 
import imangen2 from "./img/img-2.jpg"
function Home(){

    return(
        

        <div className="container-fluid
        " style={{ backgroundImage: `url(${fondo})` }}>
        <Menu/>

            <h1>TIENDA DE CELULARES Y VIDEO JUEGOS</h1>
            <div className="container=fluid">
             <img src={imangen2} alt=" img" />
            </div>

        </div>
    )
}

export default Home;