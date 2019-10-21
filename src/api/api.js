const API_URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = async () => {
  const response = await fetch(`${API_URL}/posts`);
  const posts = response.json();
  return posts;
};

export const getComments = async () => {
  const response = await fetch(`${API_URL}/photos`);
  const comments = response.json();
  return comments;
};

export const getUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  const users = response.json();
  return users;
};
