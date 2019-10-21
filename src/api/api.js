const API_URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = async () => {
  const response = await fetch(`${API_URL}/posts`);
  const posts = await response.json();
  return posts;
};

export const getComments = async () => {
  const response = await fetch(`${API_URL}/photos`);
  const comments = await response.json();
  return comments;
};

export const getUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  const users = await response.json();
  return users;
};