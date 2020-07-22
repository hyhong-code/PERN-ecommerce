import React from "react";

const DashCategoryCard = ({ category, items }) => {
  return (
    <div class="card mb-3">
      <div className="d-flex align-items-center">
        <img src={category.photo} class="category-img" alt={category.name} />
        <div class="card-body">
          <h5 class="card-title text-primary mb-1">{category.name}</h5>
          <div className="mb-2">
            <span>Collection Items Quantity: </span>
            <span className="badge badge-primary text-light">
              {items.reduce(
                (acc, cur) => (cur.category_id === category.id ? acc + 1 : acc),
                0
              )}
            </span>
          </div>
          <p class="card-text text-secondary">{category.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DashCategoryCard;
