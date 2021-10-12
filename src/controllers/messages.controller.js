import * as messageService from '../services/messages.services.js';

export const postMessage = async (req,res) => {
  const { body } = req;

  try {
    await messageService.postMessage(body);
    res.status(200).send('Message created');
  } catch (e) {
    res.status(400).send(e.message);
  }
}

export const getMessages = async (req,res) => {
  try {
    const messages = await messageService.getMessages();
    res.status(200).send(messages);
  } catch (e) {
    res.status(400).send(e.message);
  }
}

export const getMessage = async (req,res) => {
  const { body } = req;

  try {
    const message = await messageService.getMessage(body.id);
    res.status(200).send(message);
  } catch (e) {
    res.status(400).send(e.message);
  }
}
