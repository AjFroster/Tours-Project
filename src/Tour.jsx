import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  console.log(info.substring(0, 200));

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img"></img>
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <div>
          <p>{readMore ? info : info.substring(0, 200)}</p>
          <button
            type="button"
            className="info-btn"
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {readMore ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-block delete-btn"
        onClick={() => {
          removeTour(id);
        }}
      >
        Not Interested
      </button>
    </article>
  );
};

export default Tour;
