const express = require("express");
const app = express();

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {

    //Dynamic homepage variables
  const friends = [
    { name: "Ian", department: "Engineer", interest: "Dota" },
    { name: "Jess", department: "Product Manager", interest: "Running" },
    { name: "Kendra", department: "Product Operations", interest: "Drinking" },
	 { name: "Charmaine", department: "Product Manager", interest: "Giving unsolicited advice" },
  ];
  const tagline = "These are my top 3 + 1 friends in OGP! ";

  res.render("pages/index", {
    friends: friends,
    tagline: tagline,
  });
});

// work page
app.get("/work", function (req, res) {

    //Dynamic work variables
    const projects = [
        { name: "Care360" },
        { name: "Active Aging Centers" },
      ];
    
      res.render("pages/work", {
        projects: projects,
      });
});

// about page
app.get("/interest", function (req, res) {
 

    //Dynamic about variables
    const interests = [
        { interest: "Rock Climbing" },
        { interest: "Biking" },
        { interest: "Giving unsolicied advice" },
    ];

    // res.render("pages/interest");
    res.render("pages/interest", {
        interests: interests,
        });
});

app.listen(3000);
console.log("Server is listening on port 3000");