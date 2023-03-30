import reviews from '../data/Review.json';

export function getReviewList() {

    const result = [...reviews].reverse();

    return result;
}

export function getReviewDetail(reviewCode){
    return reviews.filter(review => review.reviewcode === parseInt(reviewCode))[0];
}

export function searchReview(reviewname){
    return reviews.filter(review => review.reviewname.match(reviewname));
}