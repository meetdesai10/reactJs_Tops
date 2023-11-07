import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

export default function CovidData() {
  let [CovidData, setCovidData] = useState([]);
  async function getCovidData() {
    const data = await fetch("https://data.covid19india.org/data.json");
    const actualData = await data.json();
    setCovidData(actualData.statewise);
  }
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <div>
      <h1>Covid-19 live data</h1>
      <Table bordered>
        <thead>
          <tr>
            <th>active</th>
            <th> confirmed</th>
            <th> deaths</th>
            <th> deltaconfirmed</th>
            <th> deltadeaths</th>
          </tr>
        </thead>
        <tbody>
            {CovidData.map((val) => {
              return (
                <>
                  <tr>
                    <td className="green">{val.active}</td>
                    <td className="green">{val.confirmed}</td>
                    <td className="red">{val.deaths}</td>
                    <td className="green">{val.deltaconfirmed}</td>
                    <td className="green">{val.deltadeaths}</td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}
