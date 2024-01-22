
  function PerguntaFuncaoDeClique() {
    alert("Você clicou no botão!");
  }

  document.getElementById("PerguntaBotao").addEventListener("click", PerguntaFuncaoDeClique);

  function toggleClasse() {

    var perguntaconteudo  = document.getElementById("perguntaconteudo");

    
    perguntaconteudo.classList.toggle("show");
  }
  document.getElementById("perguntaconteudo").addEventListener("click", toggleClasse);