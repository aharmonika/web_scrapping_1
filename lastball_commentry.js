

let request = require("request"); // request module to make request to any website for getting the html document/file
let cheerio = require('cheerio');

let url = ("https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/ball-by-ball-commentary",cb);
request(url,cb);
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
    let element_rep = searchTool(".match-comment-wrapper .match-comment-long-text"); // element_rep -> element representative -> this is an object // we are passing selector like (#readme>h1)
    //text
    let lastball_commentry= element_rep[0].text();// to get the text only.
    console.log("lastball_commentry", lastball_commentry);

} console.log("After");