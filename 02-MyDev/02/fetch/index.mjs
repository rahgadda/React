import {get} from "./lib.mjs"

const url = "https://my-json-server.typicode.com/rahgadda/React.js/users";

const getData = get(url);

getData.then(
  (data) => {
    return console.log(data);
  } 
);