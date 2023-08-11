const express = require('express');
const notes = require('./data/notes');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
// const e = require('express');


const app = express();
dotenv.config();
connectDB(); 
app.use(express.json());

app.get('/', (req, res) => {res.send("Api is running");});

app.get('/api/notes', (req, res) => { res.json(notes);});

// app.get('/api/notes/:id', (req, res) => { 
//     const note = notes.find(n => n._id === req.params.id);
//     res.send(note);
// })

app.use('/api/users', userRoutes)

app.use(notFound, errorHandler)

const PORT = process.env.PORT;
app.listen(PORT,console.log(`App Started on ${PORT}`)); 
// app.listen(5000,console.log(`App started on port 5000`)); 
