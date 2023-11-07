import { OAuth2Client } from "@badgateway/oauth2-client";

const YahooClient = new OAuth2Client({
    // Yahoo Base URI OAuth2 server
    server: "https://api.login.yahoo.com",

    // OAuth2 client id
    clientId: process.env.REACT_APP_YAHOO_API_CLIENT_ID,

    // OAuth2 client secret
    clientSecret: process.env.REACT_APP_YAHOO_API_SECRET,

    // Token endpoint
    tokenEndpoint: "/oauth2/get_request_token",

    // Authorization endpoint
    authorizationEndpoint: "/oauth2/request_auth"
});


export default YahooClient;

