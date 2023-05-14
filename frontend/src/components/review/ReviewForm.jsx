import React, { useState } from 'react';

const ReviewForm = ({ onSubmit, productId }) => {
  const [reviewTitle, setReviewTitle] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // generate unique review ID
    const reviewId = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);

    const reviewData = {
      review_id: reviewId,
      review_title: reviewTitle,
      rating: rating,
      description: description,
      product_id: productId
    };

    onSubmit(reviewData);

    // clear form fields
    setReviewTitle('');
    setRating('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="productId">Product ID:</label>
        <input type="text" id="productId" value={productId} readOnly />
      </div>

      <div>
        <label htmlFor="reviewTitle">Review Title:</label>
        <input type="text" id="reviewTitle" value={reviewTitle} onChange={(event) => setReviewTitle(event.target.value)} required />
      </div>

      <div>
        <label htmlFor="rating">Rating:</label>
        <input type="number" id="rating" min="1" max="5" value={rating} onChange={(event) => setRating(event.target.value)} required />
      </div>

      <div>
        <label htmlFor="description">Description:</label>
        <textarea id="description" value={description} onChange={(event) => setDescription(event.target.value)} required></textarea>
      </div>

      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
