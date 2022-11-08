import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import ContainerGrid from './components/ContainerGrid';

function App() {
  const [option, setOption] = useState("Buy");

  const handleChange = (data) => {
    setOption(data);
  }
  return (
    <div className="App">
      <Navbar page = {option} handlePage = {handleChange}/>
      <ContainerGrid page = {option}/>
    </div>
  );
}

export default App;
