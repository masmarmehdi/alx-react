import holbertonLogo from "../assets/holberton.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from "../utils/utils";

function App() {
  return (
    <>
      <div className="App-header">
        <img src={holbertonLogo} alt="Holberton logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label for="email">Email:</label>
        <input type="email" name="email" />
        <label for="password">Password:</label>
        <input type="password" name="password" />
        <button>OK</button>
      </div>
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
    </>
  );
}

export default App;
