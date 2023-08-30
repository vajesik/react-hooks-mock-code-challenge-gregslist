import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(r => r.json())
      .then(listings => setListings(listings));
  }, []);

  function handleDelete(id) {
    const updatedList = listings.filter(listing => {
      return listing.id !== id;
    });
    setListings(updatedList);
  }

  function handleSearch(searchedItem) {
    const itemsToDisplay = listings.filter(listing => {
      return listing.description
        .toLowerCase()
        .includes(searchedItem.toLowerCase());
    });
  }

  function resetListings() {
    fetch("http://localhost:6001/listings")
      .then(r => r.json())
      .then(listings => setListings(listings));
  }

  return (
    <div className="app">
      <Header handleSearch={handleSearch} resetListings={resetListings} />
      <ListingsContainer
        listings={listings}
        handleDelete={handleDelete}
        resetListings
      />
    </div>
  );
}

export default App;
