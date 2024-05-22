const reactDescriptions = [
  "Fundamental",
  "Crucial",
  "Core",
  "Fundamentos",
  "Messi",
  "Cristiano",
  "Dimitrakis",
  "Sánchez",
];

const array = ["David", "Sánchez", 19, "ISTLC"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function HelloWorld() {
  return <span>Hola Mundo</span>;
}

function HeaderComponent() {
  const description = reactDescriptions[genRandomInt(reactDescriptions.length)];
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>¿Qué miras Bobo?</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
function ArrayComponent() {
  const david = array;
  return(

    <ul>
    <li>Nombre: {david[0]}</li>
    <li>Apellido: {david[1]}</li>
    <li>Edad: {david[2]}</li>
    <li>Lugar de Estudio: {david[3]}</li>
  </ul>
  );
}

function App() {
  return (
    <div>
      <HeaderComponent />
      <main>
        <HelloWorld />
        <h2>Time to get started!</h2>
        <ArrayComponent/>
      </main>
    </div>
  );
}

export default App;