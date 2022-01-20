"use strict";

const express = require("express");
const session = require("express-session");
const { ExpressOIDC } = require("@okta/oidc-middleware");

let app = express();

// Globals
const OKTA_OAUTH2_ISSUER = process.env.OKTA_OAUTH2_ISSUER;
const OKTA_OAUTH2_CLIENT_ID = process.env.OKTA_OAUTH2_CLIENT_ID;
const OKTA_OAUTH2_CLIENT_SECRET = process.env.OKTA_OAUTH2_CLIENT_SECRET;

// App settings
app.set("view engine", "pug");

// App middleware
app.use("/static", express.static("static"));

app.use(session({
  cookie: { httpOnly: true },
  secret: "can you look the other way while I type this"
}));

let oidc = new ExpressOIDC({
  issuer: OKTA_OAUTH2_ISSUER,
  client_id: OKTA_OAUTH2_CLIENT_ID,
  client_secret: OKTA_OAUTH2_CLIENT_SECRET,
  appBaseUrl: "http://localhost:3000",
  routes: {
    loginCallback: {
      afterCallback: "/dashboard"
    }
  },
  scope: 'openid profile'
});

// App routes
app.use(oidc.router);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/dashboard", oidc.ensureAuthenticated(), (req, res) => {
  res.render("dashboard", { user: req.userContext.userinfo });
});

app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

oidc.on("ready", () => {
  console.log("Server running on port 3000");
  app.listen(3000);
});

oidc.on("error", err => {
  console.error(err);
});
