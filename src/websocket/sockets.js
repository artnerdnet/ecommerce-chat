import { Server } from 'socket.io';
import { getFullMessages, postMessage } from '../services/messages.services.js';
import { createUser } from '../services/users.services.js';

export const initWS = (app) => {
  const io = new Server(app);

  io.on('connection', async (socket) => {
    socket.on('log-in', async(user) => {
      const userId = await createUser(user);
      socket.emit('log-in', { ...user, id: userId });
    });
    socket.on('new-message', async (message) => {   
      await postMessage(message);
      const messages = await getFullMessages();
      
      io.sockets.emit('messages', messages);
      });
    });

  return io;
};
