document.addEventListener('DOMContentLoaded', function () {
  var perguntas = document.querySelectorAll('.pergunta');

  perguntas.forEach(function (pergunta) {
      var titulo = pergunta.querySelector('.Titulo');
      var conteudo = pergunta.querySelector('.conteudo');
      var iconePergunta = pergunta.querySelector('.iconePergunta');

      titulo.addEventListener('click', function () {
          conteudo.classList.toggle('show');

          iconePergunta.classList.toggle('perfil-aberto', conteudo.classList.contains('show'));
      });
  });
});
