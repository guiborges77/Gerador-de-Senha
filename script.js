let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789!@#$%";

let novaSenha = " ";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML= this.value;
}

//Função para gerar uma senha aleatória
function generatePassword(){
    let pass = "";

    for(let i=0, n = charset.length; i < sliderElement.value; ++i){
       pass += charset.charAt(Math.floor(Math.random() * n)) ;
    }
    
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;

}

//Função para copiar a senha ao clicar na senha
function copyPassword(){
    navigator.clipboard.writeText(novaSenha);
}

// Função para alertar quando a senha for copiada.
function senhaCopiada(){
    alert("Sua senha foi copiada para a área de transferência.")
}
