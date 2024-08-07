package arz.app.moviesapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository repository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public Review createReview(String reviewBody , String isbn)
    {
        Review review = repository.insert(new Review(reviewBody));

        mongoTemplate.update(Book.class)
                .matching(Criteria.where("isbn").is(isbn))
                .apply(new Update().push("reviewIds").value(review.getId()))
                .first();
        return review;

    }
}
