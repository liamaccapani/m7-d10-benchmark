import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";


import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SearchBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
