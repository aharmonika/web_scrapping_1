let request = require("request");
let cheerio = require("cheerio");
// const { fstat } = require("fs");
// const { html } = require("cheerio/lib/api/manipulation");

let url = ("https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard");
 console.log("before");
 request(url,cb);
 function cb (error,response,html){
    if(error){
        console.log(error);// print the error if occured
    }else if(response.statusCode ==404){
        console.log("page not found");// response of page not found will be shown if user have entered wrong URL

    }else {
        data_Extracter(html) // in this body part, html file will be printed
        
    }

 }
     
function data_Extracter (html)
{ let searchTool = cheerio.load(html);
    let bowlerTable = searchTool(".table.bowler tbody tr");

for(let  i = 0; i<bowlerTable.length; i++){
    let cols = searchTool(bowlerTable[i]).find("td"); // this will give the array of each row which contains each and every column
    let name = searchTool(cols[0]).text(); // this will give the name of the bowler
    let wickets = searchTool(cols[4]).text(); // this will give the no of wickets
    console.log(name + " " + wickets);

}

}
console.log("After");