import React from "react";
import "./App.css";

const tahoe_peaks = [
  { name: "Freel", elevation: 10891},
  { name: "Monument", elevation: 10067},
  { name: "Danny's", elevation: 14982},
  { name: "Mo's", elevation: 34432},
  { name: "Tallac", elevation: 9735}
];

function List({data, renderItem, renderEmpty}) {
  return !data.length ? renderEmpty : (<ul>{data.map((item) => (<li key={item.name}>{renderItem(item)}</li>))}</ul>);
}

function App() {
  
  return (
    <List data={tahoe_peaks} renderEmpty={<p>This list is empty...</p>} renderItem={item => <>{item.name} - {item.elevation} ft.</>}/>
  );
    
}


export default App;

