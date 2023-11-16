/*
=================================================================
NODE JS
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
- Install Node.js 18.2.0 Current from the official site
- To start the server in the Terminal: node script.js (open localhost:8000 in your browser)
- to kill the server: Ctrl C

---------------------------------------------------------------------
*Creating a Server for HTTP & FS
const http = require("http");
const fs = require("fs");
http
  .createServer((req, res) => {
    fs.readFile("index.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(8000);






*/
