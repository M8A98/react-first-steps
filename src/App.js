import logo from './logo.svg';
import './App.css';


//Components

// import Greet from './components/Greet'
// import Counter from "./components/Component"
import Koders from './components/Koders'
import ConditionalRendering from './components/ConditionalRendering'
import Form from './components/Form'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* </Greet name="Mauro"> */}
      {/* <Koders /> */}
      <ConditionalRendering isActive/>
      {/* <Form/> */}
    </div>
  );
}

export default App;
