import React from "react";

const Table = (props) => {
  props.results.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );
  return (
    <div className="App">
      <table className="table">
        {props.results          
          .map((item, index) => (
            <thead className="country-block">
              <caption className="caption">High Scores : {item.name}</caption>
              {item["scores"].sort((a, b) =>
                a.s < b.s ? 1 : b.s < a.s ? -1 : 0
              ).map((score, index) => {
                return (
                  <tr className="name-scores">
                    <th>{score.n}</th>
                    <th>{score.s}</th>
                  </tr>
                );
              })}
            </thead>
          ))}
      </table>

      {/* <table className="table">
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
                  <caption>High Scores: {item.name}</caption>
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
      </table> */}
    </div>
  );
};

export default Table;
