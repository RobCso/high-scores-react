// import logo from './logo.svg';
import allCountryScores from "./scores.js";
import "./App.css";
import Table from "./Table";

console.log(allCountryScores);

function App() {
  return <Table results={allCountryScores} />;
}

export default App;
