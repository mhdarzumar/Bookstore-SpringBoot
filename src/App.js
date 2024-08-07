import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import api from './api/axiosConfig';
import './App.css';
import AddBook from './components/AddBook';
import Bookdetails from './components/Bookdetails';
import Books from './components/Books';
import Review from './components/Review';
import SideBar from './components/SideBar';
import UpdateBook from './components/Update';
import "./index.css";

function App() {
  const [books, setBooks] = useState([]);
  const [book , setBook] = useState();
  const [review , setReview] = useState([]);

  const getBooks = async () => {
    try {
      const response = await api.get("/api/v1/books");
      console.log(response.data);
      setBooks(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getOneBook= async(isbn) =>{
    
    try{
    const responce = await api.get(`/api/v1/books/${isbn}`);
    console.log(responce.data);
    setBook(responce.data);
    setReview(responce.data.reviews)
    }
    catch(err)
    {
      console.log(err)
    }
  }

  const deleteBook = async(bookid) =>{
    console.log(bookid)
    await api.delete(`api/v1/books/${bookid}`);
    getBooks();
  }

  

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="App flex min-h-screen">
      <SideBar />
      <main className="flex-1 bg-gray-900 p-8">
        <Routes>
          <Route path="/" element={<Books books={books} deleteBook={deleteBook}/>} />
          <Route path="/AddBook" element={<AddBook />} />
          <Route path="/update/:bookid" element={<UpdateBook/>}/>
          <Route path="/book/:bookid" element={<Bookdetails/>}/>
          <Route path="/Reviews/:movieId" element={<Review />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
