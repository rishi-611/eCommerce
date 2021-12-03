import React from "react";

const Rating = ({ rating, color = "#ff9529", text }) => {
  return (
    <React.Fragment>
      <span className="rating-box" style={{ color }}>
        <span>
          <i
            className={`${
              rating >= 1
                ? "fas fa-star"
                : rating >= 0.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }`}
          ></i>
        </span>{" "}
        <span>
          <i
            className={`${
              rating >= 2
                ? "fas fa-star"
                : rating >= 1.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }`}
          ></i>
        </span>{" "}
        <span>
          <i
            className={`${
              rating >= 3
                ? "fas fa-star"
                : rating >= 2.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }`}
          ></i>
        </span>{" "}
        <span>
          <i
            className={`${
              rating >= 4
                ? "fas fa-star"
                : rating >= 3.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }`}
          ></i>
        </span>{" "}
        <span>
          <i
            className={`${
              rating >= 5
                ? "fas fa-star"
                : rating >= 4.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }`}
          ></i>
        </span>{" "}
      </span>
      {text && <p className="rating-sub text-muted">{text}</p>}
    </React.Fragment>
  );
};

export default Rating;
