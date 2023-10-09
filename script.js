/*
=================================================================
NODE JS
=================================================================
- Difference b/ Client and Server
- Client: Send requests and receive responses
- Server: Receive requests and send responses
- JS does not have the ability to connect to the network or access the file system in your computer
- JS is a language that can only do what the hosting environment allows:
- When we run JS in the browers, the browser gives JS access to the web APIs (DOM, Fetch
- What does Serves Need? (network access and Disk Access)
- The server needs to be able to hear the files you want and the provide you with those files.
- Node.js is a hosting environment that allows JS to have disk access and network access
- Tech definition:  Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine
- The V8 engine is the compiler that breaks down our JS on the brower and in Node.js to binary code that runs in our computer
- Just as the browser comes with web APIs, Node.js brings a lot of additional functionalities in the form of Modules (libraries or collections of functions) to the server side JS
- Modules: HTTP (network access) | FS (file system access)
- Packages (grpuping of custom modules) -> npm install
- Install Node.js 18.2.0 Current from the official site

---------------------------------------------------------------------
//Creating a Server for HTTP & FS






*/

const http = require("http");
const fs = require("fs");
http
  .createServer((req, res) => {
    fs.readFile("demofile.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(8000);
