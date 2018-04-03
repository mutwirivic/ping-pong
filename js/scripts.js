//BACK-END
var list=[]
function PingPong(number){
for (var i=1; i <=number ; i++)
  {

   if (i % 15 === 0)
    var a="PingPong"
   else if (i % 3 === 0)
      a="Ping"
   else if (i % 5 === 0)
      a="Pong"
   else
     a=i

    list.push(a)

  }
}


//FRONT-END
$(document).ready(function(){
  $("#ping-form").submit(function(event){
    event.preventDefault();
    var userInput=parseInt($("#input-number").val());
    PingPong(userInput);
    list.forEach(function(element){
    $("#result").append($("<li>").html(element));
    })
  });
});
