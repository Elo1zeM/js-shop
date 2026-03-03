// Selecionar elementos
const form = document.getElementById("checkoutForm");
const resultadoDiv = document.getElementById("resultado");


form.addEventListener("submit", function(e) {
    e.preventDefault(); 

    // Capturar valores
    const inputPreco = document.getElementById("inputPreco").value;
    const inputQtd = document.getElementById("inputQtd").value;
    const inputCupom = document.getElementById("inputCupom").checked;

    // Converter tipos
    const preco = parseFloat(inputPreco);
    const quantidade = parseInt(inputQtd);
    const cupom = inputCupom; 

    // Validar entradas
    if (isNaN(preco) || isNaN(quantidade) || preco < 0 || quantidade < 1) {
        resultadoDiv.textContent = "Por favor, insira valores válidos!";
        return;
    }

    // Calcular subtotal
    const subtotal = preco * quantidade;

    // Calcular desconto
    const desconto = cupom ? subtotal * 0.10 : 0;

    // Total final
    const total = subtotal - desconto;

    // Exibir resultado formatado
    resultadoDiv.innerHTML = `
        Subtotal: R$ ${subtotal.toFixed(2)}<br>
        Desconto: R$ ${desconto.toFixed(2)}<br>
        Total a pagar: R$ ${total.toFixed(2)}
    `;
});

console.log("Preço:", preco);
  console.log("Quantidade:", quantidade);
  console.log("Subtotal:", subtotal);
  console.log("Cupom aplicado:", cupom);
  console.log("Total final:", totalFormatado);