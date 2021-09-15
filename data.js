$(document).ready(function(){

function func(){
  init();
  initc();

}
setInterval(func,1000);


function initc(){
var url1="https://api.covid19api.com/summary"	
var d1=' '
$.get(url1,function(data){
   console.log(data.Global);
   d1 =`
   <td>${data.Countries[76].Country}</td>
   <td>${data.Countries[76].TotalConfirmed}</td>
    <td>${data.Countries[76].TotalDeaths}</td>
    <td>${data.Countries[76].TotalRecovered}</td>
    <td>${data.Countries[76].NewDeaths}</td>
    <td>${data.Countries[76].NewConfirmed}</td>
   `   
   $("#data1").html(d1);


  })

}




function init(){
var url="https://api.covid19api.com/summary"
  var d= ' '
  $.get(url,function(data){
   console.log(data.Global);
   d =`
   <td>195</td>
   <td>${data.Global.TotalConfirmed}</td>
    <td>${data.Global.TotalDeaths}</td>
    <td>${data.Global.TotalRecovered}</td>
    <td>${data.Global.NewDeaths}</td>
   `   
   $("#data").html(d);


  })
 
 
}


});