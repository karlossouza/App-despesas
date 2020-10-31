/* acompanha o "on click na pagina html"*/
function cadastrarDespesas() {
	
	let ano = document.getElementById('ano')
	let mes = document.getElementById('mes')
	let dia = document.getElementById('dia')
   let tipo = document.getElementById('tipo')
   let valor = document.getElementById('valor')
   let descricao = document.getElementById('descricao')


   console.log(ano.value)
   console.log(mes.value)
   console.log(dia.value)
   console.log(tipo.value)
   console.log(valor.value)
   console.log(descricao.value)

   /*gravar(despesas)*/
}


function gravar(d){
   
   localStorage.setItem('despesas',JSON.stringify(d))
}