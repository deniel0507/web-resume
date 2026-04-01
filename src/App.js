import logo from './logo.svg';
import './App.css';
import MainResume from './page/MainResume';
import { HashRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/style/main.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainResume/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
