import { db } from '../config/db.js';

export const createUser = async (data) => {
  try {
    const userCreated = await db('users').insert(data);
    return userCreated[0];
  } catch (e) {
    throw new Error(e)
  }
}

export const getUsers = async () => {
  try {
    const users = await db('users').select();
    return users;
  } catch (e) {
    throw new Error(e)
  }
}

export const getUser = async (id) => {
  try {
    const user = await db('users').where({id});
    
    return {...user};
  } catch (e) {
    throw new Error(e)
  }
}