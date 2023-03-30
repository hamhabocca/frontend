import reviews from '../data/Review.json';

export function checkReviewStatus(rallycode/*, membercode*/) {

    /* 테스트용 */
    let membernickname = '자전거마스터';

    let newReview = 
    reviews.filter(
        (review => (review.rallycode === parseInt(rallycode)) 
        && (review.reviewwriter == membernickname))
        )

    // console.log(newReview);

    // if(reviews.filter((review => review.rallycode === parseInt(rallycode) && review.reviewwriter == membernickname)))

    if(newReview.length < 1) {
        return false;
    } else {
        return true;
    }
}