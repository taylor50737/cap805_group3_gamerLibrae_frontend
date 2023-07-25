import { postReview } from '../api/reviews';
import { redirect } from 'react-router-dom';

export const submitReviewAction = async ({ request, params }) => {
  const formData = await request.formData();
  const review = Object.fromEntries(formData);
  console.log(review);
  const res = await postReview(params.id, review);
  console.log(await res.json());
  return redirect(`/game/${params.id}`);
};
