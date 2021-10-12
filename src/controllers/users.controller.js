import * as userService from '../services/users.services.js';

export const createUser = async (req,res) => {
  const { body } = req;

  try {
    await userService.createUser(body);
    res.status(200).send('User created');
  } catch (e) {
    res.status(400).send(e.message);
  }
}

export const getUsers = async (req,res) => {
  try {
    const users = await userService.getUsers();
    res.status(200).send(users);
  } catch (e) {
    res.status(400).send(e.message);
  }
}

export const getUser = async (req,res) => {
  const { body } = req;

  try {
    const user = await userService.getUser(body.id);
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send(e.message);
  }
}
