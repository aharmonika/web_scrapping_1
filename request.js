// write ->npm i request in the console to install request module
// to extract data -> "cheerio" module is used
// to install cheerio write -> npm i cheerio in the console

let request = require("request"); // request module to make request to any website for getting the html document/file
let cheerio = require('cheerio');
request("https://www.npmjs.com/package/cheerio",cb);
function cb(error,response,html){

    if(error){
        console.log(error);// print the error if occured
    }else if(response.statusCode ==404){
        console.log("page not found");// response of page not found will be shown if user have entered wrong URL

    }else {
        data_Extracter(html) // in this body part, html file will be printed
    }
}

function data_Extracter(html){
    //search tool
    let searchTool = cheerio.load(html);// searchTool is a function which is used to load the html
    //css selector
    let element_rep = searchTool("#readme>h1"); // element_rep -> element representative -> this is an object // we are passing selector like (#readme>h1)
    //text
    let ModuleName = element_rep.text();// to get the text only.
    console.log("Module_Name",ModuleName);

} console.log("After");