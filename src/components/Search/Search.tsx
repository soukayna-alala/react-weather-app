import { FormEvent, useRef } from "react";
import Styles from "./Search.module.css";
import { SearchProps } from "./interfaces.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export function Search({ onSubmit }: SearchProps) {
  const { formContainer, button, searchIconBtn, faLocationDotIcon, input } =
    Styles;
  const inputElement = useRef<HTMLInputElement>(null!);

  function onSearch(event: FormEvent) {
    console.log("onSearch fired");
    event.preventDefault();
    const location = inputElement.current.value.trim();
    onSubmit(location);
  }

  return (
    <form className={formContainer} onSubmit={onSearch}>
      <FontAwesomeIcon className={faLocationDotIcon} icon={faLocationDot} />
      <input
        ref={inputElement}
        placeholder="Type Your Location"
        className={input}
        name="myInput"
        type="text"
        autoComplete="on"
      />
      <button className={button} type="submit">
        <FontAwesomeIcon
          className={searchIconBtn}
          type="submit"
          icon={faMagnifyingGlass}
        />
      </button>
    </form>
  );
}
