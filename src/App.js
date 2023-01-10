import "./App.css";
import CV from "./pages/MainCV";
import { Routes, Route, HashRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<CV />} />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
