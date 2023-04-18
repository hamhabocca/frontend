import ReviewCardBoard from "../items/ReviewCardBoard";


function ReviewList({reviews}) {

    return (
        <>
            {reviews && reviews.map(review => <ReviewCardBoard key = {review.reviewId} review={review}/>)}
        </>
    );
}

export default ReviewList;