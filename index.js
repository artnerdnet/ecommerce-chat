import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import './src/config/db.js';
import router from './src/routers/routes.js';
import * as http from 'http';
import path from 'path';
import { initWS } from './src/websocket/sockets.js';

dotenv.config();
const __dirname = path.resolve();
const app = express();
const publicPath = path.join(__dirname, '/public/');
const mongoURI = process.env.MONGO_URI

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(publicPath))
app.set('views', publicPath);
app.set('view engine', 'ejs');


app.get('/chat', (req, res) => {
	res.render('/chat/views/index', { messages }); 
});

app.get('/', (req, res) => {
	res.render('index', { messages: [] });
});

const server = http.Server(app);
server.listen(process.env.PORT, () => console.log('Server running on port:', process.env.PORT));

initWS(server);

app.use('/api', router);
app.listen(process.env.WS_PORT, () => console.log('Websocket server running on port:', process.env.WS_PORT));


try {
  const connected = mongoose.connect(
    mongoURI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )

  if (connected) {
    console.log('Connected successfully to MongoDB')

    mongoose.connection.once('open', _ => {
      console.log('Database connected:', 'ecommerce')
    })

  } else {
    console.log('There has been an error connecting to MongoDB')
  }
} catch (error) {
  console.log(`Error ${error}`)
};
