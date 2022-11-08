import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import ContainerGrid from './components/ContainerGrid';
import moment from "moment";

function App() {
  const [filters, setFilters] = useState({
    homeStatus: "Buy",
    location: "Los Angeles",
    when: moment().format('L'),
    price: "1000-5000K",
    propertyType: "Single Family"
  });

  const { homeStatus, location, when, price, propertyType } = filters;

  const handleChange = (data) => {
    setFilters({...filters, ...data });
  }
  
  return (
    <div className="App">
      <Navbar page = {homeStatus} handlePage = {handleChange}/>
      <ContainerGrid filters = {filters} handleChange = {handleChange} />
    </div>
  );
}

export default App;
