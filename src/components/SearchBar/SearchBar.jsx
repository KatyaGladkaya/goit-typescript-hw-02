import s from "./SearchBar.module.css";
import { useState } from "react";
import { toast } from "react-hot-toast";

function SearchBar({ onSubmit }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      toast("Please enter a search term");
      return;
    }

    onSubmit(input.trim());
    setInput("");
  };

  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={input}
          onChange={handleChange}
        />
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>
    </header>
  );
}

export default SearchBar;
