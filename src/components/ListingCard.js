import React, { useState } from "react";

function ListingCard({ listing, handleDelete }) {
  const { id, description, image, location } = listing;
  const [isFavorite, setIsFavorite] = useState(false);

  function onDelete(event) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    }).then(handleDelete(id));
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button
            onClick={e => setIsFavorite(false)}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button
            onClick={e => setIsFavorite(true)}
            className="emoji-button favorite"
          >
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={onDelete} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
