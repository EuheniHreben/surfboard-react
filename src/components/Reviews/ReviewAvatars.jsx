function ReviewAvatars({
  reviews,
  activeReview,
  handleReviewClick,
  activeAvatarRef,
}) {
  return (
    <ul className="reviews__icon-list">
      {reviews.map((review) => {
        const isActive = activeReview === review.id;

        return (
          <li
            key={review.id}
            className={`reviews__icon-item ${
              isActive ? "reviews__icon-item--active" : ""
            }`}
          >
            <button
              ref={isActive ? activeAvatarRef : null}
              className="reviews__icon-link"
              type="button"
              aria-pressed={isActive}
              onClick={() => handleReviewClick(review.id)}
            >
              <img
                src={review.avatar}
                alt={review.name}
                className="reviews__icon-img"
              />
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewAvatars;
