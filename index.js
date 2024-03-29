var express = require("express");
var app = express();

app.set("port", process.env.PORT || 5000);
app.use(express.static(__dirname + "/public"));

app.get("/", function (request, response) {
  response.send("Hello World!");
});

app.get("/api2", function (request, response) {
  response.send("<button>Go to aps08 profile</button>");
});

app.get("/api3", function (request, response) {
  response.send("<button>Go to TeamShiksha profile</button>");
});

app.get("/ec2", function (request, response) {
  response.send("<button>Demo EC2 CICD</button>");
});

app.listen(app.get("port"), function () {
  console.log("Node app is running at localhost:" + app.get("port"));
});
