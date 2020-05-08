
var c = 20;
var skor =0; 
var t;
var timer_is_on = 0;

function timedCount() {
    $("#time").html('<h5> '+ c + "Sn</h5>") 
  c = c - 1;
  if(c>=0){
    t = setTimeout(timedCount, 1000);
  }
  else{
    stopCount();
    $("#finishTime").html('<h3>Süreniz Dolmuştur</h3>')
    modal();
  }
}

function startCount() {
  if (!timer_is_on) {
    timer_is_on = 1;
    timedCount();
  }
}

function stopCount() {
  clearTimeout(t);
  timer_is_on = 0;
}

function modal(){
    swal({
        text: "Süreniz Dolmuştur!",
      });
}
function statusFailed(){
    swal("Malesef", "Kaybettiniz!", "info");
    stopCount();
}
function result(obj,question){
    if(obj.name==0){
        obj.className="btn btn-danger";
        statusFailed();
    }
    else{
        obj.className="btn btn-success";
        $("#question"+question)[0].style.display="none";
        question = parseInt(question)+1;
        skor = skor+15;
        $("#skor").html('<h5> '+ skor +' Puan </h5>')
        statusSuccess(question);
    }
}
function statusSuccess(question){
    swal("Tebrikler", "Devammm!", "success");
    c=20;
    $("#question"+question)[0].style.display="block";
    if(question==5){
        stopCount();
    }else{
        startCount();
    }
}