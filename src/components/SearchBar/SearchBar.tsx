import s from "./SearchBar.module.css";
import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-hot-toast";

type SearchBarProps = {
  onSubmit: (query: string) => void;
};

function SearchBar({ onSubmit }: SearchBarProps) {
  const [input, setInput] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
