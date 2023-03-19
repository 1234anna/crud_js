let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("botão clicado");
    formValidation();
})

let formValidation = () => {
    if(input.value === ""){
        console.log("ERRO");
        msg.innerHTML = "Esse campo não pode ficar vazio";
    } else{
        console.log("Sucesso");
        msg.innerHTML = "";
        accetData();
    }
}

let data = {};

let accetData = () => {
    data ["text"] = input.value;
    console.log(data);
    createPost();
}

let createPost = () => {
    posts.innerHTML +=
    `<div>
    <p>${data.text}</p>
    <span class="options">
    <i onClick="editPost(this)" class="fas fa-edit"></i>
    <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
    </div>
    `;
    input.value = "";
};

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML
    e.parentElement.parentElement.remove();
}

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};
