import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Books = ({ books, deleteBook }) => {
  const navigate = useNavigate();
  
  const getRandomRating = () => Math.floor(Math.random() * 6);

  const handleUpdate = (isbn) => {
    console.log("navigate");
    // Navigate to the update route with the book ISBN as a URL parameter
    navigate(`/update/${isbn}`);
  };

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-gray-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div
            key={book._id}
            className="bg-gray-800 rounded-2xl shadow-md overflow-hidden group hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          >
            <Link
              to={`/book/${book.isbn}`} // Link to the book details page
              className="block flex-1"
            >
              <img
                src={book.poster}
                alt={book.title}
                className="w-full h-56 object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h2 className="text-lg font-bold mb-2">{book.title}</h2>
                  <p className="text-gray-400 mb-2">by {book.author}</p>
                  <p className="text-gray-100 mb-4">${book.price.toFixed(2)}</p>
                  <div className="flex items-center mb-4">
                    {Array.from({ length: 5 }, (_, index) => (
                      <svg
                        key={index}
                        className={`w-5 h-5 ${
                          index < getRandomRating()
                            ? 'text-yellow-400'
                            : 'text-gray-500'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 .587l3.668 7.431 8.163 1.184-5.904 5.751 1.395 8.14-7.322-3.849-7.322 3.849 1.396-8.14-5.905-5.751 8.163-1.184z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="hidden group-hover:block mt-4">
                  <p className="text-gray-400 mb-2">Description: {book.description}</p>
                  <p className="text-gray-400 mb-2">Publisher: {book.publisher}</p>
                  <p className="text-gray-400">Pages: {book.pages}</p>
                </div>
              </div>
            </Link>
            <div className="flex justify-between p-6">
              <button
                onClick={() => handleUpdate(book.isbn)}
                className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Update
              </button>
              <button
                onClick={() => deleteBook(book.isbn)}
                className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
