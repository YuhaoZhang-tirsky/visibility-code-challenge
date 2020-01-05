
startChange = function(){
  for (let i = 4; i > 0; i--) {
    var id = i;
    var ms = 1000 * (4 - i); 
    setTimeout("changeVisibility(" + id + ")", ms);    
  }
};

changeVisibility = function(idNumber){
  document.getElementById(idNumber).style.visibility = "visible";
};

startChange()


