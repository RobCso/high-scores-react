import React from "react";

const Table = (props) => {
  return (
    <div className="App">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">High Scores per Country</th>
          </tr>
        </thead>
        <tbody>
          {props.results
            .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
            .map((item, index) => {
              return (
                <tr key={index} className="country-block">
                  <tr>High Scores: {item.name}</tr>
                  {item["scores"]
                    .sort((a, b) => (a.s < b.s ? 1 : b.s < a.s ? -1 : 0))
                    .map((score, index) => {
                      return (
                        <tr key={index}>
                          {score.n} : {score.s}
                        </tr>
                      );
                    })}
                  
                </tr>
              );
            })}
        </tbody>
        {/* <tbody>
          <tr>
            <th>three</th>
            <th>four</th>
          </tr>
        </tbody> */}
      </table>
    </div>
  );
};

export default Table;
