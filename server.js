const express = require("express");
const path = require("path");
const LaunchDarkly = require('launchdarkly-node-server-sdk');

const LAUNCH_DARKLY_API_KEY='[ADD-LD-API-KEY-HERE]';


const ldClient = LaunchDarkly.init(LAUNCH_DARKLY_API_KEY, {
    proxyHost: '127.0.0.1',
    proxyPort: 8888
});     


//const ldClient = LaunchDarkly.init(LAUNCH_DARKLY_API_KEY);

const app = express();
const port = process.env.PORT || "8000";


const getFlags = async () => {
    const cnbcServerUser = {
        key: 'cnbc-phoenix-server',
      };    


    let flags = { "error": "yes"};
    try {
        if(!ldClient.initialized()) {
            await ldClient.waitForInitialization();
        }        
        flags = (await ldClient.allFlagsState(cnbcServerUser)).toJSON();
    } catch( error ) {
        console.log("Error fetching LD params: ", error);
    }
    return flags;
}

app.get("/", async (req, res) => {
    const flags = await getFlags();
    res.status(200).send(flags);    
});

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});