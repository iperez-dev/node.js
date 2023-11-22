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

  ---------------------------------------------------------------------
*Node Basic Server & API

const http = require("http"); //listen and responde to requests
const fs = require("fs"); //look and grab the files
const url = require("url"); //look at the url that comes as part of the request
const querystring = require("querystring"); //look at the querie parameters that are part of the request
const figlet = require("figlet"); //turn any string into big letters

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == "/") {
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (page == "/otherpage") {
    fs.readFile("otherpage.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (page == "/otherotherpage") {
    fs.readFile("otherotherpage.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (page == "/api") {
    if ("student" in params) {
      if (params["student"] == "leon") {
        res.writeHead(200, { "Content-Type": "application/json" });
        const objToJson = {
          name: "leon",
          status: "Boss Man",
          currentOccupation: "Baller",
        };
        res.end(JSON.stringify(objToJson));
      } //student = leon
      else if (params["student"] != "leon") {
        res.writeHead(200, { "Content-Type": "application/json" });
        const objToJson = {
          name: "unknown",
          status: "unknown",
          currentOccupation: "unknown",
        };
        res.end(JSON.stringify(objToJson));
      } //student != leon
    } //student if
  } //else if
  else if (page == "/css/style.css") {
    //route for css
    fs.readFile("css/style.css", function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == "/js/main.js") {
    //route for js
    fs.readFile("js/main.js", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else {
    figlet("404!!", function (err, data) {
      //404
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
---------------------------------------------------------------------
*EXPRESS






*/
