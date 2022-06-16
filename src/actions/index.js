import jasonPlaceholder from "../apis/jasonPlaceholder";

export const fetchPost = async () => {
  //BAD APPROACH!
  const response = await jasonPlaceholder.get("/posts");

  return {
    type: "FETCH_POSTS",
    payload: response,
  };
};
