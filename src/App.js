import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Homepage from './components/homepage/homepage';
import Navbar from './components/navbar/navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      {/* <header className="App-header">
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
      </header> */}
      {/* <Routes>
        <Route path='home' element={<Homepage/>} />
      </Routes> */}
    </div>
  );
}

export default App;
