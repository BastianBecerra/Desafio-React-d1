import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componentes/Header';
import CardB from './componentes/Card';
import Foot from './componentes/Footer';


function App() {
  return (
    <div className="App container">
      <div className="row">
      <Header titulo="Maximos goleadores de la seleccion chilena"/>
      <CardB 
        titulo="Marcelo Salas"
        descripcion="Fue capitán de la selección chilena, siendo, hasta el 2017, el máximo goleador con la que marcó 45 goles" 
        url="https://bit.ly/3wU9KlO"
        botonWiki="Biografia"
        LinkWiki="https://bit.ly/3AMtDMK"
        botonVideo="Mejores Goles"
        LinkVideo="https://bit.ly/3cLaR0d"
        ></CardB>
      <CardB 
        titulo="Eduardo Vargas" 
        descripcion="En el segundo casillero se encuentra Eduardo Vargas, con 40 Goles" 
        url="https://bit.ly/3egJueR"
        botonWiki="Biografia"
        LinkWiki="https://bit.ly/3cLbmY9"
        botonVideo="Mejores Goles"
        LinkVideo="https://bit.ly/3wUDMFY"></CardB>
      <CardB 
        titulo="Alexis Sanchez" 
        descripcion="En primer puesto con la selección de fútbol de Chile​ es, con 48 goles" 
        url="https://bit.ly/3TRTOKK"
        botonWiki="Biografia"
        LinkWiki="https://bit.ly/3TApQe5"
        botonVideo="Mejores Goles"
        LinkVideo="https://bit.ly/3AJGXl3"></CardB>
      <Foot></Foot>
      </div>
    </div>
  );
}

export default App;
