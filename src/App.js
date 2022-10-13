import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    async function loadCat() {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=25"
      );
      const catsFromAPI = await response.json();
      setCats(catsFromAPI);
    }
    loadCat();
  }, []);

  return (
    <div>
      <h2>Cats</h2>
      <ul>
        {cats.map((cat) => (
          <li key={cat.id}>
            <img src={cat.url} alt="Random cat."></img>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
