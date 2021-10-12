import knex from '../database/knex';

export const formatMessages = (data) => {
  const { name, text } = data;
  return {
    name,
    text,
    time: new Date().toLocaleDateString(),
  };
};
// const messages: Message[] = [];

class MessageRepository {
  // funcion para leer mis messages
  async getAllMessages() {
    try {
      // return messages;
      return await knex.find({});
    } catch (error) {
      console.log('No messages found.');
      return [];
    }
  }

  // funcion para agregar messages
  async postMessage(name, text, time) {
    try {
      const newMessage = {
        name,
        text,
        time,
      };
      const createdMessage = new knex(newMessage);
      return await createdMessage.save();
    } catch (error) {
      console.log('Message was not added' + error);
    }
  }

  async readMessage(id) {
    try {
      return await knex.findOne({ _id: id });
    } catch (error) {
      console.log('No message found');
    }
  }

  async updateMessage(id, data) {
    try {
      return await knex.updateOne({ _id: id }, { $set: data });
    } catch (error) {
      console.log('No message found');
    }
  }

  async deleteMessage(id) {
    try {
      return await knex.deleteOne({ _id: id });
    } catch (error) {
      console.log('Message was not updated');
    }
  }
}

export default MessageRepository;
