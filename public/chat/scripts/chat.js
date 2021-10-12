let messages = [];
let user = {};
  
const socket = io.connect('http://localhost:3000')
const logInButton = document.querySelector('#chat-login-submit');

logInButton.addEventListener('click', (e) => {
  e.preventDefault();
  const loginForm = document.querySelector('#chat-login-form');
  const { chatLoginName, chatLoginSurname, chatLoginEmail, chatLoginAge, chatLoginAlias } = loginForm
  const userData = {
      name: chatLoginName.value,
      surname: chatLoginSurname.value,
      email: chatLoginEmail.value,
      age: chatLoginAge.value,
      alias: chatLoginAlias.value,
      avatar: 'https://picsum.photos/seed/picsum/60/60',
  }

  socket.emit('log-in', userData);
})

const sendMessageButton = document.querySelector('#chat-message-submit');

sendMessageButton.addEventListener('click', (e) => {
  e.preventDefault();
  const chatForm = document.querySelector('#chat-form');
  const { newMessage } = chatForm;
  const message = {
    userId: user.id,
    timestamp: new Date().toISOString(),
    text: newMessage.value
  }
  newMessage.value = '';

  socket.emit('new-message', message);
});

socket.on('messages', data => {
  messages = [...data]
  const lastMessage = messages[messages.length - 1]
  addMessage(lastMessage);
})

socket.on('log-in', (data) => {
  user = data;
  const chatLoginContainer = document.querySelector(".chatLogin__container")
  const chatContainer = document.querySelector(".chat__container")
  chatLoginContainer.classList.remove("active");
  chatLoginContainer.classList.add("hidden");
  chatContainer.classList.add("active");
  chatContainer.classList.remove("hidden");
});

const addMessage = (message) => {
  const messageLog = document.querySelector('.chat__log--ul');
  const timestamp = new Date(message.timestamp).toUTCString();
  const messageFormatted = {...message, timestamp}
  const html = ejs.render(
    `<li class="chatBubble__container">
      <div class="chatBubble__profile">
        <div>
          <img src="<%= message.author.avatar %>" class="chatBubble__avatar" />
        </div>
        <div class="chatBubble__messageData">
          <span class="chatBubble__name"><%= message.author.name %> <%= message.author.surname %></span>
          <span class="chatBubble__date"><%= message.timestamp %></span>
        </div>
      </div>
      <div class="chatBubble__message">
        <span><%= message.text %></span>
      </div>
    </li>`, 
    { message: messageFormatted }
  );

  messageLog.innerHTML += html;
}
