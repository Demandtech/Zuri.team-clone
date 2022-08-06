var accordion = document.getElementsByClassName("accordion-box");
  
 for(i = 0; i < accordion.length; i++){
   accordion[i].addEventListener("click", function(){
    this.classList.toggle("active");
   })
 }

 //MODALS

 var modal1 = document.getElementById("modal1");
 var modalbtn = document.getElementById("internship-btn")
 var modalclosebtn = document.getElementById("modal-close")

modalbtn.onclick = function(){
  modal1.style.display = "block";
}

modalclosebtn.onclick = function(){
  modal1.style.display =  "none";
}

modal1.onclick = function(event) {
  if(event.target == modal1) {
    modal1.style.display = "none";
  }
}

 var modal2 = document.getElementById("modal2");
 var modalbtn2 = document.getElementById("reward-btn");
 var modalclosebtn2 = document.getElementById("modal-close2");

 modalbtn2.onclick = function () {
     modal2.style.display = "block";
 };

 modalclosebtn2.onclick = function () {
     modal2.style.display = "none";
 };

 modal2.onclick = function (event) {
     if (event.target == modal2) {
         modal2.style.display = "none";
     }
 }

  var modal3 = document.getElementById("modal3");
  var modalbtn3 = document.getElementById("job-btn");
  var modalclosebtn3 = document.getElementById("modal-close3");

  modalbtn3.onclick = function () {
      modal3.style.display = "block";
  };

  modalclosebtn3.onclick = function () {
      modal3.style.display = "none";
  };

  modal3.onclick = function (event) {
    if (event.target == modal3) {
      modal3.style.display = "none";
    }
  }

    var modal4 = document.getElementById("modal4");
    var modalbtn4 = document.getElementById("training-btn");
    var modalclosebtn4 = document.getElementById("modal-close4");

    modalbtn4.onclick = function () {
        modal4.style.display = "block";
    };

    modalclosebtn4.onclick = function () {
        modal4.style.display = "none";
    };

    modal4.onclick = function (event) {
        if (event.target == modal4) {
            modal4.style.display = "none";
        }
    };    

    