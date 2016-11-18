var Client = require('bitbucket-server-nodejs').Client;

var auth = {
    "type": "basic",
    "username": "username",
    "password": "password"
};

var client = new Client('http://localhost:7990/rest/api/1.0');
client.projects.get();

console.log(client.projects.get());
gi
