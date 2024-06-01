import './Header.css'

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

  function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }

export default function HeaderComponent() {
    const description = reactDescriptions[genRandomInt(reactDescriptions.length)];
    return (
      <header>
        <img src="https://pbs.twimg.com/media/FDUZLRZXMAQHrdd?format=jpg&name=large" alt="Stylized atom" />
        <h1>Don Ramón modo <strong>espartano</strong></h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }