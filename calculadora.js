window.onload = function() {
    let botoes = document.querySelectorAll("button");
    let input = document.querySelector("input");
    for (let index = 0; index < botoes.length; index++) {
        botoes[index].addEventListener("click", function(e) {
            let list = input.value.split("");
            if (botoes[index].innerText == "AC") {
                input.value = "";
            } else if (botoes[index].innerText == "C") {
                list.pop();
                let operacao = "";
                for (let i = 0; i < list.length; i++) {
                    operacao += list[i];
                }
                input.value = operacao;
            } else if (botoes[index].innerText == "=") {
                input.value = eval(input.value);
            } else {
                input.value += botoes[index].innerText;
            }
            e.preventDefault();
        })
    }
}