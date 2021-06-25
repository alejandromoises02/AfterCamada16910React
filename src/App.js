import logo from './logo.svg';
import './App.css';
import {EjercicioAfter} from './after2506/EjercicioAfter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EjercicioAfter/>
      </header>
    </div>
  );
}

export default App;

/*
Crea un componente que contenga una promise que se resuelva a 2 segundos (para simular la 
consulta al back end) y que devuelva una lista de productos

-Debe mostrar los productos destacados
-Debe mostrar la cantidad de productos
-Debe mostrar un mensaje mientras se cumplen los dos segundos

*/ 