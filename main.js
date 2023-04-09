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
  var cdlic = new Date("July 7, 2023 9:30:00").getTime();
  var lic  = document.querySelector('.emt');
  cd(cdlic,lic);
  var cddsp = new Date("July 11, 2023 9:30:00").getTime();
  var dsp  = document.querySelector('.vlsi');
  cd(cddsp,dsp);
  var cdadc = new Date("July 13, 2023 9:30:00").getTime();
  var adc  = document.querySelector('.itc');
  cd(cdadc,adc);
  var cdcs = new Date("July 19, 2023 9:30:00").getTime();
  var cs  = document.querySelector('.dip');
  cd(cdcs,cs);
  var cdmfe = new Date("July 21, 2023 9:30:00").getTime();
  var mfe  = document.querySelector('.ieft');
  cd(cdmfe,mfe);
  var cddm = new Date("July 24, 2023 9:30:00").getTime();
  var dm  = document.querySelector('.ccw');
  cd(cddm,dm);