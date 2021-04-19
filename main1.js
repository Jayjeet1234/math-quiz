name1 = localStorage.getItem("player1");
name2 = localStorage.getItem("player2");
player1score= 0;
player2score = 0;
function send(){
    no1 = document.getElementById("no1").value;
    no2 = document.getElementById("no2").value;
    corrans = parseInt(no1) * parseInt(no2);
    console.log(corrans);
    row = "<h4>"+no1+" X "+no2+"</h4>"+"<br>Answer: <input type='text' id='answerbox'>"+"<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    document.getElementById("output").innerHTML = row;
    document.getElementById("no1").value = "";
    document.getElementById("no2").value = "";
}
function loadit(){
    document.getElementById("player1_name").innerHTML = name1+": ";
    document.getElementById("player2_name").innerHTML = name2+": ";
    document.getElementById("player1_score").innerHTML = player1score;
    document.getElementById("player2_score").innerHTML = player2score;
    document.getElementById("plyrqs").innerHTML = "Question turn - "+name1;
    document.getElementById("plyrans").innerHTML = "Answer turn - "+name2;
}
que = "1"
ans = "2"
function check(){
    get_answer = document.getElementById("answerbox").value;
    if(get_answer == corrans){
        if(ans == "1"){
         uplayer1score = player1score +1;
         document.getElementById("player1_score").innerHTML = uplayer1score;
        }
        else{
            uplayer2score = player2score +1;
            document.getElementById("player2_score").innerHTML = uplayer2score;
        }
        
    }
    if(que == "1"){
        que == "2";
        document.getElementById("plyrqs").innerHTML = "Question turn - "+name2;
    }
    else{
        que == "1";
        document.getElementById("plyrqs").innerHTML = "Question turn - "+name1;  
    }
    if(ans == "1"){
        ans == "2";
        document.getElementById("plyrans").innerHTML = "Answer turn - "+name2;
    }
    else{
        ans == "1";
        document.getElementById("plyrans").innerHTML = "Answer turn - "+name1;  
    }
    document.getElementById("output").innerHTML = "";
}