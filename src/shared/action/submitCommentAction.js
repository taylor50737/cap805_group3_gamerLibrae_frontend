import { postComment } from '../api/comments';

export const submitCommentAction = async ({ request, params }) => {
  const formData = await request.formData();
  const comment = Object.fromEntries(formData);
  const res = await postComment(params.rid, comment);
  return res;
};
