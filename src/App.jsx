import { useState } from "react";
import "./App.css";
import { Users } from "./data";

function App() {
  const [query, setQuery] = useState("");
  return (
    <div className="app">
      <div className="input">
        <input
          type="text"
          placeholder="Search..."
          className="search"
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      <div className="list">
        {Users.filter((user) => user.name.toLowerCase().includes(query)).map(
          (user) => (
            <div className="card">
              <div className="about">
                <img src={user.imgUrl} />
                <h1> Name: {user.name}</h1>
                <p> Username: {user.username}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default App;
