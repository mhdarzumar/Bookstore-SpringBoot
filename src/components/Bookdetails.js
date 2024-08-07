import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/axiosConfig';

const Reviews = () => {
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);
  const revText = useRef();
  const { bookid } = useParams(); // Destructure bookid directly

  useEffect(() => {
    const getBookData = async (bookId) => {
      try {
        const response = await api.get(`/api/v1/books/${bookId}`);
        setBook(response.data);
        setReviews(response.data.reviews || []);
        console.log(response.data.reviews)
      } catch (error) {
        console.error(error);
      }
    };

    getBookData(bookid); // Pass bookid directly
  }, [bookid]);

  const addReview = async (e) => {
    e.preventDefault();

    const reviewBody = revText.current.value;

    try {
      // Make the API request to add the review
      const responce = await api.post('/api/v1/reviews', { reviewBody, isbn: bookid });
 
      console.log(responce.data)
      // Update the reviews state to include the new review
      setReviews((prevReviews) => [
        ...prevReviews,
        { body: reviewBody }
      ]);

      // Clear the input field
      revText.current.value = '';
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-8 bg-gray-900 text-gray-100 min-h-screen">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3 p-4">
          <div className="p-4">
            <h3 className="text-2xl font-bold mb-4">Add a Review</h3>
            <form onSubmit={addReview} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="reviewBody" className="block text-sm font-medium text-gray-300">Review Body</label>
                <textarea
                  id="reviewBody"
                  ref={revText}
                  className="mt-1 block w-full p-2 border border-gray-700 rounded-lg bg-gray-900 text-gray-100"
                  rows="4"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Submit Review
              </button>
            </form>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">Reviews</h3>
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg mb-4 shadow-lg">
                  <p>{review.body}</p>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
        </div>
        <div className="md:w-1/3 p-4">
          <h3 className="text-2xl font-bold mb-4">Book Details</h3>
          {book ? (
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img src={book.poster} alt={book.title} className="w-full h-64 object-cover mb-4 rounded-lg" />
              <h2 className="text-xl font-bold mb-2">{book.title}</h2>
              <p className="text-gray-400 mb-2">by {book.author}</p>
              <p className="text-gray-200 mb-2">ISBN: {book.isbn}</p>
              <p className="text-gray-200 mb-2">Price: ${book.price.toFixed(2)}</p>
              <p className="text-gray-300 mb-4">{book.description}</p>
              <p className="text-gray-400 mb-2">Publisher: {book.publisher}</p>
              <p className="text-gray-400 mb-2">Pages: {book.pages}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
