import {get, post, put} from "./lib.mjs"

const url = "https://my-json-server.typicode.com/rahgadda/React.js/users";
const post_body={
                  id: 4,
                  "firts_name": "Rahul Kiran",
                  "last_name": "Gaddam",
                  email: "gaddam.rahul@gmail.com"
                };
const put_body={
                  id: 1,
                  "firts_name": "Rahul Kiran",
                  "last_name": "Gaddam",
                  email: "gaddam.rahul@gmail.com"
                };

get(url).then(response => console.log("Get Successful, Data - " + JSON.stringify(response) +"\n\n"))
        .catch(error => console.log("Get Error Details - " +error+"\n\n") );

post(url, post_body).then(response => console.log("Post Successful, Data - " + JSON.stringify(response))+"\n\n")
        .catch(error => console.log("Post Error Details - " +error+"\n\n") );

put(url+"/1", put_body).then(response => console.log("Put Successful, Data - " + JSON.stringify(response))+"\n\n")
        .catch(error => console.log("Put Error Details - " +error+"\n\n") );