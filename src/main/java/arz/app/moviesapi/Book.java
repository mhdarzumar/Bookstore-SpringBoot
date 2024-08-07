package arz.app.moviesapi;
import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

@Document(collection = "BookDetails")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Book {

    @Id
    private ObjectId id;

    private String title;

    private String author;

    private String isbn;


    private String poster;

    private Double price;

    @DocumentReference
    private List<Review> reviews;
}
