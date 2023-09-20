let username;
let password;
function check(){
    username=document.getElementById("username").value;
    password=document.getElementById("password").value;
    if(username=="" || password==""){
      alert("username and password cannot be null");
    }
    else {
       if (password.length<=4){
        alert("password must be greater than 4 characters");
       }
     if(username=="delna" && password=="delna@2001"){
     document.writeln("logged in.........");
       }
    
    else{
        alert("Incorrect password or username");
    }

 }
}