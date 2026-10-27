import "./Reviews.scss";
import ReviewsList from "./ReviewsList.jsx";
import ReviewAvatars from "./ReviewAvatars.jsx";
import { reviewsData } from "./ReviewsData.js";
import { useEffect, useRef, useState } from "react";

function Reviews() {
  const [activeReview, setActiveReview] = useState(1);
  const [tailPosition, setTailPosition] = useState(null);

  const cardWrapRef = useRef(null);
  const activeAvatarRef = useRef(null);

  const handleReviewClick = (id) => {
    setActiveReview(id);
  };

  useEffect(() => {
    const updateTailPosition = () => {
      const card = cardWrapRef.current;
      const avatar = activeAvatarRef.current;

      if (!card || !avatar) return;

      const cardRect = card.getBoundingClientRect();
      const avatarRect = avatar.getBoundingClientRect();

      const avatarCenter = avatarRect.left + avatarRect.width / 2;

      setTailPosition(avatarCenter - cardRect.left);
    };

    updateTailPosition();

    window.addEventListener("resize", updateTailPosition);

    return () => {
      window.removeEventListener("resize", updateTailPosition);
    };
  }, [activeReview]);

  return (
    <section
      className="reviews section"
      data-section-id="reviews"
      data-fixed-menu-theme="white"
    >
      <div className="container">
        <h2>Отзывы</h2>

        <div
          className="reviews__card-wrap"
          ref={cardWrapRef}
          style={
            tailPosition !== null
              ? { "--tail-position": `${tailPosition}px` }
              : undefined
          }
        >
          <ReviewsList reviews={reviewsData} activeReview={activeReview} />

          <div className="reviews__tail" aria-hidden="true" />
        </div>

        <ReviewAvatars
          reviews={reviewsData}
          activeReview={activeReview}
          handleReviewClick={handleReviewClick}
          activeAvatarRef={activeAvatarRef}
        />
      </div>
    </section>
  );
}

export default Reviews;
