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
  var cdmaa = new Date("Jan 5, 2024 9:30:00").getTime();
  var maa  = document.querySelector('.maa');
  cd(cdmaa,maa);
  var cdofc = new Date("Jan 9, 2024 9:30:00").getTime();
  var ofc  = document.querySelector('.ofc');
  cd(cdofc,ofc);
  var cdres = new Date("Jan 12, 2024 9:30:00").getTime();
  var res  = document.querySelector('.res');
  cd(cdres,res);
  var cdise = new Date("Jan 17, 2024 9:30:00").getTime();
  var ise  = document.querySelector('.ise');
  cd(cdise,ise);
