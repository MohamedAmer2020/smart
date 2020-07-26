  
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      document.getElementById("user_div").style.display="block";
      document.getElementById("login_div").style.display="none";
      
  } else {
    document.getElementById("user_div").style.display="none";
    document.getElementById("login_div").style.display="block";
  }
});
  

  function login(){
    var useremail=document.getElementById("email_field");
    var userpassword=document.getElementById("password_field");
    
   /* window.alert(useremail +""+ userpassword);*/
   firebase.auth().signInWithEmailAndPassword(useremail, userpassword).catch(function(error) {
 
   var errorCode = error.code;
   var errorMessage = error.message;
   window.alert("Error"+ errorMessage);
 
});
    
    
  }