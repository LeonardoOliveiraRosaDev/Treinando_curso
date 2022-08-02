let home = document.querySelector('.home');
let produtos = document.querySelector('.produtos');
let sobre = document.querySelector('.sobre');
let contato = document.querySelector('.contato');
let item = document.querySelector('.item');

produtos.addEventListener("click", function(e){

    if(item.classList.contains("dropdown")){
        item.classList.remove("dropdown");
    }else{
        item.classList.add("dropdown");
    }

})