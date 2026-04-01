import logo from './logo.svg';
import './App.css';
import MainResume from './page/MainResume';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/style/main.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainResume/>}/>
      </Routes>
    </Router>
  );
}

export default App;
