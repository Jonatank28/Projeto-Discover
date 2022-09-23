function verificar(){
  let ava1 = parseInt(document.querySelector('#ava1').value)
  let ava2 = parseInt(document.querySelector('#ava2').value)
  let ava3 = parseInt(document.querySelector('#ava3').value)
  let ava4 = parseInt(document.querySelector('#ava4').value)
  let resultado = (ava1*1.5 + ava2*1.5 + ava3*4 + ava4*3) / 10
  if(String(ava1).length == 3 || String(ava2).length == 3 || String(ava3).length == 3 ||  String(ava4).length == 3){
    alert(`[Erro] Dados incompletos`)
  } else{
    let carNota = document.querySelectorAll('.cardNota')
    let titulo  = document.querySelector('.containerNota h1')
    let p       = document.createElement('p')
    let p1       = document.createElement('p')
    let calcular = document.querySelector('.calcular')
    let voltar   = document.querySelector('.voltar')
    let novo     = document.querySelector('.novo')
    carNota.forEach((a) => {
      a.classList.add('esconder')
      calcular.classList.add('esconder')
      voltar.classList.add('esconder')
      novo.style.display = 'block'
    })
    titulo.appendChild(p1)
    titulo.appendChild(p)
    p.classList.add('p')
    p1.classList.add('p1')
    if(resultado >= 7){
      p.classList.add('aprovado')
      p1.innerHTML = (`Sua nota final foi de ${resultado.toFixed(1)}`)
      p.innerHTML = 'Aprovado'
    } else{
      p.classList.add('reprovado')
      p1.innerHTML = (`Sua nota final foi de ${resultado.toFixed(1)}`)
      p.innerText = (`Reprovado`)
      
    }
  }
}
















// function verificar(){
//   var soma = 0
//   var peso  = ['1.5','1.5', '4', '3']
//   for(var i = 0; i < 4; i++) {
//     soma = (parseInt(document.querySelector('#ava'+(i+1)).value) * peso[i]) + soma
//   }
//   if(soma[i].length > 0){
//     var resultado = soma / 10
//     console.log(resultado)
//   }
// }