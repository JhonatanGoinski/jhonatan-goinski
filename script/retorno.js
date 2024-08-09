document.addEventListener("DOMContentLoaded", function () {
    var btnTopo = document.getElementById("btnTopo");

    // Exibe ou oculta o botão ao rolar a página
    window.onscroll = function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            btnTopo.style.display = "block";
        } else {
            btnTopo.style.display = "none";
        }
    };

    // Scroll suave ao topo ao clicar no botão
    btnTopo.addEventListener("click", function () {
        document.body.scrollTop = 0; // Para navegadores Safari
        document.documentElement.scrollTop = 0; // Para outros navegadores
    });
});
