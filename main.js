function login(){
    a = document.getElementById("plyr1").value;
    b = document.getElementById("plyr2").value;
    localStorage.setItem("player1", a);
    localStorage.setItem("player2", b);
    window.location = "index1.html";
    }