import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Pockemon() {
  let [poknum, setpoknum] = useState("");
  let [pokname, setpokname] = useState("");
  let [pokmove, setpokmove] = useState("");
  useEffect(() => {
    async function GetPokData(){
        let Data= await axios.get(`https://pokeapi.co/api/v2/pokemon/${poknum}`)
        setpokname(Data.data.name);
        setpokmove(Data.data.moves.length);
    }
    GetPokData();
  });
  return (
    <div>
      <h1>You choose <span style={{color:"red"}}>{poknum}</span> value</h1>
      <h1>My name is <span style={{color:"red"}}>{pokname}</span> </h1>
      <h1>i have <span style={{color:"red"}}>{pokmove}</span> Moves </h1>
      <select   
        name=""
        id=""
        value={poknum}
        onChange={(event) => {
          setpoknum(event.target.value);
        }}
      >
        <option value="">----select----</option>
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
}
