import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Cart from './components/Cart';
function App() {
  return (
    <BrowserRouter>
    <Header />
     <div>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/Cart" element={<Cart />}/>
      </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;
