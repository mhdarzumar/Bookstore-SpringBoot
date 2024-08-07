package arz.app.moviesapi;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/books")
@CrossOrigin(origins = "*")
public class BookController {

    @Autowired
    private BookService Service;
    @GetMapping
    public ResponseEntity<List<Book>> getAllBooks() {
        return new ResponseEntity<>(Service.allBooks(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> findOneBook(@PathVariable String id)
    {
        return new ResponseEntity<>(Service.getOneBook(id),HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<Book> addOneBook(@RequestBody Book book)
    {
        return new ResponseEntity<>(Service.addBook(book),HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Book> updateOneBook(@PathVariable String id, @RequestBody Book book) {
        Book updatedBook = Service.updateBook(id, book);
        if (updatedBook != null) {
            return ResponseEntity.ok(updatedBook);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable String id)
    {
        Service.deleteBook(id);
        return ResponseEntity.noContent().build();
    }








}
