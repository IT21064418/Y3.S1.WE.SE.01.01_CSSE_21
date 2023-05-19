import axios from 'axios';
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ReviewForm = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  const productId = params.id
  const [reviewTitle, setReviewTitle] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // generate unique review ID
    const reviewId = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);

    const reviewData = {
      productID: productId,
      review_id: reviewId,
      review_title: reviewTitle,
      rating: rating,
      Description: description,
    };

    console.log(reviewData);

    axios.post(`http://localhost:4000/api/ratingandreviews`, reviewData).then(() => {
      alert('Review successfully added');
      console.log(reviewData);
    }).catch((err) => {
      alert('ERROR: Review not added');
      console.log(err);
    })

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
