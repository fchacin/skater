//formulario para contactos
var data = [];

function sendData(){
  const name = document.querySelector("#name").value;
  const lastname = document.querySelector("#lastname").value;
  const number = document.querySelector("#number").value;
  const message = document.querySelector("#message").value;

  if(name == "" || lastname == "" || number == "" || message == ""){
    alert("Por favor llene todos los campos");
    return false;
  }

  data.push({
      name: name,
      lastname: lastname,
      number: number,
      message: message
  });

  console.log(data);
}