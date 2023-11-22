/*
=================================================================
NODE JS | EXPRESS
=================================================================
- Difference b/ Client and Server
- Client: Send requests and receive responses
- Server: Receive requests, looks for files, and send responses
- JS does not have the ability to connect to the network or access the file system in your computer
- JS is a language that can only do what the hosting environment allows:
- When we run JS in the browers, the browser gives JS access to the WEB APIs (DOM, Fetch)
- What does Serves Need? (Network Access and Disk Access)
- The server needs to be able to hear the files you want and the provide you with those files.
- Node.js is a hosting environment that allows JS to have disk access and network access
- Tech definition:  Node.js is a JavaScript runtime built on Chrome's V8 engine
- The V8 engine is the compiler that breaks down our JS on the brower and in Node.js to binary code that the computer understand
- Just as the browser comes with WEB APIs, Node.js brings a lot of additional functionalities in the form of Modules (libraries or collections of functions) to the server side JS
- Modules: HTTP (network access) | FS (file system access)
- Packages (grouping of custom modules) -> npm install

Why do I need to create a web app or website using client-side and server-side logic instead of just client-side?
1 - Data Persistence: Back-end development allows for data to be stored persistently in databases. This is crucial for any application that needs to store user data, such as profiles, posts, or settings. Without a back-end, data can only be stored temporarily in the user's browser and would be lost when the browser is closed.
2 - Dynamic Content Generation: Back-end code can dynamically generate HTML, which allows for more complex and personalized user experiences. For example, when you log into a social media site, the back-end fetches your unique content, like your posts and friend list, and generates HTML for your specific case.
3 - Security: Handling sensitive data, like user authentication (logins and passwords), should always be done on the back-end for security reasons. Front-end code is visible to users and can be manipulated, making it unsuitable for secure operations.
4 - Data Processing and Business Logic: Complex calculations and operations are best handled on the server (back-end) to reduce the computational load on the client’s device. This ensures the application runs smoothly even on devices with limited processing power.
5 - API Integration: The back-end can act as an intermediary for API calls to other services. This is important for hiding API keys and other sensitive information from the client-side, as well as for processing and filtering the data before sending it to the front-end.
6 - Scalability: Back-end code helps in managing and scaling the application. For instance, if your website has high traffic, the server can be scaled up to handle the load, something that's not possible if all the code is on the front-end.

---------------------------------------------------------------------
*CREATE A HTTP & FS NODE SERVER - STEP BY STEP
Install recommended version of Node.js (Just need to do it once)
1 - npm init //  initialize a new Node.js project, creates a package.json (contains Project Metadata, lists all the project dependencies)
2 - Create an index.html file
3 - Create a server.js file
4 - Write the code


const http = require("http");
const fs = require("fs");
const PORT = 8000

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("index.html", (error, data) => {
      if (error){
        res.writeHead(404)
        res.write('Error: File not Found')
      } else {
        res.write(data);
      }
      res.end();
    });
})

server.listen(PORT, (error) => {
  if (error){
    console.log('Something went wrong', error)
  }else {
    console.log(`Server is listening on port ${PORT}`)
  }
})


5 - To run the server: node server.js
6 - Open brower on localhost:8000
7 - To kill the server Ctrl + C

---------------------------------------------------------------------
*CREATE A NODE.JS SERVER - STEP BY STEP
1 - npm init
2 - Create an index.html file
3 - Create style.css file
4 - Create the script.js file
5 - Create a server.js file
6 - Write the code


const http = require("http"); //listen and responde to requests
const fs = require("fs"); //look and grab the files
const url = require("url"); //look at the url that comes as part of the request

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  console.log(page);
  if (page == "/") {
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (page == "/css/style.css") {
    fs.readFile("css/style.css", function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == "/js/main.js") {
    fs.readFile("js/main.js", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else ((err, data) => {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      res.write(data);
      res.end();
    });
});

server.listen(8000);


7 - To run the server: node server.js
8 - Open brower on localhost:8000
9 - To kill the server Ctrl + C
---------------------------------------------------------------------
*CRUD
CRUD is not part of Node.js. It is a set of HTTP verbs that are used to create, read, update, and delete data. Node.js can be used to implement CRUD, but it is not required. There are other frameworks and libraries that can be used to implement CRUD, such as Express.js and Sequelize.

Create -- Post (Make something)
Read   -- Get (Get something)
Update -- Put (Change something)
Delete -- Delete (Remove something)
---------------------------------------------------------------------
*EXPRESS
Express is a web application framework for Node.js. It provides a number of features that make it easy to develop web applications, such as routing, middleware, and template engines.

*Setting up the Project
npm init
npm install express --save


const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  response.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log(`The server is runnig on PORT ${PORT}`);
});






*/
