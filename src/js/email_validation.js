function validation()
{
  let form    = document.getElementById("form"),
      email   = document.getElementById("email").value,
      text    = document.getElementById("text"),
      pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(email.match(pattern)){
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML="Su formato de email es válido";
    text.style.color="#00ff00";
  }
  else{
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML="Por favor ingrese un formato de email válido";
    text.style.color="#ff0000";
  }
  if(email==''|| email==" "){
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerHTML="";
    text.style.color="#00ff00";
  }
}
