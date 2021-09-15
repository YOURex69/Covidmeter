$(document).ready(function(){

f1();
	function f1(){
var url="https://api.covid19api.com/summary"
var i='';
var u='';
var r='';
var g='';
var uk='';

$.get(url,function(d){
   console.log(d);
i=`${d.Countries[76].NewConfirmed}`;
u =`${d.Countries[183].NewConfirmed}`
r=`${d.Countries[142].NewConfirmed}`
g=`${d.Countries[63].NewConfirmed}`
uk=`${d.Countries[182].NewConfirmed}`




var ctx = $("#bar-canvas");
var data={
	labels:["INDIA","USA","RUSSIA","GERMANY","UK"],
	datasets:[
	   {
          label:"New Confirmed Cases",
          data:[i,u,r,g,uk],
          backgroundColor:[
             "rgba(10,20,30,0.8)",
             "rgba(10,20,30,0.8)",
             "rgba(10,20,30,0.8)",
             "rgba(10,20,30,0.8)",
             "rgba(10,20,30,0.8)"
          ] ,
          borderColor:[
           "rgba(10,20,30,1)", 
           "rgba(10,20,30,1)",
           "rgba(10,20,30,1)",
           "rgba(10,20,30,1)",
           "rgba(10,20,30,1)"
          ],
          borderWidth : 1
	   }
	]
};

var chart=new Chart(ctx,{

        type: "bar",
         data : data,
         options : {}


            });


})   //.geturl

} //f1

});