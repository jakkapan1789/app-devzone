// userStore.js
let users = {};

export const addUser = (username, secret) => {
  users[username] = { secret };
};

export const getUser = (username) => {
  return users[username];
};

export const getAllUsers = () => {
  return users;
};
