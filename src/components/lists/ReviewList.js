import ReviewCardBoard from "../items/ReviewCardBoard";


function ReviewList({reviewPosts}) {

    return (
        <>
            {reviewPosts.map(review => <ReviewCardBoard key = {review.reviewcode} review={review}/>)}
        </>
    );
}

export default ReviewList;