import React from "react";

const DashCategoryCard = ({ category, items }) => {
  return (
    <div className="card mb-3">
      <div className="d-flex flex-column pt-2 pt-md-0 flex-md-row align-items-center">
        <img
          src={category.photo}
          className="category-img"
          alt={category.name}
        />
        <div className="card-body">
          <h5 className="card-title text-primary mb-1">{category.name}</h5>
          <div className="mb-2">
            <span>Collection Items Quantity: </span>
            <span className="badge badge-primary text-light">
              {items.reduce(
                (acc, cur) => (cur.category_id === category.id ? acc + 1 : acc),
                0
              )}
            </span>
          </div>
          <p className="card-text text-secondary text-wrap">
            {`${category.description.slice(0, 75)}...`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashCategoryCard;
