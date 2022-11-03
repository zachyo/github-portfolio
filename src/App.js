import './App.css';
import { Route, Routes } from "react-router-dom";
import Homepage from './components/homepage/homepage';
import Navbar from './components/navbar/navbar';
import Repos from './components/repos/repos';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="repos" element={<Repos/>} />
      </Routes>
    </div>
  );
}

export default App;
