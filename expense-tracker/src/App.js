// import "./App.css";
// import Header from "./components/Header";
// function App() {
//   return (
//     <div className="App">
//       <Header />
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
export default function App() {
  const [searchText, setSearchText] = useState("");
  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    console.log("insde");
    async function FetchData() {
      const data = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((response) => response.json());
      console.log(data);
      setFetchedData(data);
    }
    FetchData();
  }, []);
  return (
    <div className="App">
      <input
        type="text"
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
        value={searchText}
      ></input>
      {fetchedData.map((object) =>
        object.name.includes(searchText) ? <h3> ~ {object.name}</h3> : null
      )}
    </div>
  );
}
