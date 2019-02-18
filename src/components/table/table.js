import React from "react";
import { render } from "react-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Players from "../../data/players.json";

class Table extends React.Component {
  render() {
    const data = Players.results;
    // const data = [
    //   {
    //     name: "Jay Beuner",
    //     position: "RF",
    //     throws: "R",
    //     bats: "R",
    //     team: "Mariners"
    //   },
    //   {
    //     name: "Randy Johnson",
    //     position: "P",
    //     throws: "L",
    //     bats: "R",
    //     team: "Mariners"
    //   },
    //   {
    //     name: "Ken Griffey, Jr.",
    //     position: "CF",
    //     throws: "L",
    //     bats: "L",
    //     team: "Mariners"
    //   }
    // ];
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Player",
              columns: [
                {
                  Header: "Full Name",
                  id: "name",
                  accessor: d => d.name
                }
              ]
            },
            {
              Header: "Position",
              columns: [
                {
                  id: "position",
                  accessor: d => d.position
                }
              ]
            },
            {
              Header: "Throws",
              columns: [
                {
                  Header: "L or R",
                  accessor: "throws"
                }
              ]
            },
            {
              Header: "Bats",
              columns: [
                {
                  Header: "L or R",
                  accessor: "bats"
                }
              ]
            },
            {
              Header: "Team",
              columns: [
                {
                  accessor: "team"
                }
              ]
            }
          ]}
          defaultPageSize={5}
          className="-striped -highlight"
        />
        <br />
      </div>
    );
  }
}

export default Table;
