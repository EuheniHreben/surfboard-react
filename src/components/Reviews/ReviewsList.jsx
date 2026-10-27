function ReviewsList({ reviews, activeReview }) {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => {
        const isActive = activeReview === review.id;

        return (
          <li
            key={review.id}
            className={`reviews__item ${isActive ? "reviews__item--active" : ""}`}
          >
            <div className="reviews__img-box">
              <img
                src={review.image}
                alt={review.name}
                className="reviews__img"
              />
            </div>
            <div className="reviews__desc">
              <h3>{review.title}</h3>
              <p>{review.text}</p>
              <div className="reviews__name">{review.name}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewsList;
