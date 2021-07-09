import axios from "axios";
const getData = async (userID) => {
  const { data: userData } = await axios(
    `https://jsonplaceholder.typicode.com/users/${userID}`
  );
  const { data: userPosts } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${userID}`
  );
 
  return {
    userData,
    posts: userPosts ,
  };
};

export default getData;
