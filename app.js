// This program will implement a server that receives
// HTTP requests from clients and sends responses using
// The Express framework.
import express from 'express';
// Make the Express application
const app = express();
// Create a server that listens for requests from clients.
app.listen(3000, () => console.log('listening on port 3000'));
// The port is like a numerical address that refers to
// an application connected to the internet - our server

// BREAK UNTIL 1:42
// HTTP is a protocol for handling communications
// over the web between a client and a server.
// HTTP is a request/response protocol - client makes the
// request, the server responds.
// An HTTP request from the client has the following parts:
/*
    - METHOD: the method describes what the client is trying
    to do. Examples:
        - GET: the client wants to get something (maybe a
        web page.)
        - POST: the client is trying to create something on
        the server. Maybe creating a new user; maybe handing
        in an assignment (creating a new assignment document
        on the server); creating a thread, blog post
        - DELETE
    - PATH: part of the URL used to route the request to the
    part of the program that will respond.
*/

// Let's handle GET requests that go to domain + /hello-world
app.get('/hello-world', (req, res) => {
  // This function is called automatically when we receive
  // a GET request to the path /hello-world
  res.send('Hello Node.js World!'); // Sending an HTTP response
});

// CHALLENGE: when receiving a GET request to
// the path /welcome, send a response with an HTML tag
// h1 with the text 'welcome to our program'
app.get('/welcome', (req, res) => {
  // res.send sends text/html type by default
  res.send('<h1>Welcome to our program</h1>');
});

// Sending a JavaScript object as a response instead of
// text/html
const pets = {
  cat: 'nice companions to have around',
  bird: 'fun but noisy',
  fish: 'easy to care for',
};
app.get('/all-pets', (req, res) => {
  res.json(pets);
});

app.get('/pet/:name', (req, res) => {});

// Sending files (like HTML files and CSS files)
app.get('/page/ index', (req, res) => {
  res.sendFile('files/test.html' ,root:import.meta.dirname );
});

// what if we want to send a file with ANY name that is stored in our file folder?
app.get('/page/:pageName', (req, res) => {
  res.sendFile(`files/${req.params.pageName}.html`, { root: import.meta.dirname });
