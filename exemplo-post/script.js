const nomeProduto = document.getElementById('nome-produto');
const valorProduto = document.getElementById('valor-produto');
const descricaoProduto = document.getElementById('descricao-produto');
const btnEnviar = document.getElementById('btn-enviar');
const feedbackUsuario = document.getElementById('feedback-usuario')
const produtosCadastrados = document.getElementById('produtos-cadastrados')


function generateProduct(event){
    event.preventDefault();
    const response = fetch("https://httpbin.org/post",{
    method:'POST',
    headers: { 
        "Content-Type": "application/json"
     },
    
    /** Se der errado, colocar o JSON em uma variável para só então atribuir esta variável ao body */
     body: JSON.stringify({
        nome: nomeProduto.innerText,
        preco: valorProduto.innerText,
        desc:descricaoProduto.innerText        
     })
})
    response.then(
        alert("Produto Cadastrado com Sucesso!")                   
    )
    response.then((data)=>{

        const div = document.createElement('div')
        div.innerHTML = `
        <h1>${nomeProduto.value}</h1>
        <h1>${valorProduto.value}</h1>
        <h2>${descricaoProduto.value}</h2>        
        `
        document.body.appendChild(div)
        nomeProduto.value = "";
        valorProduto.value = "";
        descricaoProduto.value = "";
    }
    )
    response.catch("Falha ao cadastrar produto!")



}
btnEnviar.addEventListener('click', (event)=>generateProduct(event));