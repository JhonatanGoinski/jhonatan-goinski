document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    // Impede o envio padrão do formulário
    event.preventDefault();         
    // Envia os dados do formulário
    this.submit();
});