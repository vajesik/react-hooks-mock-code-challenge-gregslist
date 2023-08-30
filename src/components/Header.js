import React from "react";
import Search from "./Search";

function Header({ handleSearch, resetListings }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleSearch={handleSearch} resetListings={resetListings} />
    </header>
  );
}

export default Header;
