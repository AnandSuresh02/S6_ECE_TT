function cd(cdate,dest){
  var x = setInterval(function() {

      var now = new Date().getTime();
    var distance = cdate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);  
    dest.innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
      clearInterval(x);
      dest.innerHTML = "EXAM OVER";
    }
  }, 1000);
  }
  var cdwc = new Date("May 22, 2024 9:30:00").getTime();
  var wc  = document.querySelector('.wc');
  cd(cdwc,wc);
  var cdets = new Date("May 27, 2024 9:30:00").getTime();
  var ets  = document.querySelector('.ets');
  cd(cdets,ets);
  var cdrts = new Date("May 30, 2024 9:30:00").getTime();
  var rts  = document.querySelector('.rts');
  cd(cdrts,rts);
  var cdmt = new Date("Jun 6, 2024 9:30:00").getTime();
  var mt  = document.querySelector('.mt');
  cd(cdmt,mt);
