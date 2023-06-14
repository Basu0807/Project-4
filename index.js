
// funtion for clock and message

function getTime(){
    let date = new Date();
    let HH = date.getHours();
    let MM = date.getMinutes();
    let SS = date.getSeconds();
    
    if(HH>12)
    HH=HH-12
    if(HH<10)
    HH= "0"+HH;
    if(MM<10)
    MM= "0"+MM;
    if(SS<10)
    SS= "0"+SS;
    document.getElementById("HH").innerText = HH;
    document.getElementById("MM").innerText = MM;
    document.getElementById("SS").innerText = SS;
    let AM = document.querySelector(".AM")
    if(HH<12){
    AM.textContent="AM"}
    else (HH>12)
    {
        AM.textContent="PM"
    }
    

    let msg1= document.querySelectorAll(".display")

    let newtime= new Date()
    let hh= newtime.getHours();

    if( hh>=12 && hh<15){
      msg1[0].innerText = "LET'S HAVE SOME LUNCH !!"
      } 
   else if(hh>= 16 && hh < 20){
      msg1[0].innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
  }
   else if(hh >= 20 && hh < 6){
      msg1[0].innerText = "CLOSE YOUR EYES AND GO TO SLEEP"
  }
  else if(hh>=6 && hh<12){
    msg1[0].innerText = "GRAB SOME HEALTHY BREAKFAST!!!"
  }
            //  if(HH>=6 && HH < 17){
            //     msg1[0].innerText = "LET'S HAVE SOME LUNCH !!"
            //     } 
            //  if(HH >= 17 && HH < 19){
            //     msg1[0].innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
            // }
            //  if(HH >= 19 && HH < 6){
            //     msg1[0].innerText = "CLOSE YOUR EYES AND GO TO SLEEP"
            // }

            if (HH >= 6 && HH < 12) {
                msg1[0].innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
              } else if (HH >= 1 && HH < 3) {
                msg1[0].innerText = "LET'S HAVE SOME LUNCH !!";
              } else if (HH >= 3 && HH < 7) {
                msg1[0].innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
              } else {
                msg1[0].innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
              }
    setTimeout(getTime, 1000);
}
getTime();


    

// funtion for set alarm, change picture and display message


function execute(){
    let now = new Date();
    let hour = now.getHours();
    
   let drop1 = document.getElementsByClassName("time")[0]
   let output1 = drop1.options[drop1.selectedIndex].innerText
   document.getElementById("txtval1").innerText = output1

   let msg2=document.querySelectorAll(".message")
   let picture=document.querySelectorAll(".displayimage")
   
   
    if(parseInt(drop1.value)==hour){
    msg2[0].innerHTML="GOOD MORNING!! WAKEUP!!"
    picture[0].src="./Component 30 – 1.svg"}
    
    

    let drop2 = document.getElementsByClassName("time")[1]
    let output2 = drop2.options[drop2.selectedIndex].innerText
    document.getElementById("txtval2").innerText = output2 
    
    if(parseInt(drop2.value)==hour){
    msg2[0].innerHTML="GOOD AFTERNOON!! TAKE SOME SLEEP!!"
    picture[0].src="./afternoon.svg"}

    let drop3 = document.getElementsByClassName("time")[2]
    let output3 = drop3.options[drop3.selectedIndex].innerText
    document.getElementById("txtval3").innerText = output3 
    
    if(parseInt(drop3.value)==hour){
    msg2[0].innerHTML="GOOD EVENING!!"
    picture[0].src="./goodeveningtea.png"}

    let drop4 = document.getElementsByClassName("time")[3]
    let output4 = drop4.options[drop4.selectedIndex].innerText
    document.getElementById("txtval4").innerText = output4 
    
    if(parseInt(drop4.value)==hour){
    msg2[0].innerHTML="GOOD NIGHT!!"
    picture[0].src="./Group 5194.png"}
}

// if (hours > 12) {
//     tmzone.innerText = "PM";
//   } else {
//     tmzome.innerText = "AM";
//   }
//   if (hours > 12) {
//     hours -= 12;
//   }
//   if (hours < 10) {
//     hours = "0" + hours;
//   }
//   if (minut < 10) {
//     minut = "0" + minut;
//   }
//   if (second < 10) {
//     second = "0" + second;
//   }