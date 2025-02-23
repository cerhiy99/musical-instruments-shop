"use client";

import "./SearchBar.scss";
import type React from "react";
import { useEffect, useRef } from "react";
import X from "@/public/X.svg";
import SearchIcon from "@/public/Navbar/NavbarIcons/search.svg";

type SearchBarType = {
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

const SearchBar: React.FC<SearchBarType> = ({ setSearch, isOpen }) => {
  // const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSearch(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      inputRef.current?.focus();
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, setSearch]);

  const handleCloseClick = () => {
    setSearch(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Тут можна додати логіку для обробки пошукового запиту
    console.log("Search query:", inputRef.current?.value);
  };

  return (
    <div className="searchBar__container">
      <form className="searchBar__form" onSubmit={handleSubmit}>
        <input
          autoFocus={isOpen}
          ref={inputRef}
          type="text"
          placeholder="Пошук..."
          className="searchBar__input"
        />
        <button type="submit" className="searchSubmit">
          <SearchIcon width={20} />
        </button>
      </form>
      <button type="button" className="closeButton" onClick={handleCloseClick}>
        <X width={20} strokeWidth={2} />
      </button>
    </div>
  );
};

export default SearchBar;
