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

URL ANATOMY
https://example.com:8000/blog?search=test&sort_by=created_at#header
   |          |      |     |                    |              |
Protocol    Domain  Port  Path           Query Parameters   Fragment

GIT IGNORE
1 - touch .gitignore
2 - node_modules (adds the node modules folder to the .gitignore file and do not push them to github)
---------------------------------------------------------------------
*CREATE A HTTP & FS NODE SERVER - STEP BY STEP
Install recommended version of Node.js (Just need to do it once)
1 - npm init //  initialize a new Node.js project, creates a package.json (contains Project Metadata, lists all the project dependencies and core NODE modules)
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


7 - To run the server: node server.js
8 - Open brower on localhost:8000
9 - To kill the server Ctrl + C
---------------------------------------------------------------------
*CRUD OPERATIONS
CRUD is not part of Node.js. It is a set of HTTP verbs that are used to create, read, update, and delete data. Node.js can be used to implement CRUD, but it is not required. There are other frameworks and libraries that can be used to implement CRUD, such as Express.js and Sequelize. These 4 HTTP verbs made up the majority of operations performed by full-stack apps.

Create -- Post (Make something)
Read   -- Get (Get something)
Update -- Put (Change something)
Delete -- Delete (Remove something)

---------------------------------------------------------------------
*EXPRESS
Express is a popular web application framework for Node.js. It's designed to build web applications and APIs with ease and efficiency. 
- Minimalist and Flexible: Express is known for being minimal yet highly flexible. It provides a thin layer of fundamental web application features without obscuring Node.js features.
- Middleware: Express uses middleware functions to process requests and responses. Middleware functions can execute any code, make changes to the request and response objects, end the request-response cycle, or call the next middleware in the stack.
- Routing: It offers a robust routing system that allows you to define routes in your application based on HTTP methods and URLs. This makes it easy to build RESTful APIs.
- Performance: Being a lightweight framework, it doesn't add much overhead, thus maintaining the high performance of Node.js.
- Simplicity: Writing server-side code with Express is straightforward, making it a great choice for beginners and experienced developers alike.
- Community and Ecosystem: Express has a large and active community. There's a wealth of resources available, such as middleware, tutorials, and support forums.
- Integration: It integrates seamlessly with many other Node.js libraries and tools, like templating engines (e.g., Pug, EJS), database ORM tools (e.g., Mongoose for MongoDB), and more.
- Error Handling: Express provides a centralized error handling mechanism, simplifying error management in your applications.

---------------------------------------------------------------------
*CREATE A EXPRESS SERVER - STEP BY STEP

/////////////////CLIENT-SIDE CODE
document.querySelector("button").addEventListener("click", displayInfo);

async function displayInfo() {
  const countryNames = document.querySelector("input").value;
  try {
    const res = await fetch(
      `https://express-template-server-api.up.railway.app/api/${countryNames}`
    );
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

/////////////////SERVER-SIDE CODE
1 - npm init
2 - npm install express --save //install express and adds it into the package.json with the rest of dependencies and node modules
3 - npm install cors --save (allows a web page to make requests to a domain different from the one that served the web application.)
3 - Create an index.html
4 - Create a server.js
5 - Write the code


const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

//JSON DATA
const cityCapitals = {
  japan: {
    capital: "Tokyo",
    population: "125.8 million",
    established: "660 BC",
    area: "377,975 square kilometers",
  },
  france: {
    capital: "Paris",
    population: "67.39 million",
    established: "843 AD",
    area: "643,801 square kilometers",
  },
  australia: {
    capital: "Canberra",
    population: "25.69 million",
    established: "1901",
    area: "7.692 million square kilometers",
  },
  canada: {
    capital: "Ottawa",
    population: "38.01 million",
    established: "1867",
    area: "9.985 million square kilometers",
  },
};

//SERVER-LOGIC

app.get("/api/:countryNames", (req, res) => {
  const countries = req.params.countryNames.toLowerCase();
  if (cityCapitals[countries]) {
    res.json(cityCapitals[countries]);
  } else {
    res.json(`We will add ${countries} to our database soon`);
  }
});

app.listen(PORT, () => {
  console.log(`The server is running on PORT ${PORT}`);
});

*/
