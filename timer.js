$(document).ready(function(){
  $("#displaytimer").hide();
  $("button").click(function(){
    // pulling data from input fields
    var ddays=$("#setddays").val();
    var udays=$("#setudays").val();
    var dhours=$("#setdhours").val();
    var uhours=$("#setuhours").val();
    var dminutes=$("#setdminutes").val();
    var uminutes=$("#setuminutes").val();
    var dseconds=$("#setdseconds").val();
    var useconds=$("#setuseconds").val();
    // convert to days, hours, minutes, seconds
    var days=(parseInt(ddays+udays));
    var hours=(parseInt(dhours+uhours));
    var minutes=(parseInt(dminutes+uminutes));
    var seconds=(parseInt(dseconds+useconds));
    // convert days to milliseconds
    var dtoms=(((days*24)*60)*60)*1000;
    // convert hours to milliseconds
    var htoms=((hours*60)*60)*1000;
    // convert minutes to milliseconds
    var mtoms=(minutes*60)*1000;
    // convert seconds to milliseconds
    var stoms=seconds*1000;
    // total time in milliseconds
    var totalmsecs=dtoms+htoms+mtoms+stoms;
    $("#settimer").hide();
    $("#displaytimer").show();
    var x=setInterval(function(){
      days=Math.floor(totalmsecs/(1000*60*60*24));
      $("#days").text(days);
      hours=Math.floor(totalmsecs%(1000*60*60*24)/(1000*60*60));
      $("#hours").text(hours);
      minutes=Math.floor(totalmsecs%(1000*60*60)/(1000*60));
      $("#minutes").text(minutes);
      seconds=Math.floor(totalmsecs%(1000*60)/(1000));
      $("#seconds").text(seconds);
      if(totalmsecs==30000){
        $("#chime").trigger("play");
        $("#displayalert").html("<p>You have about 30 seconds or so.</p>");
        $("#soundoff").html("<button onclick='soundoff()'>Turn chime off</button>");
      }
      if(totalmsecs<=0){
        clearInterval(x);
        $("#soundoff").hide();
        $("#displayalert").html("<h2>Time's up</h2>");
      }
      totalmsecs-=1000;
    }, 1000);
  });
});

function soundoff(){
  $("#chime").trigger("pause");
}





