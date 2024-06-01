import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreComponents/CoreConcept.jsx";
import TapButton from "./components/TabButton/TapButton.jsx";

const array = ["David", "Sánchez", 19, "ISTLC"];

function HelloWorld() {
  return <span>Hola Mundo</span>;
}
function handleClick(SelectedButton){
  console.log(SelectedButton);
}

function ArrayComponent(props) {
  return (
    <ul>
      <li>Nombre: {props.name}</li>
      <li>Apellido: {props.apellido}</li>
      <li>Edad: {props.edad}</li>
      <li>Lugar de Estudio: {props.estudio}</li>
    </ul>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <HelloWorld />
        <h2>Time to get started!</h2>
        <ArrayComponent
          name={array[0]}
          apellido={array[1]}
          edad={array[2]}
          estudio={array[3]}
        />
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />

            <CoreConcept {...CORE_CONCEPTS[1]} />

            <CoreConcept {...CORE_CONCEPTS[2]} />

            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>

          <section id="examples">
            <h2>Ejemplos</h2>
            <TapButton handleClick={()=>handleClick('Components')}>Components</TapButton>
            <TapButton handleClick={()=>handleClick('JSX')}>JSX</TapButton>
            <TapButton handleClick={()=>handleClick('Props')}>Props</TapButton>
            <TapButton handleClick={()=>handleClick('State')}>State</TapButton>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
