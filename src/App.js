import './App.css';
import { HashRouter, Route, Link } from "react-router-dom";

function App() {
  return (
      <HashRouter basename={process.env.PUBLIC_URL}>
          <div>
              <p>There we are</p>
          </div>
      </HashRouter>
  );
}

export default App;
