let nome = document.getElementById('nome')
let email = document.getElementById('email')
let assunto = document.querySelector('#assunto')
let mapa = document.querySelector('#mapa')

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3){
      txtNome.innerHTML = "Nome Inválido!"
      txtNome.style.color = "red"
    }else{
        txtNome.innerHTML = 'Nome Válido!'
        txtNome.style.color = "green"
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 ){
        txtEmail.innerHTML = "E-mail Inválido!"
        txtEmail.style.color = "red"
    }else{
        txtEmail.innerHTML = 'E-mail Válido!'
        txtEmail.style.color = "green"
        }
    }

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
    if (assunto.value.length >= 100){
        txtAssunto.innerHTML = "O texto é muito grande, digite no máximo 100 caracteres!"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    }else{
        txtAssunto.style.display = "none"
    }
}

function validarCampos(){
if(nome.value == "" || email.value == "" || assunto.value == ""){
    alert("Preencha o formulário corretamente antes de enviar!")
}else{
    alert("Formulário enviado com sucesso!.")
}
}

function mapaZoom(){
    mapa.style.width = "800px"
    mapa.style.heigth = "800px"
}

function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.heigth = "250px"
}

//Estilizando inputs no próprio javascript
nome.style.width = "100%"
email.style.width = "100%"
assunto.style.width = "100%"
