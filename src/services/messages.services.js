import { db } from '../config/db.js';
import { getUser } from './users.services.js';

export const postMessage = async (data) => {
  try {
    const message = await db('messages').insert(data);
    return message;
  } catch (e) {
    throw new Error(e)
  }
}

export const getMessages = async () => {
  try {
    const messages = await db('messages').select();
    return messages;
  } catch (e) {
    throw new Error(e)
  }
}

export const getMessage = async (id) => {
  try {
    const message = await db('messages').where({id});
    return {...message};
  } catch (e) {
    throw new Error(e)
  }
}

export const getFullMessages = async () => {
  const messages = await db.select('*').from('messages').then(rows => rows)

  return await formatMessages(messages)  
}

const formatMessages = (messages) => {
  const formattedMessages = messages.map(async (message) => {
    const author  = await getUser(message.userId)
    return {...message, author: author[0]}  
  });
  return Promise.all(formattedMessages);
}
