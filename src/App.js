import './App.css';
import { Route, Routes } from "react-router-dom";
import Homepage from './components/homepage/homepage';
import Navbar from './components/navbar/navbar';
import Repos from './components/repos/repos';
import RepoInfo from './components/repo-info/repo-info';
import Overview from './components/overview';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="" element={<Overview/>}>
          <Route path='repos' element={<Repos/>} />
          <Route path='repos/:id' element={<RepoInfo/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
