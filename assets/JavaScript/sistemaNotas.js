// function verificar(){
//   let ava1 = parseInt(document.querySelector('#ava1').value)
//   let ava2 = parseInt(document.querySelector('#ava2').value)
//   let ava3 = parseInt(document.querySelector('#ava3').value)
//   let ava4 = parseInt(document.querySelector('#ava4').value)
//   let resultado = (ava1*1.5 + ava2*1.5 + ava3*4 + ava4*3) / 10
//   console.log(resultado.toFixed(1))
//   document.querySelector('#ava1').value = ''
//   document.querySelector('#ava2').value = ''
//   document.querySelector('#ava3').value = ''
//   document.querySelector('#ava4').value = ''
// }


function verificar(){
  var soma = 0
  var peso  = ['1.5','1.5', '4', '3']
  for(var i = 0; i < 4; i++) {
    soma = (parseInt(document.querySelector('#ava'+(i+1)).value) * peso[i]) + soma
  }
  var resultado = soma / 10
  console.log(resultado)
}