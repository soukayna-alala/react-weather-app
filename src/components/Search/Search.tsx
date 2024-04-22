import { FormEvent, useRef } from "react";
import Style from "../../App.module.css";
import { SearchProps } from "./interfaces.ts";

export function Search({ onSubmit }: SearchProps) {
  const { myInput, searchButton } = Style;
  const inputElement = useRef<HTMLInputElement>(null!);

  function onSearch(event: FormEvent) {
    event.preventDefault();
    const location = inputElement.current.value;
    onSubmit(location);
  }

  return (
    <form onSubmit={onSearch}>
      <input
        ref={inputElement}
        placeholder="Type Your Location"
        className={myInput}
        name="myInput"
        type="text"
        autoComplete="on"
      />
      <input type="submit" className={searchButton} value={"search"} />
    </form>
  );
}
