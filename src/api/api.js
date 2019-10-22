const API_URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = async () => {
  const posts = await fetch(`${API_URL}/posts`)
    .catch((e)=> {
      return []
    });

  return posts.json();
};

export const getComments = async () => {
  const comments = await fetch(`${API_URL}/photoss`)
    .catch((e)=> {
      return []
    });

  return comments.json();
};

export const getUsers = async () => {
  const users = await fetch(`${API_URL}/users`)
    .catch((e)=> {
      return []
    });

  return users.json();
};
