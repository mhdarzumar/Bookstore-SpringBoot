import React, { useState } from 'react';
import api from '../api/axiosConfig';

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: '',
    poster: '',
    price: '',
    reviewIds:[]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async(e) => {
    
    try{
    const responce =  await api.post("/api/v1/books", formData);
    console.log(responce.data);
  }
  catch(err)
  {
    console.log(err);
  }
}

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-6">
      <div className="bg-gray-800 text-gray-200 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Add New Book</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-900 text-gray-100"
              placeholder="Enter book title"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="author">
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-900 text-gray-100"
              placeholder="Enter author name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="isbn">
              ISBN
            </label>
            <input
              type="text"
              id="isbn"
              name="isbn"
              value={formData.isbn}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-900 text-gray-100"
              placeholder="Enter ISBN number"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="poster">
              Poster URL
            </label>
            <input
              type="text"
              id="poster"
              name="poster"
              value={formData.poster}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-900 text-gray-100"
              placeholder="Enter poster URL"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="price">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-900 text-gray-100"
              placeholder="Enter price"
              step="0.01"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};


export default AddBook;
