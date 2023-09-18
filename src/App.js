import "./styles.css";

import Boxes from "./components/Boxes";

export default function App() {
  function handleClick() {
    alert("You clicked me!");
  }

  function handleMouseOver(event) {
    const element = event.target; //target means <button></button>
    element.textContent = "You are hovering above me";
  }

  function handleMouseOut(event) {
    const element = event.target;
    element.textContent = "Click Me!";
  }

  function handleAppClick(event) {
    const element = event.currentTarget;
    element.style.backgroundColor = "skyblue";
  }

  function handleLinkClick(event) {
    event.preventDefault();
    alert(event.target.href);
  }
  
  return (
    <div className="App" onClick={handleAppClick}>
      <p>This is a test project.</p>
      <button
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Click Me
      </button>
      <Boxes />
      <a href="https://bcit.ca" target="_blank" onClick={handleLinkClick}>
        BCIT Home
      </a>
    </div>
  );
}

// npm install gh-pages --save-dev
// npm run deploy

//<button onClick={() => alert("You clicked me!")}>Click Me</button>
