import rallys from '../data/Rally.json';
import review from '../data/Review.json';



export function getRallyReviewDetail(rallyCode){
    return rallys.filter(rally => rally.rallycode === review.rallyCode)[0];
}