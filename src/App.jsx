
// import './App.css';
import { Users } from "./users"
import { useState } from 'react';
import Table from "./Table"
import Popup from "./Popup";


function App() {
  const [quary, setQuary] = useState("");
  const [filter, setFilter] = useState("");
  


  const search = (data => {
    return data.filter(item => item.name.toLowerCase().includes(quary))
  })

  const searchFilter = (data => {
    return data.filter(item => item.type.toLowerCase().includes(filter))
  })



  return (

    <div className="App">
      <h2 style={{ textAlign: 'center' }}>VEHICLE MANUFACTURER</h2>
      <div style={{ display: "flex", margin: "10px" }}>
        <div style={{ display: "flex", marginLeft: "10px" }}>
          <p>Search:</p>
          <input type="text" placeholder='Search.....' className="search" style={{ marginLeft: "10px", hight: "5px" }} onChange={e => setQuary(e.target.value)} />
        </div>
        <div style={{ display: "flex", marginLeft: "900px" }}>
          <p>Filter By Vehicle Type:</p>
          <input type="text" placeholder='Enter Type.....' className="search" style={{ marginLeft: "10px", hight: "5px"}} onChange={e => setFilter(e.target.value)}/>
        </div>
      </div>
      
      <Table data={search(Users)}/>
      <Table data={searchFilter(Users)}/>
    </div>
  );
}

export default App;
