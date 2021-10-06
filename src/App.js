import './App.css';
import { Tarea } from './Components/Tarea';
import { ListHeader } from './Components/ListHeader';

const tareas = [
 { id:1, nombre: "Buy new sweatshirt", completado:true},
 { id:2, nombre: "Read an article", completado:false},
 { id:3, nombre: "Watch a movie", completado:false},
 { id:4, nombre: "Listen to a podcast", completado:false},
];

const agregarTarea = ()=>{

  let id = tareas.length + 1;
  let nombre = document.getElementById('nuevaTarea').value;
  tareas.push({ id: id, nombre: nombre, completado: false});

};
function App() {
  return (
    <div className="App">
      <ListHeader/>
      {
        tareas.map( 
          tarea => <Tarea tarea={tarea}/>
        )
      }
      <input id="nuevaTarea" type="text" placeholder="nueva tarea"/>
      <button onClick={agregarTarea}></button>
    </div>
  );
}

export default App;
