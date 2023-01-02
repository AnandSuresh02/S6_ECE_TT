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
  var cdlic = new Date("Jan 16, 2023 9:30:00").getTime();
  var lic  = document.querySelector('.lic');
  cd(cdlic,lic);
  var cddsp = new Date("Jan 19, 2023 9:30:00").getTime();
  var dsp  = document.querySelector('.dsp');
  cd(cddsp,dsp);
  var cdadc = new Date("Jan 23, 2023 9:30:00").getTime();
  var adc  = document.querySelector('.adc');
  cd(cdadc,adc);
  var cdcs = new Date("Jan 27, 2023 9:30:00").getTime();
  var cs  = document.querySelector('.cs');
  cd(cdcs,cs);
  var cdmfe = new Date("Jan 30, 2023 9:30:00").getTime();
  var mfe  = document.querySelector('.mfe');
  cd(cdmfe,mfe);
  var cddm = new Date("Feb 1, 2023 9:30:00").getTime();
  var dm  = document.querySelector('.dm');
  cd(cddm,dm);