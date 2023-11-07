import {createContext, useCallback, useState} from 'react';
import YahooClient from "../YahooClient";
import axios from "axios";

const ApiContext = createContext({});

function Provider({children}) {
    /**
     * api call to get current user's team data (default yahoo team)
     * TODO: handle multiple teams/leagues, implement default handling (ex. NFL - default user league)
     **/
    const getTeamData = useCallback(async () => {
        // const response = await axios.get("", {});
        // return response.data.results;
        //console.log(token);
        return "Success";
    }, []);
    /**
     * TODO: setup proper local container or vm so local env requests are same origin, yahoo req. strict origin
     * proxy not working. Backend trigger not working to handle response. server oauth lib has no functions to consume
     * auth-code.
     */
    const getLogin = async() => {
        console.log("requestLogin");
        const response = await axios.get("/connect/yahoo", {proxy: {protocol:"https", host:"127.65.43.21", port:"443"}});
        console.log(await response);
        return response;
    }

    const getAccessCode = async() => {
        const response = await YahooClient.authorizationCode.getAuthorizeUri({
            redirectUri: "https://camsfantasyapp.ca/auth"
        });
        return response;
    }

    const context = {
        getTeamData,
        getAccessCode,
        getLogin
    }

    return (
        <ApiContext.Provider value={context}>{children}</ApiContext.Provider>
    );
}

export {Provider};
export default ApiContext;
