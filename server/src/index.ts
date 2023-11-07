// import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import session, { Session } from "express-session";
import grant, { GrantConfig, GrantSession } from "grant";
import { RouteConfig } from "./common/common.route.config";
import { AuthRoutes } from "./auth/auth.route.config";

interface ExpressSession extends Session {grant: GrantSession};
interface ExpressRequest extends Request {session: ExpressSession};

const https = require("https");
const fs = require("fs");

const app = express();
const config = require ("./config.json");

const port = process.env.PORT || 3000;
const cors = require("cors");

//app.all("*", requireAuthentication, loadUser)
app.use(express.json());
app.use(cors());
app.use(session({secret: 'grant', saveUninitialized: true, resave: false}))
    .use(grant.express(config));
app.get("/auth", (req, res) => {
    const request = req as ExpressRequest;
    const session = request.session.grant;
    const response = session.response;
    res.end(JSON.stringify(response, null, 2));
});

app.get("/", (req, res) => {
    res.send("server here... nothing going on. definitely not sentient");
});

https.createServer({
    key: fs.readFileSync('./security/cert.key'),
    cert: fs.readFileSync('./security/cert.pem')},
    app).listen(port);
