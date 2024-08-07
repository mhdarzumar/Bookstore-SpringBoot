package arz.app.moviesapi;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookRepository BookRepository;
    public List<Book> allBooks(){
        return BookRepository.findAll();
    }


    public Book getOneBook(String id)
    {

        return BookRepository.findBookByIsbn(id).orElse(null);
    }

    public Book addBook(Book book)
    {
        return BookRepository.save(book);
    }

    public Book updateBook(String id, Book bookDetails) {
        Book book = BookRepository.findBookByIsbn(id).orElse(null);
        if (book != null) {
            if (bookDetails.getTitle() != null) {
                book.setTitle(bookDetails.getTitle());
            }
            if (bookDetails.getAuthor() != null) {
                book.setAuthor(bookDetails.getAuthor());
            }
            if (bookDetails.getIsbn() != null) {
                book.setIsbn(bookDetails.getIsbn());
            }
            if (bookDetails.getPoster() != null) {
                book.setPoster(bookDetails.getPoster());
            }
            if (bookDetails.getPrice() != 0) {
                book.setPrice(bookDetails.getPrice());
            }
            if (bookDetails.getReviews() != null) {
                book.setReviews(bookDetails.getReviews());
            }
            return BookRepository.save(book);
        }
        return null;
    }

    public void deleteBook(String id)
    {
        BookRepository.deleteBookByIsbn(id);
    }
}
