import { useState } from "react";
import "./App.css";
// import Button from "./components/Button";
// import Search from "./components/Search";

function App() {
  // return (
  //   <div className="App">
  //     <Search />
  //     <Button />
  //   </div>
  // );

  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.length) {
      return;
    }

    const newItem = {
      text,
      id: Date.now(),
    };

    setText("");
    setItems(items.concat(newItem));
  };

  return (
    <div>
      <h1>TODOS</h1>

      <ul>
        {items.map((item) => (
          <li title="hasilTest" key={item.id}>{item.text}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo">What needs to be done?</label>
        <br />
        <input title="inputTest" id="new-todo" value={text} onChange={handleChange} />
        <button title="btnTest">Add #{items.length + 1}</button>
      </form>
    </div>
  );
}

export default App;
