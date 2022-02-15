window.onload=function handle(){
  let carro1 = document.querySelector('.carro1');

  let carro2 = document.querySelector('.carro2');

  let button = document.querySelector('.start-race-btn');

  carro1.style.marginLeft = '0px';
  carro2.style.marginLeft = '0px';

  button.addEventListener('click', function() {

    // 1. Gerar um número aleatorio
    let randomDistance1 = Math.random() * 100;
     // 2. Gerar outro número aleatorio
     let randomDistance2 = Math.random() * 100;
    
    // 2. Fazer com que os carros andem numa distancia aleatoria
    carro1.style.marginLeft = parseInt(carro1.style.marginLeft) + randomDistance1 + 'px';

    carro2.style.marginLeft = parseInt(carro2.style.marginLeft) + randomDistance2 + 'px';

    // se(if) margin esquerda do carro 1 for maior que (A largura da tela - a largura do carro 1)
    if (parseInt(carro1.style.marginLeft) > (window.innerWidth - carro1.offsetWidth)) {
      alert('carro 1 GANHOU');
      reset();
    }
    // se(if) margin esquerda do carro 2 for maior que (A largura da tela - a largura do carro 2)
      if (parseInt(carro2.style.marginLeft) > (window.innerWidth - carro2.offsetWidth)) {
        alert('carro 2 GANHOU');
        reset();
      }

  });
}


function reset() {
  let carro1 = document.querySelector('.carro1');
  let carro2 = document.querySelector('.carro2');
  carro1.style.marginLeft = '0px';
  carro2.style.marginLeft = '0px';

}
